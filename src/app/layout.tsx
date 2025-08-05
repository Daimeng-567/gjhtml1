import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "工具合集",
  description: "这是一个简单的工具集合网站，提供各种实用工具和资源。",
  keywords: "工具, 资源, 实用工具, 网站",
  icons: "favicon.ico",
  authors: [{name: "wtc3300@gmail.com"}],
};
export default function RootLayout({
 children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="zh-CN">
      <body className={"win"}>
      {children}
      </body>
      </html>
  );
}
