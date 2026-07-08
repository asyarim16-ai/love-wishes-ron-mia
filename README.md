{
  "name": "love-wishes-game",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --port 8080",
    "build": "next build",
    "start": "next start --port 8080",
    "lint": "next lint",
    "format": "prettier --write .",
    "typecheck": "tsc --noEmit",
    "check": "npm run typecheck && npm run lint",
    "db:migrate": "tsx scripts/migrate.ts"
  },
  "dependencies": {
    "next": "^15.2.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "lucide-react": "^0.487.0",
    "sonner": "^2.0.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.2.0",
    "tw-animate-css": "^1.2.5",
    "zod": "^3.24.3"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@types/react": "^19.1.0",
    "@types/react-dom": "^19.1.0",
    "typescript": "^5.8.3",
    "@tailwindcss/postcss": "^4.1.4",
    "tailwindcss": "^4.1.4",
    "eslint": "^9.24.0",
    "@eslint/eslintrc": "^3.3.1",
    "@eslint/js": "^9.24.0",
    "eslint-config-next": "^15.2.4",
    "prettier": "^3.5.3",
    "prettier-plugin-tailwindcss": "^0.6.11",
    "tsx": "^4.19.3",
    "@playwright/test": "^1.52.0",
    "playwright-cli": "^0.0.7"
  }
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
node_modules/
.next/
*.tsbuildinfo
next-env.d.ts
opencode_logs.tar.gz
src_cli_logs.tar.gz
shamefully-hoist=true
22
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0.042 265.755);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.965 0.001 286.375);
  --secondary-foreground: oklch(0.205 0.042 265.755);
  --muted: oklch(0.965 0.001 286.375);
  --muted-foreground: oklch(0.556 0.009 286.375);
  --accent: oklch(0.965 0.001 286.375);
  --accent-foreground: oklch(0.205 0.042 265.755);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0.004 286.375);
  --input: oklch(0.922 0.004 286.375);
  --ring: oklch(0.708 0.015 286.375);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0.042 265.755);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.965 0.001 286.375);
  --sidebar-accent-foreground: oklch(0.205 0.042 265.755);
  --sidebar-border: oklch(0.922 0.004 286.375);
  --sidebar-ring: oklch(0.708 0.015 286.375);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0.042 265.755);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0.042 265.755);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0.004 286.375);
  --primary-foreground: oklch(0.205 0.042 265.755);
  --secondary: oklch(0.269 0.015 286.375);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0.015 286.375);
  --muted-foreground: oklch(0.708 0.015 286.375);
  --accent: oklch(0.269 0.015 286.375);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0.009 286.375);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0.042 265.755);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0.015 286.375);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0.009 286.375);
}

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

.gradient-hero-vibrant {
  background: linear-gradient(135deg, #fce4ec 0%, #f8bbd0 30%, #f48fb1 60%, #f06292 100%);
}

.pattern-grid {
  background-image: radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px);
  background-size: 20px 20px;
}

.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(244, 143, 177, 0.3);
}

