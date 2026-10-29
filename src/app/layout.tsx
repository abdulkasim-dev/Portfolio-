import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Abdul Kasim Ajmal Khan — Software Engineer | Python Full-Stack",
  description: "Software Engineer specializing in Python, FastAPI, Next.js, Celery asynchronous workflows, and AI integrations. Based in Chennai, India.",
  keywords: [
    "Abdul Kasim Ajmal Khan",
    "Software Engineer",
    "Python Developer",
    "FastAPI",
    "Next.js",
    "Full-Stack Developer",
    "Celery",
    "Redis",
    "Chennai"
  ],
  openGraph: {
    title: "Abdul Kasim Ajmal Khan — Software Engineer",
    description: "Python Full-Stack Developer specializing in FastAPI, Next.js, and Distributed Systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-amber-500/20 selection:text-amber-300">
        <div className="fixed inset-0 grid-pattern pointer-events-none z-0" />
        <div className="fixed inset-0 radial-mesh pointer-events-none z-0" />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
