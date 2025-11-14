import { useState, useEffect } from 'react'

function PromptForm({ onSubmit, state, initialPrompt = '' }) {
  const [prompt, setPrompt] = useState(initialPrompt)
  const [charCount, setCharCount] = useState(0)

  useEffect(() => {
    if (state === 'prompt' && !initialPrompt) {
      setPrompt('')
      setCharCount(0)
    }
  }, [state, initialPrompt])

  useEffect(() => {
    setCharCount(prompt.length)
  }, [prompt])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (state === 'loading' || !prompt.trim()) return
    onSubmit(prompt)
  }

  const handleKeyDown = (e) => {
    // Permet de soumettre avec Cmd/Ctrl + Enter
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <div className="animate-fade-in-up">
      {/* Empty State */}
      {state === 'prompt' && (
        <div className="text-center py-12 md:py-20">
          <div className="mb-10 md:mb-16 flex justify-center">
            <div className="relative">
              {/* Illustration avec points et lueur améliorée */}
              <div className="w-24 h-24 md:w-32 md:h-32 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-accent rounded-full shadow-glow-amber-subtle animate-pulse-slow"></div>
                <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 md:w-2 md:h-2 bg-white opacity-80 rounded-full animate-dot-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 md:w-2 md:h-2 bg-white opacity-80 rounded-full animate-dot-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 md:w-2 md:h-2 bg-white opacity-80 rounded-full animate-dot-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 md:w-2 md:h-2 bg-white opacity-80 rounded-full animate-dot-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>
          </div>
          <div className="space-y-4 mb-12 md:mb-16 max-w-2xl mx-auto px-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-light tracking-wide leading-tight">
              Décrivez votre offre.
            </h1>
            <p className="text-base md:text-lg text-white/70 tracking-wide leading-relaxed">
              Hook trouve les meilleures entreprises pour vous.
            </p>
          </div>
        </div>
      )}

      {/* Formulaire de recherche */}
      <div className={`${state === 'prompt' ? 'mt-4 md:mt-8' : ''} max-w-3xl mx-auto px-4`}>
        <form onSubmit={handleSubmit} className="space-y-6" onKeyDown={handleKeyDown}>
          {/* Champ description */}
          <div className="space-y-2">
            <label 
              htmlFor="prompt" 
              className="block text-sm md:text-base text-white/70 mb-3 tracking-wide font-light"
            >
              Que recherchez-vous ?
            </label>
            <div className="relative">
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ex: Je cherche des entreprises dans le secteur bancaire qui ont besoin d'automatisation, ou des groupes de luxe pour améliorer leur e-commerce..."
                rows={6}
                disabled={state === 'loading'}
                aria-label="Description de votre recherche"
                aria-describedby="prompt-help prompt-count"
                className="w-full px-5 py-4 bg-background/80 border border-primary/40 rounded-lg 
                         text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent/30 
                         focus:border-accent/60 focus:shadow-glow-amber-subtle transition-all duration-300 
                         resize-none disabled:opacity-50 disabled:cursor-not-allowed
                         tracking-wide font-light text-sm md:text-base leading-relaxed
                         backdrop-blur-sm"
                style={{ minHeight: '140px' }}
              />
              {/* Compteur de caractères */}
              {charCount > 0 && (
                <div 
                  id="prompt-count"
                  className="absolute bottom-3 right-3 text-xs text-white/40 tracking-wide"
                  aria-live="polite"
                >
                  {charCount}
                </div>
              )}
            </div>
            <p 
              id="prompt-help" 
              className="text-xs text-white/50 tracking-wide leading-relaxed"
            >
              Astuce : Utilisez <kbd className="px-1.5 py-0.5 bg-primary/50 border border-primary/30 rounded text-xs">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 bg-primary/50 border border-primary/30 rounded text-xs">Entrée</kbd> pour soumettre rapidement
            </p>
          </div>

          {/* Bouton de soumission */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={state === 'loading' || !prompt.trim()}
              aria-label={state === 'loading' ? 'Recherche en cours' : 'Lancer la recherche'}
              className="w-full py-4 px-6 bg-primary/80 border border-primary/50 rounded-lg
                       text-white tracking-wider font-light text-sm md:text-base
                       hover:border-accent/60 hover:bg-primary hover:shadow-glow-amber-subtle 
                       active:scale-[0.98] transition-all duration-300
                       disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-primary/50
                       disabled:hover:shadow-none disabled:hover:bg-primary/80
                       focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 
                       focus:ring-offset-background"
            >
              {state === 'loading' ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Recherche en cours...
                </span>
              ) : (
                'Trouver les entreprises'
              )}
            </button>
            
            <p className="text-xs text-white/50 mt-4 text-center tracking-wide leading-relaxed max-w-xl mx-auto">
              Nous analysons votre demande et identifions les entreprises les plus pertinentes pour votre offre.
            </p>
          </div>
        </form>

        {/* État de chargement amélioré */}
        {state === 'loading' && (
          <div className="mt-12 md:mt-16 text-center animate-fade-in">
            <div className="flex justify-center items-center gap-3 mb-6">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-accent rounded-full animate-pulse-slow shadow-glow-amber-subtle"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-accent rounded-full animate-pulse-slow shadow-glow-amber-subtle" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-accent rounded-full animate-pulse-slow shadow-glow-amber-subtle" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <p className="text-sm md:text-base text-white/70 tracking-wide font-light">
              Analyse de votre demande…
            </p>
            <p className="text-xs text-white/50 tracking-wide mt-2 font-light">
              Cela peut prendre quelques secondes
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PromptForm

