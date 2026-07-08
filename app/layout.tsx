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
