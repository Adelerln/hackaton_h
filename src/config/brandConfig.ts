// Configuration de la marque Hook
export interface BrandConfig {
  brandName: string
  brandTagline: string
  primaryColor: string
  secondaryColor: string
  accentColor: string
  backgroundColor: string
  logoUrl: string
}

// TODO: Remplacer logoUrl par l'URL finale du logo
export const brandConfig: BrandConfig = {
  brandName: 'Hook',
  brandTagline: 'Connect with the people who matter.',
  primaryColor: '#1E232F', // desaturated blue–grey
  secondaryColor: '#0A0A0C', // deep black
  accentColor: '#F5C15C', // warm amber glow
  backgroundColor: '#0A0A0C',
  logoUrl: 'https://via.placeholder.com/120x40/1E232F/F5C15C?text=HOOK', // Placeholder - à remplacer par l'URL finale
}
