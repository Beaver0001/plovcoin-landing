'use client';
import { useTranslations } from 'next-intl';
import { NextIntlClientProvider } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Zap, Users, TrendingUp, Lock, Globe, Coins } from "lucide-react";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function PlovcoinLanding({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();
  return (
    <NextIntlClientProvider locale={locale}>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <Link href={`/${locale}`} className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Coins className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('header.title')}
            </span>
          </Link>
          <nav className="ml-auto flex gap-6 items-center">
            <Link href={`/${locale}#features`} className="text-sm font-medium hover:text-blue-600 transition-colors">
              {t('header.nav.features')}
            </Link>
            <Link href={`/${locale}#about`} className="text-sm font-medium hover:text-blue-600 transition-colors">
              {t('header.nav.about')}
            </Link>
            <Link href={`/${locale}#roadmap`} className="text-sm font-medium hover:text-blue-600 transition-colors">
              {t('header.nav.roadmap')}
            </Link>
            <Link href={`/${locale}#community`} className="text-sm font-medium hover:text-blue-600 transition-colors">
              {t('header.nav.community')}
            </Link>
          </nav>
          <div className="ml-6 flex gap-2 items-center">
            <Button variant="outline" size="sm">
              {t('header.whitepaper')}
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {t('header.getStarted')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <LanguageSwitcher />
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="flex flex-col items-center space-y-8 text-center">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  {t('hero.badge')}
                </Badge>
                <div className="space-y-4 max-w-4xl">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    {t('hero.title')}
                  </h1>
                  <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
                    {t('hero.description')}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                  <Button
                    size="lg"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    {t('hero.buyButton')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    {t('hero.learnMore')}
                  </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 w-full max-w-2xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">$2.47</div>
                    <div className="text-sm text-muted-foreground">{t('hero.stats.price')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">+24.5%</div>
                    <div className="text-sm text-muted-foreground">{t('hero.stats.change')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">$847M</div>
                    <div className="text-sm text-muted-foreground">{t('hero.stats.marketCap')}</div>
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
                  {t('features.title')}
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t('features.title')}</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                  {t('features.description')}
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                {t.raw('features.items').map((item: { title: string; description: string }, index: number) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                        {index === 0 && <Zap className="w-6 h-6 text-blue-600" />}
                        {index === 1 && <Shield className="w-6 h-6 text-green-600" />}
                        {index === 2 && <TrendingUp className="w-6 h-6 text-purple-600" />}
                        {index === 3 && <Globe className="w-6 h-6 text-orange-600" />}
                        {index === 4 && <Lock className="w-6 h-6 text-red-600" />}
                        {index === 5 && <Users className="w-6 h-6 text-cyan-600" />}
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center text-white">
                <div className="space-y-2">
                  <div className="text-3xl font-bold">1M+</div>
                  <div className="text-blue-100">{t('stats.wallets')}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold">50M+</div>
                  <div className="text-blue-100">{t('stats.transactions')}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold">99.9%</div>
                  <div className="text-blue-100">{t('stats.uptime')}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-blue-100">{t('stats.countries')}</div>
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
                    {t('cta.title')}
                  </h2>
                  <p className="text-muted-foreground md:text-lg">
                    {t('cta.description')}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    {t('cta.getStarted')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    {t('cta.downloadWallet')}
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground">
                  {t('cta.note')}
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
                <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Coins className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold">{t('footer.title')}</span>
              </div>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <Link href="#" className="hover:text-blue-600 transition-colors">
                  {t('footer.links.privacy')}
                </Link>
                <Link href="#" className="hover:text-blue-600 transition-colors">
                  {t('footer.links.terms')}
                </Link>
                <Link href="#" className="hover:text-blue-600 transition-colors">
                  {t('footer.links.support')}
                </Link>
                <Link href="#" className="hover:text-blue-600 transition-colors">
                  {t('footer.links.contact')}
                </Link>
              </div>
              <div className="text-sm text-muted-foreground">{t('footer.copyright')}</div>
            </div>
          </div>
        </footer>
      </div>
    </NextIntlClientProvider>
  );
}