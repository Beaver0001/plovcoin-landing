'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Zap, Users, TrendingUp, Lock, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PlovcoinLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
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
        <nav className="ml-auto flex gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="/roadmap" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Roadmap
          </Link>
          <Link href="#community" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Community
          </Link>
          <Link href="/whitepaper" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Whitepaper
          </Link>
        </nav>
        <div className="ml-6 flex gap-2">
          <Button
            size="sm"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Join PlovArmy
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                Now Live on Solana
              </Badge>

              <div className="space-y-4 max-w-4xl">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight"
                >
                  PlovCoin: The world's tastiest meme coin.
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2"
                  >
                    Powered by <span className="plov-pulse font-extrabold text-purple-600">$PLOV</span> and cooked with love.
                  </motion.span>
                </motion.h1>
                <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2" />
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
                  PlovCoin ($PLOV) — meme coin on Solana, uniting the taste of plov, Web3 hype, and PlovArmy. Join #PlovChallenge and PlovFest!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Join PlovArmy
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  Learn More
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 w-full max-w-2xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">$0.001</div>
                  <div className="text-sm text-muted-foreground">Current Price</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">+50%</div>
                  <div className="text-sm text-muted-foreground">24h Change</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">$10M</div>
                  <div className="text-sm text-muted-foreground">Market Cap</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="px-3 py-1">
                Features
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why PlovCoin?</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                Powered by Solana, PlovCoin delivers fast, secure, and community-driven meme coin experience.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Solana Speed</h3>
                  <p className="text-muted-foreground">
                    Transactions in under 1 second with Solana’s high-throughput blockchain.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">Secure & Audited</h3>
                  <p className="text-muted-foreground">
                    Smart contracts audited by CertiK/Hacken for maximum security.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold">Low Fees</h3>
                  <p className="text-muted-foreground">
                    Near-zero transaction fees, perfect for airdrops and micro-transactions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold">#PlovChallenge</h3>
                  <p className="text-muted-foreground">
                    Join global meme challenges on X, TikTok, and Telegram to earn $PLOV.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">PlovDAO</h3>
                  <p className="text-muted-foreground">
                    Community governance via PlovDAO, launching in 2026.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold">PlovArmy</h3>
                  <p className="text-muted-foreground">
                    Join PlovFest and Kazan Genesis NFT holders for exclusive rewards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center text-white">
              <div className="space-y-2">
                <div className="text-3xl font-bold">100K+</div>
                <div className="text-blue-100">PlovArmy Members</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">10K</div>
                <div className="text-blue-100">Kazan Genesis NFTs</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">3</div>
                <div className="text-blue-100">Airdrop Waves</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-blue-100">PlovFest Events</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join the Plov Revolution!
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Be part of PlovCoin’s journey to Mars. Buy $PLOV, join PlovArmy, and participate in #PlovChallenge.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Join PlovArmy
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Download Wallet
                </Button>
              </div>

              <div className="text-sm text-muted-foreground">
                Available on Raydium & Jupiter • Audited by CertiK/Hacken
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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