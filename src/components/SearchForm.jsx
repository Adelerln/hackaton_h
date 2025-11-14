import { useState } from 'react'

function SearchForm({ onSubmit, state, errorMessage, onReset }) {
  const [offerDescription, setOfferDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (state === 'loading') return
    onSubmit(offerDescription)
  }

  const handleReset = () => {
    setOfferDescription('')
    onReset()
  }

  return (
    <div className="animate-fade-in-up">
      {/* Empty State */}
      {state === 'empty' && (
        <div className="text-center py-20">
          <div className="mb-12 flex justify-center">
            <div className="relative">
              {/* Illustration avec points et lueur */}
              <div className="w-32 h-32 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full shadow-glow-amber-subtle animate-pulse-slow"></div>
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white opacity-70 rounded-full"></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white opacity-70 rounded-full"></div>
                <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white opacity-70 rounded-full"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white opacity-70 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="space-y-3 mb-16">
            <p className="text-lg text-white/80 tracking-wide">Describe your offer.</p>
            <p className="text-lg text-white/80 tracking-wide">Hook finds who you should talk to.</p>
          </div>
        </div>
      )}

      {/* Formulaire de recherche */}
      <div className={`${state === 'empty' ? 'mt-8' : ''} max-w-2xl mx-auto`}>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Champ description */}
          <div>
            <label htmlFor="offerDescription" className="block text-sm text-white/60 mb-2 tracking-wide">
              What do you want to sell?
            </label>
            <textarea
              id="offerDescription"
              value={offerDescription}
              onChange={(e) => setOfferDescription(e.target.value)}
              placeholder="Agent IA intelligent pour automatiser les processus métier, améliorer l'expérience client et optimiser les opérations..."
              rows={5}
              disabled={state === 'loading'}
              className="w-full px-4 py-3 bg-background border border-primary/50 rounded-sm 
                       text-white placeholder-white/30 focus:outline-none focus:border-accent/50 
                       focus:shadow-glow-amber-subtle transition-all duration-300 resize-none
                       disabled:opacity-50 disabled:cursor-not-allowed
                       tracking-wide font-light"
            />
          </div>

          {/* Bouton de soumission */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={state === 'loading'}
              className="w-full py-4 px-6 bg-primary border border-primary/50 rounded-sm
                       text-white tracking-wider font-light text-sm
                       hover:border-accent/50 hover:shadow-glow-amber transition-all duration-300
                       disabled:opacity-50 disabled:cursor-not-allowed
                       focus:outline-none focus:shadow-glow-amber-subtle"
            >
              {state === 'loading' ? 'Analyzing...' : 'Find the right contact'}
            </button>
            
            <p className="text-xs text-white/40 mt-3 text-center tracking-wide">
              We analyze your offer and identify the most relevant people to contact.
            </p>
          </div>
        </form>

        {/* État de chargement */}
        {state === 'loading' && (
          <div className="mt-12 text-center animate-fade-in">
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse-slow"></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse-slow" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse-slow" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <p className="text-sm text-white/60 tracking-wide">Analyzing this company…</p>
          </div>
        )}

        {/* État d'erreur */}
        {state === 'error' && (
          <div className="mt-8 text-center animate-fade-in">
            <p className="text-sm text-red-400/80 tracking-wide mb-4">{errorMessage}</p>
            <button
              onClick={handleReset}
              className="text-xs text-white/50 hover:text-white/70 tracking-wide underline transition-colors"
            >
              Try again
            </button>
          </div>
        )}

        {/* Bouton reset après résultats */}
        {state === 'results' && (
          <div className="mt-8 text-center">
            <button
              onClick={handleReset}
              className="text-xs text-white/50 hover:text-white/70 tracking-wide underline transition-colors"
            >
              New search
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchForm

