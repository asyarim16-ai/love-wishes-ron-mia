"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Heart, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FallingHeart {
  id: number;
  left: number;
  duration: number;
  delay: number;
  size: number;
  collected: boolean;
}

const PRAISE_MESSAGES = [
  "Ты умница",
  "Я в тебе не сомневалась",
  "Молодец",
  "Мой герой",
];

const LOVE_MESSAGE = "Я тебя люблю, мой милый";

export default function HeartGame() {
  const [hearts, setHearts] = useState<FallingHeart[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastKey, setToastKey] = useState(0);
  const scoreRef = useRef(0);
  const idRef = useRef(0);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    setToastKey((prev) => prev + 1);
    setTimeout(() => setToastMessage(null), 3000);
  }, []);

  const spawnHeart = useCallback(() => {
    idRef.current += 1;
    const newHeart: FallingHeart = {
      id: idRef.current,
      left: Math.random() * 85 + 5,
      duration: Math.random() * 3 + 3,
      delay: Math.random() * 2,
      size: Math.random() * 16 + 20,
      collected: false,
    };
    setHearts((prev) => [...prev, newHeart]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, (newHeart.duration + newHeart.delay) * 1000);
  }, []);

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(spawnHeart, 800);
    return () => clearInterval(interval);
  }, [spawnHeart, gameOver]);

  const collectHeart = useCallback(
    (id: number) => {
      setHearts((prev) => prev.filter((h) => h.id !== id));
      const newScore = scoreRef.current + 1;
      scoreRef.current = newScore;
      setScore(newScore);

      if (newScore === 100) {
        showToast(LOVE_MESSAGE);
      } else if (newScore % 10 === 0) {
        const msg = PRAISE_MESSAGES[Math.floor(Math.random() * PRAISE_MESSAGES.length)];
        showToast(msg);
      }
    },
    [showToast]
  );

  return (
    <div className="min-h-screen gradient-hero-vibrant pattern-grid relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center justify-between px-4 pt-6 pb-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1 px-4 py-2 bg-white/80 text-pink-700 rounded-full border border-pink-200 shadow-sm hover:bg-white transition-all text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            На главную
          </Link>
          <div className="bg-white/80 backdrop-blur-sm px-5 py-2 rounded-full border border-pink-200 shadow-sm">
            <span className="text-pink-700 font-semibold">
              ❤️ {score}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pt-16 pb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-pink-800 drop-shadow-sm">
            Собери сердечки 💕
          </h1>
          <p className="text-pink-600/70 mt-1 text-sm">
            Кликай на сердечки, чтобы собрать их
          </p>
        </div>
      </div>

      {toastMessage && (
        <div
          key={toastKey}
          className={cn(
            "fixed top-24 left-1/2 -translate-x-1/2 z-50",
            "px-8 py-4 rounded-2xl shadow-xl border",
            "animate-heart-toast pointer-events-none",
            toastMessage === LOVE_MESSAGE
              ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-pink-300 text-lg font-bold"
              : "bg-white/95 text-pink-800 border-pink-200 text-base font-semibold"
          )}
        >
          {toastMessage === LOVE_MESSAGE ? `💕 ${toastMessage} 💕` : `💖 ${toastMessage}!`}
        </div>
      )}

      <div className="absolute inset-0 top-0 z-0">
        {hearts.map((heart) => (
          <button
            key={heart.id}
            onClick={() => collectHeart(heart.id)}
            className="absolute cursor-pointer transition-transform hover:scale-110"
            style={{
              left: `${heart.left}%`,
              top: "-60px",
              animation: `heart-spawn 0.5s ease-out forwards, heart-fall ${heart.duration}s linear ${heart.delay}s forwards`,
              animationFillMode: "forwards",
            }}
          >
            <div
              style={{
                animation: `heart-fall ${heart.duration}s linear ${heart.delay}s forwards`,
              }}
            >
              <Heart
                className="text-pink-500 drop-shadow-md"
                style={{
                  width: `${heart.size}px`,
                  height: `${heart.size}px`,
                  fill: "#f472b6",
                }}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
