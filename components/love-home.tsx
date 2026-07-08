"use client";

import { useState } from "react";
import { Heart, Sparkles, ChevronLeft, ChevronRight, Gamepad2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  dailyWishes,
  compliments,
  confessions,
  getTodayWish,
  getRandomCompliment,
  quizQuestions,
  type QuizQuestion,
} from "@/lib/data";

function DailyWishSection() {
  const wish = getTodayWish();
  return (
    <section className="w-full max-w-2xl mx-auto px-4 pt-12 pb-8">
      <div className="rounded-2xl bg-gradient-to-br from-pink-100 via-rose-100 to-orange-100 p-8 shadow-lg card-hover border border-pink-200/50">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-pink-500" />
          <h2 className="text-lg font-semibold text-pink-800">Пожелание дня 💌</h2>
        </div>
        <p className="text-lg leading-relaxed text-pink-900/80 font-medium">{wish}</p>
      </div>
    </section>
  );
}

function ComplimentSection() {
  const [compliment, setCompliment] = useState<string | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [hearts, setHearts] = useState<number[]>([]);

  const handleClick = () => {
    const newCompliment = getRandomCompliment();
    setCompliment(newCompliment);
    setShowAnimation(true);
    setHearts((prev) => [...prev, Date.now()]);
    setTimeout(() => setShowAnimation(false), 600);
  };

  return (
    <section className="w-full max-w-2xl mx-auto px-4 py-8">
      <div className="rounded-2xl bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 p-8 shadow-lg border border-pink-200/50">
        <h2 className="text-lg font-semibold text-pink-800 mb-4 text-center">
          Комплименты 💬
        </h2>
        <div className="relative min-h-[120px] flex items-center justify-center">
          {compliment && (
            <div className="relative">
              <p
                className={cn(
                  "text-center text-lg leading-relaxed text-pink-900/80 font-medium px-4",
                  showAnimation && "animate-compliment-pop-in"
                )}
              >
                {compliment}
              </p>
              {hearts.map((id) => (
                <span
                  key={id}
                  className="absolute left-1/2 -translate-x-1/2 text-pink-400 text-xl animate-heart-float pointer-events-none"
                >
                  ♥
                </span>
              ))}
            </div>
          )}
          {!compliment && (
            <p className="text-pink-400/60 text-center">
              Нажми на кнопку, чтобы услышать что-то приятное ✨
            </p>
          )}
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            <Heart className="w-4 h-4 fill-current" />
            Скажи что-то приятное
          </button>
        </div>
      </div>
    </section>
  );
}

function ConfessionsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);

  const goTo = (index: number) => {
    if (animating) return;
    setDirection(index > currentIndex ? "right" : "left");
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimating(false);
    }, 200);
  };

  return (
    <section className="w-full max-w-2xl mx-auto px-4 py-8">
      <div className="rounded-2xl bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 p-8 shadow-lg border border-pink-200/50">
        <div className="flex items-center gap-2 mb-6">
          <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
          <h2 className="text-lg font-semibold text-pink-800">Признания в любви 💕</h2>
        </div>

        <div className="relative min-h-[200px] flex items-center justify-center overflow-hidden">
          <div
            className={cn(
              "w-full transition-all duration-200",
              animating && (direction === "right" ? "-translate-x-4 opacity-0" : "translate-x-4 opacity-0")
            )}
          >
            <div className="gradient-romantic-card rounded-xl p-6 border border-pink-200/50 shadow-sm">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-pink-400 fill-pink-400 mt-1 shrink-0" />
                <p className="text-base leading-relaxed text-pink-900/80">
                  {confessions[currentIndex]}
                </p>
              </div>
              <div className="mt-4 flex justify-center gap-1">
                {confessions.map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      i === currentIndex ? "bg-pink-500 w-4" : "bg-pink-200"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => goTo(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="inline-flex items-center gap-1 px-4 py-2 bg-white/80 text-pink-700 rounded-full border border-pink-200 shadow-sm hover:bg-white hover:shadow-md transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            Назад
          </button>
          <button
            onClick={() => goTo(currentIndex + 1)}
            disabled={currentIndex === confessions.length - 1}
            className="inline-flex items-center gap-1 px-4 py-2 bg-white/80 text-pink-700 rounded-full border border-pink-200 shadow-sm hover:bg-white hover:shadow-md transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Вперёд
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const question = quizQuestions[currentQuestion];

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowResult(true);

    const isCorrect = question.allCorrect || index === question.correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    let message = "";
    if (percentage === 100) message = "Идеально! Ты знаешь меня лучше всех! 💕";
    else if (percentage >= 70) message = "Очень хорошо! Ты меня действительно знаешь! 😊";
    else if (percentage >= 40) message = "Неплохо! Но есть куда расти 😄";
    else message = "Кажется, нам нужно больше времени вместе! 🥰";

    return (
      <section className="w-full max-w-2xl mx-auto px-4 py-8">
        <div className="rounded-2xl bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 p-8 shadow-lg border border-pink-200/50 text-center">
          <h2 className="text-lg font-semibold text-pink-800 mb-4">Результат 🎯</h2>
          <p className="text-4xl font-bold text-pink-600 mb-2">
            {score} / {quizQuestions.length}
          </p>
          <p className="text-pink-900/80 mb-6">{message}</p>
          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all hover:scale-105"
          >
            Пройти заново
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full max-w-2xl mx-auto px-4 py-8">
      <div className="rounded-2xl bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-8 shadow-lg border border-pink-200/50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-pink-800">Викторина 📝</h2>
          <span className="text-sm text-pink-500 font-medium">
            {currentQuestion + 1} / {quizQuestions.length}
          </span>
        </div>

        <p className="text-lg font-medium text-pink-900 mb-6">{question.question}</p>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            let buttonClass =
              "w-full text-left px-4 py-3 rounded-xl border border-pink-200 bg-white/80 text-pink-900 hover:bg-pink-50 transition-all";

            if (showResult) {
              if (question.allCorrect) {
                buttonClass += " border-green-400 bg-green-50";
              } else if (index === question.correctIndex) {
                buttonClass += " border-green-400 bg-green-50";
              } else if (index === selectedAnswer) {
                buttonClass += " border-red-400 bg-red-50";
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showResult}
                className={buttonClass}
              >
                {option}
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className="mt-4 text-center">
            <p className={cn(
              "text-sm font-medium mb-3",
              selectedAnswer === question.correctIndex || question.allCorrect
                ? "text-green-600"
                : "text-red-600"
            )}>
              {selectedAnswer === question.correctIndex || question.allCorrect
                ? "Правильно! 🎉"
                : "Неправильно! 😅"}
            </p>
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              {currentQuestion < quizQuestions.length - 1 ? "Дальше" : "Узнать результат"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="flex justify-center gap-1 mt-4">
          {quizQuestions.map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                i === currentQuestion ? "bg-pink-500 w-4" : "bg-pink-200"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function LoveHome() {
  return (
    <div className="min-h-screen gradient-hero-vibrant pattern-grid">
      <header className="w-full text-center pt-8 pb-4 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-800 drop-shadow-sm">
          Привет, любимый 💕
        </h1>
        <p className="text-pink-600/80 mt-1">Этот сайт создан специально для тебя</p>
      </header>

      <DailyWishSection />
      <ComplimentSection />

      <section className="w-full max-w-2xl mx-auto px-4 py-8">
        <Link href="/game">
          <div className="rounded-2xl bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 p-8 shadow-lg border border-pink-200/50 card-hover cursor-pointer text-center">
            <Gamepad2 className="w-10 h-10 text-pink-500 mx-auto mb-3" />
            <h2 className="text-lg font-semibold text-pink-800 mb-2">Мини-игра 🎮</h2>
            <p className="text-pink-700/70">Собери сердечки и подними себе настроение!</p>
          </div>
        </Link>
      </section>

      <ConfessionsSection />
      <QuizSection />

      <footer className="w-full text-center py-8 px-4">
        <p className="text-pink-600/60 text-sm">
          Сделано с любовью специально для тебя 💕
        </p>
      </footer>
    </div>
  );
}
