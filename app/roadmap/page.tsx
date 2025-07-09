'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Roadmap() {
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
          <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="/roadmap" className="text-sm font-medium text-blue-600 font-bold">
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
              PlovCoin ($PLOV) Roadmap
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              From Earth’s kazan to Martian plov! 🚀🍚
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 relative"
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <Card className="card">
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-bold">Q3–Q4 2025: Kazan Warm-Up</h3>
                      <ul className="text-muted-foreground list-disc list-inside">
                        <li>Launch of plovcoin.com and whitepaper v1.5.5</li>
                        <li>Airdrop: 3 waves (Plov Meme Blast, Whitelist Spice Drop, NFT & Telegram Feast, 50/50 unlock)</li>
                        <li>Kazan Genesis NFT: 10,000 units on Magic Eden/Tensor</li>
                        <li>Meme challenges: #PlovChallenge</li>
                        <li>PlovFest: online and offline events</li>
                        <li>Listing on Raydium and Jupiter</li>
                        <li>Smart contract audits for NFT and DAO (CertiK/Hacken)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-1/2 flex justify-start pl-8">
                  <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10"></div>
                </div>
              </div>

              <div className="flex items-center flex-row-reverse">
                <div className="w-1/2 pl-8 text-left">
                  <Card className="card">
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-bold">Q1–Q4 2026: DAO & Hype Orbit</h3>
                      <ul className="text-muted-foreground list-disc list-inside">
                        <li>Launch of PlovDAO (access via 1M $PLOV or Kazan Genesis NFT)</li>
                        <li>Voting: tax, partnerships, PlovBurn, reserves</li>
                        <li>4th airdrop wave: PlovDAO Party</li>
                        <li>Team KYC by Q2 2026</li>
                        <li>Transfer/disable Update Authority via DAO</li>
                        <li>Partnerships with NGOs and launch of PlovCharity</li>
                        <li>Expansion of PlovFest, global challenges</li>
                        <li>Goal: listing on Binance/Bybit</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-1/2 flex justify-end pr-8">
                  <div className="w-4 h-4 bg-purple-600 rounded-full relative z-10"></div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <Card className="card">
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-bold">2027: PlovVerse & Multichain</h3>
                      <ul className="text-muted-foreground list-disc list-inside">
                        <li>PlovVerse: metaverse on Solana (PlovX, DAO zones, festivals)</li>
                        <li>Collaborations with GameFi studios</li>
                        <li>Multichain: bridges to Ethereum, BNB Chain</li>
                        <li>Burning of reserve (0.91B $PLOV via DAO)</li>
                        <li>Plov as a Web3 community currency</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-1/2 flex justify-start pl-8">
                  <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10"></div>
                </div>
              </div>
            </div>
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