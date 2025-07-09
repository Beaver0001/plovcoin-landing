{/* Tokenomics */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.8 }}
  className="mt-12 whitepaper-section"
  id="tokenomics"
>
  <h2 className="text-3xl font-bold text-center">Токеномика</h2>
  <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
    Токеномика PlovCoin — это рецепт космического плова: 13,013,003,000 $PLOV, сбалансированный для хайпа и устойчивости.
  </p>
  <div className="mt-8 flex justify-center">
    <Card className="max-w-md">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-center">Распределение токенов</h3>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li>38% - Community & Airdrop (4.94B $PLOV)</li>
          <li>22% - Liquidity (2.86B $PLOV)</li>
          <li>10% - NFT & DAO Access (1.3B $PLOV)</li>
          <li>13% - Marketing (1.69B $PLOV)</li>
          <li>10% - Team (1.3B $PLOV, locked)</li>
          <li>7% - Reserve & PlovBurn (910M $PLOV)</li>
        </ul>
        <Button asChild className="mt-4 w-full">
          <Link href="/plovcoin-whitepaper.pdf" target="_blank" rel="noopener noreferrer">
            Download Full Tokenomics
          </Link>
        </Button>
      </CardContent>
    </Card>
  </div>
</motion.div>