/**
 * Semantic relationships between guides for intelligent internal linking.
 * Each guide maps to related guides in order of relevance.
 */
export const guideRelationships: Record<string, string[]> = {
  "new-financial-infrastructure": [
    "stablecoins", // mentions stablecoin bridge, GENIUS Act
    "crypto-compliance", // regulatory collision, SEC framework
    "institutional-crypto", // institutional adoption, ETFs
    "tokenization", // RWA discussion, BlackRock BUIDL
    "defi-explained", // DeFi infrastructure mention
  ],
  stablecoins: [
    "crypto-compliance", // GENIUS Act, NYDFS requirements
    "institutional-crypto", // institutional adoption, custody
    "new-financial-infrastructure", // broader context
    "defi-explained", // stablecoins in DeFi protocols
    "tokenization", // stablecoins as payment rails
  ],
  "defi-explained": [
    "crypto-compliance", // SEC/CFTC regulatory tension
    "stablecoins", // stablecoins in protocols
    "institutional-crypto", // institutional DeFi exploration
    "tokenization", // DeFi composability
    "new-financial-infrastructure", // context
  ],
  "crypto-compliance": [
    "stablecoins", // GENIUS Act details
    "defi-explained", // SEC vs DeFi
    "institutional-crypto", // compliance infrastructure
    "new-financial-infrastructure", // regulatory landscape
    "tokenization", // securities law for tokenization
  ],
  "institutional-crypto": [
    "stablecoins", // custody, reserves
    "crypto-compliance", // compliance framework
    "tokenization", // RWA adoption, BlackRock
    "defi-explained", // yield strategies
    "new-financial-infrastructure", // context
  ],
  tokenization: [
    "crypto-compliance", // securities law, Reg D
    "institutional-crypto", // institutional adoption
    "defi-explained", // DeFi composability
    "stablecoins", // payment rails, collateral
    "new-financial-infrastructure", // context
  ],
};

/**
 * Get related guides for a given guide slug.
 * Returns guide slugs in order of relevance.
 *
 * @param currentSlug - The slug of the current guide
 * @param count - Number of related guides to return (default: 2)
 * @returns Array of related guide slugs
 */
export function getRelatedGuides(
  currentSlug: string,
  count: number = 2
): string[] {
  return guideRelationships[currentSlug]?.slice(0, count) || [];
}
