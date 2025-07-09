'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Zap, Users, TrendingUp, Lock, Globe, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Doughnut = dynamic(() => import('react-chartjs-2').then((mod) => mod.Doughnut), {
  ssr: false,
});

const TokenomicsChart = () => {
  const data = {
    labels: ['Community & Airdrop', 'Liquidity', 'NFT & DAO', 'Marketing', 'Team', 'Reserve & PlovBurn'],
    datasets: [
      {
        data: [38, 22, 10, 13, 10, 7],
        backgroundColor: ['#2563eb', '#7c3aed', '#22d3ee', '#facc15', '#4ade80', '#f87171'],
        borderColor: ['#ffffff'],
        borderWidth: 2,
        hoverOffset: 20,
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] mx-auto mb-8"
    >
      <div className="relative" style={{ paddingTop: '100%' }}>
        <div className="absolute inset-0">
          <Doughnut
            data={data}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'bottom',
                  labels: {
                    color: '#4b5563',
                    font: { size: 14, weight: '500' },
                    padding: 20,
                    boxWidth: 20,
                    usePointStyle: true,
                  },
                },
                tooltip: {
                  backgroundColor: '#1e3a8a',
                  titleFont: { size: 16 },
                  bodyFont: { size: 14 },
                  padding: 10,
                },
              },
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function Whitepaper() {
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
            PlovCoin
          </span>
        </Link>
        <nav className="ml-auto flex gap-6 items-center">
          <Link href="#introduction" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Introduction
          </Link>
          <Link href="#tokenomics" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Tokenomics
          </Link>
          <Link href="#airdrop" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Airdrop
          </Link>
          <Link href="#community" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Community
          </Link>
          <Link href="#roadmap" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Roadmap
          </Link>
        </nav>
        <div className="ml-6 flex gap-2 items-center">
          <Button asChild variant="outline" size="sm">
            <Link href="/plovcoin-whitepaper.pdf" target="_blank" rel="noopener noreferrer">
              Download PDF
            </Link>
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Join PlovArmy
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Whitepaper Content */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              🚀 Now Live on Mainnet
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              PlovCoin: The Taste of Hype on Blockchain
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              PlovCoin ($PLOV) — a next-gen meme coin that will explode on the blockchain like zira spices up plov!
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 whitepaper-section"
            id="introduction"
          >
            <h2 className="text-3xl font-bold text-center">Introduction</h2>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              PlovCoin ($PLOV) is a next-gen meme coin that will explode on the blockchain like zira spices up plov! Plov isn’t just food—it’s a symbol of friendship, uniting billions from Earth to Mars. $PLOV is the coin cooking Web3 in an intergalactic kazan, where every rice grain is a token of hype! Forget boring tokens. $DOGE? $SHIB? That’s yesterday’s plov. PlovCoin is a fresh taste set to conquer X, Instagram, TikTok, and Binance! We don’t promise a “DeFi revolution” but serve vibes: a warm kazan, the aroma of FOMO, and memes spiced with cosmic energy. Like Elon Musk sent a Tesla to space, we’re launching plov to the Moon! <strong>No rug pull — only $PLOV pull.</strong> We don’t dump tokens; we spread hype with decentralization. Grab your spoon, join PlovArmy, prepare your wallet, and become part of the tastiest meme coin in the galaxy! PlovCoin isn’t an investment—it’s a ticket to a cosmic plov-fest. #PLOVToTheMoon 🚀🍚
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 whitepaper-section"
            id="mission"
          >
            <h2 className="text-3xl font-bold text-center">Mission</h2>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              While other tokens are like overcooked rice, PlovCoin cooks perfect plov with soul. Plov is a gastronomic bridge uniting billions—from street cafes on Earth to Martian space stations. Our goal is to ignite meme culture, cryptocurrency, and the taste of freedom in an interstellar kazan. Like Elon Musk dreams of Mars, we dream of plov on every planet. We’re not just cooking a token but a ticket to PlovVerse, where memes, NFTs, and PlovFest rule Web3. PlovCoin isn’t just a token—it’s a gastronomic revolution, with every token a rice grain of hype, spiced with cosmic zira. #PLOVToTheMoon 🚀🍚
            </p>
          </motion.div>

          {/* What is PlovCoin */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 whitepaper-section"
            id="what-is-plovcoin"
          >
            <h2 className="text-3xl font-bold text-center">What is PlovCoin?</h2>
            <div className="grid gap-6 lg:grid-cols-3 mt-8">
              <Card className="card">
                <CardContent className="p-6 space-y-4">
                  <Zap className="w-12 h-12 text-blue-600" />
                  <h3 className="text-xl font-bold">Solana-Powered</h3>
                  <p className="text-muted-foreground">
                    Built on Solana’s SPL standard (mint:{' '}
                    <Link
                      href="https://solscan.io/token/B4LhtMwbKh8D1nfj7dE6FefKpg7U2qkbYC371DBcJq9x"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline break-all"
                    >
                      {`${'B4LhtMwbKh8D1nfj7dE6FefKpg7U2qkbYC371DBcJq9x'.slice(0, 4)}...${'B4LhtMwbKh8D1nfj7dE6FefKpg7U2qkbYC371DBcJq9x'.slice(-4)}`}
                    </Link>
                    ) with plans for multichain (2027).
                  </p>
                </CardContent>
              </Card>
              <Card className="card">
                <CardContent className="p-6 space-y-4">
                  <Shield className="w-12 h-12 text-green-600" />
                  <h3 className="text-xl font-bold">Decentralized</h3>
                  <p className="text-muted-foreground">
                    Mint Authority disabled, Update Authority managed by PlovDAO (2026).
                  </p>
                </CardContent>
              </Card>
              <Card className="card">
                <CardContent className="p-6 space-y-4">
                  <Users className="w-12 h-12 text-cyan-600" />
                  <h3 className="text-xl font-bold">PlovArmy</h3>
                  <p className="text-muted-foreground">
                    Join via Phantom/Solflare, swap on Jupiter, and become part of the galactic PlovArmy.
                  </p>
                </CardContent>
              </Card>
            </div>
            <p className="mt-6 text-muted-foreground max-w-3xl mx-auto">
              PlovCoin is not just a token but a cosmic serving of plov set to explode on Solana and conquer the galaxy! It’s a coin for the whole planet and Martian bases, where every token is a spoonful of hype cooked for Web3. Mint Authority is disabled—the kazan is sealed, and no new $PLOV will be created. Update Authority is temporarily retained for technical tasks and will be transferred to PlovDAO in 2026.
            </p>
          </motion.div>

          {/* Tokenomics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 whitepaper-section"
            id="tokenomics"
          >
            <h2 className="text-3xl font-bold text-center">Tokenomics</h2>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              PlovCoin’s tokenomics is a recipe for cosmic plov, where every percentage is an ingredient of hype! Total supply: 13,013,003,000 $PLOV (not a token more), a whole galaxy of tokens for PlovArmy across Web3!
            </p>
            <div className="mt-8 flex justify-center">
              <Card className="max-w-md w-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-center">Token Distribution</h3>
                  <TokenomicsChart />
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li>38% - Community & Airdrop (4.94B $PLOV) - 4 waves of drops, challenges, and memes</li>
                    <li>22% - Liquidity (2.86B $PLOV) - Pools on Raydium/Jupiter (Q3–Q4 2025)</li>
                    <li>10% - NFT & DAO Access (1.3B $PLOV) - Kazan Genesis, PlovX, DAO privileges</li>
                    <li>13% - Marketing (1.69B $PLOV) - Memes, influencers, promotion</li>
                    <li>10% - Team (1.3B $PLOV, locked) - Unlock in Q4 2026 and Q4 2027</li>
                    <li>7% - Reserve & PlovBurn (910M $PLOV) - Burns, surprises, DAO programs</li>
                  </ul>
                  <Button asChild className="mt-4 w-full">
                    <Link href="/plovcoin-whitepaper.pdf" target="_blank" rel="noopener noreferrer">
                      Download Full Tokenomics
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            <p className="mt-6 text-muted-foreground max-w-3xl mx-auto">
              All tokens are distributed per the total supply of 13,013,003,000 $PLOV. A remaining 3,000 tokens are included in the "Reserve & PlovBurn" category for future DAO initiatives. PlovBurn: up to 100M $PLOV monthly during hype, announced on X/Telegram.
            </p>
          </motion.div>

          {/* Airdrop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="mt-12 whitepaper-section"
            id="airdrop"
          >
            <h2 className="text-3xl font-bold text-center">PlovCoin Airdrop</h2>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              PlovCoin Airdrop (PlovDrop) isn’t just a giveaway—it’s a cosmic feast where PlovArmy gets servings of plov like a meteor shower of tokens! Volume: 4.94B $PLOV (38% of supply) in 4 waves (August 2025 – February 2026). 50% instant, 50% after 14 days to prevent dumps.
            </p>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <Card className="card">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Airdrop Waves</h3>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li>Wave 1 (Aug 2025): #PlovChallenge memes on TikTok/X</li>
                    <li>Wave 2 (Sep–Oct 2025): Whitelist Spice Drop for early participants</li>
                    <li>Wave 3 (Nov–Dec 2025): NFT & Telegram Feast for holders</li>
                    <li>Wave 4 (Jan–Feb 2026): DAO PlovParty with voting</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="card">
                <CardContent className="p-6 space-y-4">
                  <Shield className="w-12 h-12 text-green-600" />
                  <h3 className="text-xl font-bold">Security</h3>
                  <p className="text-muted-foreground">
                    Snapshots, grok-bots, and Squads multisig ensure fair distribution and Sybil protection. All transactions are transparent on Solscan.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Anti-Dump Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-12 whitepaper-section"
            id="anti-dump"
          >
            <h2 className="text-3xl font-bold text-center">Anti-Dump Policy</h2>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              PlovCoin is protected from dumps like a kazan from burning. Airdrop: 50% instant, 50% after 14 days. Team: 1.3B $PLOV locked in Squads with unlocks in Q4 2026 and Q4 2027. PlovBurn: up to 100M $PLOV monthly during hype, announced on X/Telegram.
            </p>
          </motion.div>

          {/* Risks and Limitations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="mt-12 whitepaper-section"
            id="risks"
          >
            <h2 className="text-3xl font-bold text-center">Risks and Limitations</h2>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              $PLOV is a meme coin with high volatility, regulatory risks, and dependence on PlovArmy activity. Smart contracts will be audited (CertiK, Q4 2025), but bugs are possible. PlovVerse (Q4 2027) may face delays. Participate mindfully—this is not an investment.
            </p>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <Card className="card">
                <CardContent className="p-6 space-y-4">
                  <TrendingUp className="w-12 h-12 text-red-600" />
                  <h3 className="text-xl font-bold">Volatility</h3>
                  <p className="text-muted-foreground">The price of $PLOV can swing like rice in a boiling kazan.</p>
                </CardContent>
              </Card>
              <Card className="card">
                <CardContent className="p-6 space-y-4">
                  <Lock className="w-12 h-12 text-yellow-600" />
                  <h3 className="text-xl font-bold">Regulations</h3>
                  <p className="text-muted-foreground">New laws may impact the project.</p>
                </CardContent>
              </Card>
              <Card className="card">
                <CardContent className="p-6 space-y-4">
                  <Users className="w-12 h-12 text-purple-600" />
                  <h3 className="text-xl font-bold">Community</h3>
                  <p className="text-muted-foreground">Success depends on PlovArmy activity.</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Marketing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="mt-12 whitepaper-section"
            id="marketing"
          >
            <h2 className="text-3xl font-bold text-center">Marketing</h2>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              PlovCoin’s marketing is all about hype, memes, and spices: #PlovChallenge on TikTok/X, influencers, PlovFest, collabs with $DOGE/$SHIB, merch, and 1.69B $PLOV for promotion. Reports published monthly on X and Telegram.
            </p>
          </motion.div>

          {/* Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="mt-12 whitepaper-section"
            id="community"
          >
            <h2 className="text-3xl font-bold text-center">Community</h2>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              PlovArmy is the heart of PlovCoin. Join #PlovChallenge, grab NFTs, vote in PlovDAO (2026). 4.94B $PLOV for memers and activists! PlovFest and challenges on TikTok, X, Telegram await you.
            </p>
          </motion.div>

          {/* Partnerships */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.0 }}
            className="mt-12 whitepaper-section"
            id="partnerships"
          >
            <h2 className="text-3xl font-bold text-center">Partnerships</h2>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              Listings on Raydium/Jupiter (Q3–Q4 2025), Kazan Genesis NFTs on Magic Eden/Tensor, talks with Binance/Bybit, collabs with $DOGE/$SHIB, PlovCharity with NGOs. All partnerships approved by PlovDAO (2026).
            </p>
          </motion.div>

          {/* NFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.2 }}
            className="mt-12 whitepaper-section"
            id="nft"
          >
            <h2 className="text-3xl font-bold text-center">NFT</h2>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              Kazan Genesis (10,000 NFTs) — key to PlovVerse and PlovDAO. Hosted on IPFS via Pinata/NFT.Storage, compatible with Magic Eden/Tensor. PlovX — a side collection with Martian vibes.
            </p>
          </motion.div>

          {/* PlovVerse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.4 }}
            className="mt-12 whitepaper-section"
            id="plovverse"
          >
            <h2 className="text-3xl font-bold text-center">PlovVerse</h2>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              PlovVerse — a metaverse (Q4 2027) with $PLOV as currency, NFTs as passes, and PlovArmy as creators. Depends on DAO and community. Mini-games and PlovFest in a virtual world are possible.
            </p>
          </motion.div>

          {/* PlovCharity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.6 }}
            className="mt-12 whitepaper-section"
            id="charity"
          >
            <h2 className="text-3xl font-bold text-center">PlovCharity</h2>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              PlovCharity — the soul of $PLOV: 1% from Kazan Genesis NFT sales and 0.5% from staking (2026) go to charity. Partnerships with NGOs, transparency via Solscan.
            </p>
            <div className="mt-8 flex justify-center">
              <Card className="max-w-md">
                <CardContent className="p-6">
                  <Heart className="w-12 h-12 text-red-600" />
                  <h3 className="text-xl font-bold">Good on the Blockchain</h3>
                  <p className="text-muted-foreground">Every meme and $PLOV transaction is a step toward helping those in need.</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.8 }}
            className="mt-12 whitepaper-section"
            id="team"
          >
            <h2 className="text-3xl font-bold text-center">Team</h2>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              PlovTeam — Web3 masters and plov chefs: Chef Kazan, Rais-Barberry, Log, Rice Master, Miss Lillian, Madame Zira, Trader Plovassio. KYC by Q2 2026, tokens (1.3B $PLOV) locked in Squads.
            </p>
          </motion.div>

          {/* Roadmap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.0 }}
            className="mt-12 whitepaper-section"
            id="roadmap"
          >
            <h2 className="text-3xl font-bold text-center">Roadmap</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <Card className="card">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Q3–Q4 2025</h3>
                  <p className="text-muted-foreground">
                    Website launch, airdrop (3 waves), Kazan Genesis NFT, #PlovChallenge, listings on Raydium/Jupiter, CertiK audit.
                  </p>
                </CardContent>
              </Card>
              <Card className="card">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">2026</h3>
                  <p className="text-muted-foreground">
                    PlovDAO, 4th airdrop wave, listings on Binance/Bybit, PlovCharity, global challenges.
                  </p>
                </CardContent>
              </Card>
              <Card className="card">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">2027</h3>
                  <p className="text-muted-foreground">
                    PlovVerse, multichain (Ethereum, BSC), reserve burning, PlovFest.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.2 }}
            className="mt-12 whitepaper-section"
            id="conclusion"
          >
            <h2 className="text-3xl font-bold text-center">Conclusion</h2>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              $PLOV is Web3 plov uniting community, memes, and good. It’s not an investment but a ticket to PlovVerse. Cook memes, hold $PLOV, fly to the stars! #PLOVToTheMoon 🚀🍚
            </p>
          </motion.div>

          {/* Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.4 }}
            className="mt-12 whitepaper-section"
            id="contacts"
          >
            <h2 className="text-3xl font-bold text-center">Contacts</h2>
            <div className="mt-8 flex justify-center">
              <Card className="max-w-md">
                <CardContent className="p-6">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>🌐 Website: <Link href="https://plovcoin.com" className="text-blue-600 hover:underline">plovcoin.com</Link></li>
                    <li>📣 Telegram: <Link href="https://t.me/PlovCoin" className="text-blue-600 hover:underline">@PlovCoin</Link></li>
                    <li>✖️ X: <Link href="https://x.com/PlovTeam" className="text-blue-600 hover:underline">@PlovTeam</Link></li>
                    <li>🖼️ Instagram: <Link href="https://instagram.com/plovcoinofficial" className="text-blue-600 hover:underline">plovcoinofficial</Link></li>
                    <li>🎥 TikTok: <Link href="https://tiktok.com/@PlovCoin" className="text-blue-600 hover:underline">@PlovCoin</Link></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

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
              <span className="font-semibold">PlovCoin</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/whitepaper" className="hover:text-blue-600 transition-colors">
                Whitepaper
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                Terms of Use
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                Support
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                Contact Us
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">© 2025 PlovCoin. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}