.gradient-romantic-card {
  background: linear-gradient(135deg, #fff5f7 0%, #fce4ec 50%, #f8bbd0 100%);
}

@keyframes heart-fall {
  0% {
    transform: translateY(-60px) scale(1);
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateY(calc(100vh + 60px)) scale(0.6);
    opacity: 0;
  }
}

@keyframes heart-collect-pop {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.7;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}

@keyframes heart-spawn {
  0% {
    transform: scale(0) rotate(-180deg);
    opacity: 0;
  }
  60% {
    transform: scale(1.2) rotate(10deg);
    opacity: 1;
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}

@keyframes heart-toast {
  0% {
    transform: scale(0) translateY(20px);
    opacity: 0;
  }
  20% {
    transform: scale(1.1) translateY(0);
    opacity: 1;
  }
  40% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: scale(0.8) translateY(-20px);
    opacity: 0;
  }
}

@keyframes compliment-pop-in {
  0% {
    transform: scale(0.3) translateY(30px);
    opacity: 0;
  }
  50% {
    transform: scale(1.05) translateY(-5px);
    opacity: 1;
  }
  70% {
    transform: scale(0.98) translateY(2px);
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

@keyframes heart-float {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-80px) scale(0);
    opacity: 0;
  }
}

.animate-heart-fall {
  animation: heart-fall var(--fall-duration, 4s) linear forwards;
}

.animate-heart-collect-pop {
  animation: heart-collect-pop 0.4s ease-out forwards;
}

.animate-heart-spawn {
  animation: heart-spawn 0.5s ease-out forwards;
}

.animate-heart-toast {
  animation: heart-toast 3s ease-out forwards;
}

.animate-compliment-pop-in {
  animation: compliment-pop-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.animate-heart-float {
  animation: heart-float 1s ease-out forwards;
}
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

const appName = "LoveWishes";

export const metadata: Metadata = {
  title: appName,
  description: "Сайт для моего парня",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
import LoveHome from "@/components/love-home";

export default function Home() {
  return <LoveHome />;
}
import HeartGame from "@/components/heart-game";

export default function GamePage() {
  return <HeartGame />;
}
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const dailyWishes = [
  "Сегодня я хочу, чтобы твой день был таким же тёплым и солнечным, как ты сам. Пусть каждая мелочь радует, а я буду рядом, даже если мы далеко.",
  "Просыпайся, мой хороший. Я уже скучаю по твоей улыбке. Пусть сегодняшний день принесёт тебе столько же счастья, сколько ты даришь мне каждый день.",
  "Доброе утро, любимый! Знай, что ты — лучшее, что случилось в моей жизни. Пусть этот день будет полон приятных сюрпризов и тёплых моментов.",
  "Самому лучшему мужчине на свете — доброе утро! Пусть всё, что ты задумал, сегодня получится легко и радостно. Я верю в тебя.",
  "Мой родной, желаю тебе дня, полного улыбок и приятных неожиданностей. Ты заслуживаешь всего самого лучшего, и я сделаю всё, чтобы ты это чувствовал.",
  "Пусть этот день будет особенным, как и ты. Не забывай, что есть человек, который думает о тебе каждую минуту. С добрым утром!",
  "Сегодня я желаю тебе почувствовать себя самым любимым и нужным. Потому что ты такой и есть. Для меня ты — целая вселенная.",
  "Самый лучший день начинается с мыслей о тебе. Пусть он принесёт тебе удачу, тепло и много поводов для улыбки. Люблю тебя!",
];

export const compliments = [
  "Ты — причина, по которой я просыпаюсь с улыбкой каждое утро.",
  "Когда ты улыбаешься, весь мир становится ярче. Твоя улыбка — моё любимое зрелище.",
  "Ты делаешь меня лучше одним своим присутствием. Спасибо, что ты есть.",
  "Я люблю смотреть, как ты увлечённо рассказываешь о том, что тебя вдохновляет. В эти моменты ты светишься изнутри.",
  "Твои объятия — лучшее место на земле. Там я чувствую себя в полной безопасности.",
  "У тебя самое доброе сердце, которое я знаю. Ты заботишься обо всех вокруг, но не забывай, что я тоже хочу заботиться о тебе.",
  "Ты — невероятный. И я буду напоминать тебе об этом каждый день, пока ты сам в это не поверишь.",
  "Я люблю твой голос, твой смех, твой взгляд. Я люблю каждую твою частичку, даже те, что ты считаешь несовершенными. Для меня ты идеален.",
  "С тобой даже самый обычный день превращается в приключение. Ты умеешь делать жизнь волшебной.",
  "Ты — моя самая большая удача. Встретить тебя — лучшее, что могло со мной случиться.",
  "Рядом с тобой я чувствую себя любимой, нужной и счастливой. Спасибо тебе за это чувство.",
  "Твои руки — моё самое любимое место. Когда ты обнимаешь меня, весь мир замирает.",
];

export const confessions = [
  "Я влюбилась в тебя не сразу. Сначала я просто чувствовала тепло, когда ты был рядом. Потом я начала замечать, как я жду наших встреч. А потом поняла, что ты стал моим домом. Не местом, а человеком, к которому хочется возвращаться снова и снова.",
  "Знаешь, о чём я мечтаю? Просыпаться рядом с тобой каждое утро. Готовить завтрак и слушать твой сонный голос. Смотреть с тобой глупые фильмы и обсуждать их до утра. Жить с тобой одну большую, тёплую, счастливую жизнь.",
  "Я люблю тебя не за то, какой ты со мной. Я люблю тебя за то, какой ты, когда никто не видит — добрый, заботливый, настоящий. И я счастлива, что именно мне ты показываешь себя настоящего.",
  "Каждый раз, когда ты говоришь «я тебя люблю», моё сердце делает сальто. Даже если ты говоришь это в сотый раз за день. Даже если просто в сообщении. Каждый раз — как в первый.",
  "Я хочу быть твоим убежищем. Местом, куда ты можешь прийти уставшим, злым, разбитым — и знать, что тебя здесь примут любого, обнимут и скажут, что всё будет хорошо.",
  "Помнишь тот день, когда мы впервые встретились? Для меня он стал точкой отсчёта новой жизни — жизни, в которой есть ты. И я благодарна судьбе за каждую секунду, проведённую с тобой.",
  "Я долго искала слова, чтобы описать, что ты для меня значишь. И поняла — таких слов просто нет. Потому что то, что я чувствую к тебе, больше, чем любовь. Ты — часть меня.",
  "Если бы я могла загадать только одно желание — я бы загадала, чтобы ты всегда был счастлив. Даже если не со мной. Но если честно, я очень надеюсь, что счастлив ты будешь именно со мной.",
];

export function getTodayWish(): string {
  const dayOfYear = Math.floor(
    (Date.UTC(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    ) -
      Date.UTC(new Date().getFullYear(), 0, 0)) /
      86400000
  );
  return dailyWishes[dayOfYear % dailyWishes.length];
}

export function getRandomCompliment(): string {
  return compliments[Math.floor(Math.random() * compliments.length)];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  allCorrect?: boolean;
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Где мы познакомились?",
    options: ["В парке", "В интернете", "В кафе"],
    correctIndex: 1,
  },
  {
    question: "Какой мой любимый цвет?",
    options: ["Голубой", "Фиолетовый", "Зелёный"],
    correctIndex: 1,
  },
  {
    question: "Куда мы сходили на первое свидание?",
    options: ["В кинотеатр", "В Rave смотреть кино", "На прогулку в парк"],
    correctIndex: 1,
  },
  {
    question: "Какой фильм я могу пересматривать бесконечно?",
    options: ["Титаник", "Горбатая гора", "1+1"],
    correctIndex: 0,
  },
  {
    question: "Какой сериал мы смотрели самым первым?",
    options: ["Закрытая школа", "Самая яркая звезда в ночном небе", "Такая как все"],
    correctIndex: 1,
  },
  {
    question: "Что я люблю пить по утрам?",
    options: ["Кофе", "Чай", "Какао"],
    correctIndex: 1,
  },
  {
    question: "Какое время года моё любимое?",
    options: ["Весна", "Лето", "Осень"],
    correctIndex: 0,
  },
  {
    question: "Когда мы вступили в отношения?",
    options: ["02.12.2024", "14.02.2024", "01.01.2025"],
    correctIndex: 0,
  },
  {
    question: "Что мы оба ненавидим есть?",
    options: ["Грибы", "Лук", "Печень"],
    correctIndex: 0,
  },
  {
    question: "Кого я люблю больше всех на свете?",
    options: ["Тебя", "Тебя", "Тебя"],
    correctIndex: 0,
    allCorrect: true,
  },
];
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
          С добрым утром, любимый 💕
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
