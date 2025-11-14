import { brandConfig } from '@/config/brandConfig'
import Logo from './Logo'

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/[0.08] py-4 md:py-5 px-4 md:px-8 animate-fade-in backdrop-blur-xl bg-white/75 shadow-glass">
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo à gauche */}
        <div className="flex items-center">
          <a href="/" aria-label="Hook - Accueil" className="focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2 focus:ring-offset-white rounded-lg">
            <Logo />
          </a>
        </div>

        {/* Tagline à droite */}
        <div className="flex flex-col md:flex-row items-end md:items-center gap-2 md:gap-6 lg:gap-8">
          <p className="text-xs md:text-sm text-gray-700 tracking-wide font-light text-right md:text-left">
            {brandConfig.brandTagline}
          </p>
          <span className="text-xs text-gray-500 tracking-wider font-light hidden sm:inline">
            Built for H Hackathon
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
