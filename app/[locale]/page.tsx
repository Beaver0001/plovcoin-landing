'use client';
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default async function PlovcoinLanding({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = useTranslations('Home');

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
          <Link href="/whitepaper" className="text-sm font-medium hover:text-blue-600 transition-colors">
            {t('nav.whitepaper')}
          </Link>
          <Link href="#tokenomics" className="text-sm font-medium hover:text-blue-600 transition-colors">
            {t('nav.tokenomics')}
          </Link>
          <Link href="#airdrop" className="text-sm font-medium hover:text-blue-600 transition-colors">
            {t('nav.airdrop')}
          </Link>
          <Link href="#community" className="text-sm font-medium hover:text-blue-600 transition-colors">
            {t('nav.community')}
          </Link>
          <Link href="#roadmap" className="text-sm font-medium hover:text-blue-600 transition-colors">
            {t('nav.roadmap')}
          </Link>
          <LanguageSwitcher />
        </nav>
        <div className="ml-6 flex gap-2 items-center">
          <Button asChild variant="outline" size="sm">
            <Link href="/plovcoin-whitepaper.pdf" target="_blank" rel="noopener noreferrer">
              {t('download_pdf')}
            </Link>
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            {t('join_plovarmy')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              {t('title')}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              {t('description')}
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Link href="/whitepaper">{t('read_whitepaper')}</Link>
            </Button>
          </motion.div>

          {/* Features */}
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Card className="card">
              <CardContent className="p-6 space-y-4">
                <Zap className="w-12 h-12 text-blue-600" />
                <h3 className="text-xl font-bold">{t('features.solana.title')}</h3>
                <p className="text-muted-foreground">{t('features.solana.description')}</p>
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent className="p-6 space-y-4">
                <Shield className="w-12 h-12 text-green-600" />
                <h3 className="text-xl font-bold">{t('features.decentralized.title')}</h3>
                <p className="text-muted-foreground">{t('features.decentralized.description')}</p>
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent className="p-6 space-y-4">
                <Users className="w-12 h-12 text-cyan-600" />
                <h3 className="text-xl font-bold">{t('features.community.title')}</h3>
                <p className="text-muted-foreground">{t('features.community.description')}</p>
              </CardContent>
            </Card>
          </div>
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
                {t('footer.whitepaper')}
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                {t('footer.terms')}
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                {t('footer.support')}
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                {t('footer.contact')}
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">© 2025 PlovCoin. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}