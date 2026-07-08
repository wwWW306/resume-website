import type { Metadata } from "next";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

export const metadata: Metadata = {
  title: "李思齐 | 三维动画 · UI 设计与前端开发",
  description: "李思齐的个人简历 - 三维动画专业，UI 设计与前端开发",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="font-body antialiased cursor-none">
        <CustomCursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
