import type { Metadata } from "next";
import { Dancing_Script } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" });
export const metadata: Metadata = {
  title: "Ereny's world",
  description: "gallery for art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />
      </head>
      <body className={cn(dancingScript.className, "dark ")}>{children}</body>
    </html>
  );
}
