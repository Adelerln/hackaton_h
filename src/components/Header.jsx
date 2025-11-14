import { brandConfig } from '../config/brandConfig'
import Logo from './Logo'

function Header() {
  return (
    <header className="border-b border-primary/20 py-5 md:py-6 px-4 md:px-8 animate-fade-in backdrop-blur-sm bg-background/50">
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo à gauche */}
        <div className="flex items-center">
          <a href="/" aria-label="Hook - Accueil" className="focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-background rounded">
            <Logo />
          </a>
        </div>

        {/* Tagline à droite */}
        <div className="flex flex-col md:flex-row items-end md:items-center gap-2 md:gap-6 lg:gap-8">
          <p className="text-xs md:text-sm text-white/70 tracking-wide font-light text-right md:text-left">
            {brandConfig.brandTagline}
          </p>
          <span className="text-xs text-white/40 tracking-wider font-light hidden sm:inline">
            Built for H Hackathon
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header

