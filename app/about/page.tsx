'use client';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image
            src="/logo.png"
            alt="PlovCoin Logo"
            width={32}
            height={32}
            className="rounded-full meme-icon"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            PlovCoin ($PLOV)
          </span>
        </Link>
        <nav className="ml-auto flex gap-6 items-center">
          <Link href="/#features" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link href="/about" className="text-sm font-medium text-blue-600 font-bold">
            About
          </Link>
          <Link href="/roadmap" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Roadmap
          </Link>
          <Link href="/#community" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Community
          </Link>
          <Link href="/whitepaper" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Whitepaper
          </Link>
        </nav>
        <div className="ml-6 flex gap-2 items-center">
          <Button
            size="sm"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Join PlovArmy
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              About PlovCoin ($PLOV)
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              PlovCoin ($PLOV) is a meme coin built on Solana, inspired by the cultural love for plov. With a vibrant PlovArmy community, #PlovChallenge campaigns, and PlovFest events, we’re bringing food, fun, and Web3 together. Our roadmap includes Kazan Genesis NFTs, PlovDAO governance, and a PlovVerse metaverse by 2027.
            </p>
            <Button asChild variant="outline">
              <Link href="/whitepaper#introduction">Read the Whitepaper</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <footer className="w-full py-6 bg-white border-t">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="PlovCoin Logo"
                width={24}
                height={24}
                className="rounded-full meme-icon"
              />
              <span className="font-semibold">PlovCoin ($PLOV)</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/whitepaper" className="hover:text-blue-600 transition-colors">
                Whitepaper
              </Link>
              <Link href="/roadmap" className="hover:text-blue-600 transition-colors">
                Roadmap
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                Support
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">© 2025 PlovCoin. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}