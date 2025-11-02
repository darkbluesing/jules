import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-korean",
});

export const metadata: Metadata = {
  title: "Korean Name Finder",
  description: "We'll gift you a name with a beautiful meaning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${notoSansKR.variable} font-display bg-background-light dark:bg-background-dark`}
      >
        <Providers>
          <div className="relative flex min-h-screen w-full flex-col overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute -top-[20%] -left-[30%] w-[80%] h-[80%] bg-tae-red/50 dark:bg-tae-red/40 rounded-full blur-3xl animate-[spin_20s_linear_infinite_reverse]"></div>
              <div className="absolute -bottom-[20%] -right-[30%] w-[80%] h-[80%] bg-tae-blue/50 dark:bg-tae-blue/40 rounded-full blur-3xl animate-[spin_20s_linear_infinite]"></div>
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] aspect-square z-10">
              <div className="absolute top-0 left-0 w-1/2 h-full bg-tae-blue/10 dark:bg-tae-blue/20 rounded-b-full"></div>
              <div className="absolute top-0 right-0 w-1/2 h-full bg-tae-red/10 dark:bg-tae-red/20 rounded-b-full"></div>
            </div>
            <main className="relative z-20 flex w-full max-w-md mx-auto flex-1 flex-col">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}