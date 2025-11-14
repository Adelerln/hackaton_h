import { useState, useEffect, FormEvent, KeyboardEvent } from 'react'

interface PromptFormProps {
  onSubmit: (prompt: string) => void
  state: 'prompt' | 'loading' | 'companies' | 'contacts'
  initialPrompt?: string
}

function PromptForm({ onSubmit, state, initialPrompt = '' }: PromptFormProps) {
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (state === 'loading' || !prompt.trim()) return
    onSubmit(prompt)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // Permet de soumettre avec Cmd/Ctrl + Enter
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      handleSubmit(e as unknown as FormEvent<HTMLFormElement>)
    }
  }

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      {state === 'prompt' && (
        <div className="text-center py-8 md:py-16">
          <div className="mb-8 md:mb-12 flex justify-center">
            <div className="relative">
              {/* Illustration avec points et lueur adaptée au thème clair */}
              <div className="w-20 h-20 md:w-28 md:h-28 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-accent rounded-full shadow-glow-amber-subtle animate-pulse-slow"></div>
                <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 opacity-50 rounded-full animate-dot-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 opacity-50 rounded-full animate-dot-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 opacity-50 rounded-full animate-dot-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 opacity-50 rounded-full animate-dot-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>
          </div>
          <div className="space-y-3 mb-10 md:mb-14 max-w-3xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-bold tracking-tight leading-tight">
              Décrivez votre offre.
            </h1>
            <p className="text-base md:text-lg text-gray-600 tracking-normal leading-relaxed">
              Hook trouve les meilleures entreprises pour vous.
            </p>
          </div>
        </div>
      )}

      {/* Formulaire de recherche avec effet glass */}
      <div className={`${state === 'prompt' ? 'mt-4 md:mt-6' : ''} max-w-3xl mx-auto px-4`}>
        <div className="bg-white/80 backdrop-blur-xl border border-black/[0.08] rounded-2xl shadow-glass p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5" onKeyDown={handleKeyDown as any}>
            {/* Champ description */}
            <div className="space-y-3">
              <label 
                htmlFor="prompt" 
                className="block text-sm md:text-base text-gray-700 mb-2 tracking-normal font-semibold"
              >
                Que recherchez-vous ?
              </label>
              <div className="relative">
                {/* Icône loupe */}
                <div className="absolute left-4 top-4 text-gray-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                </div>
                <textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Ex: Je cherche des entreprises dans le secteur bancaire qui ont besoin d'automatisation..."
                  rows={5}
                  disabled={state === 'loading'}
                  aria-label="Description de votre recherche"
                  aria-describedby="prompt-help prompt-count"
                  className="w-full pl-12 pr-5 py-4 bg-white border border-gray-200 rounded-xl 
                           text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/40 
                           focus:border-accent focus:shadow-glow-amber-subtle transition-all duration-300 
                           resize-none disabled:opacity-50 disabled:cursor-not-allowed
                           tracking-wide font-light text-sm md:text-base leading-relaxed"
                  style={{ minHeight: '120px' }}
                />
                {/* Compteur de caractères */}
                {charCount > 0 && (
                  <div 
                    id="prompt-count"
                    className="absolute bottom-3 right-3 text-xs text-gray-400 tracking-wide"
                    aria-live="polite"
                  >
                    {charCount}
                  </div>
                )}
              </div>
              <p 
                id="prompt-help" 
                className="text-xs text-gray-500 tracking-wide leading-relaxed"
              >
                Astuce : Utilisez <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-xs">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-xs">Entrée</kbd> pour soumettre rapidement
              </p>
            </div>

            {/* Bouton de soumission */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={state === 'loading' || !prompt.trim()}
                aria-label={state === 'loading' ? 'Recherche en cours' : 'Lancer la recherche'}
                className="w-full py-4 px-6 bg-accent rounded-xl
                         text-gray-900 tracking-wide font-medium text-sm md:text-base
                         hover:bg-accent/90 hover:shadow-glow-amber-subtle 
                         active:scale-[0.98] transition-all duration-300
                         disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none
                         disabled:hover:bg-accent
                         focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2 
                         focus:ring-offset-white flex items-center justify-center gap-2"
              >
                {state === 'loading' ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Recherche en cours...
                  </>
                ) : (
                  <>
                    Trouver les entreprises
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </>
                )}
              </button>
              
              <p className="text-xs text-gray-500 mt-4 text-center tracking-wide leading-relaxed max-w-xl mx-auto">
                Nous analysons votre demande et identifions les entreprises les plus pertinentes pour votre offre.
              </p>
            </div>
          </form>
        </div>

        {/* État de chargement amélioré */}
        {state === 'loading' && (
          <div className="mt-12 md:mt-16 text-center animate-fade-in">
            <div className="flex justify-center items-center gap-3 mb-6">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-accent rounded-full animate-pulse-slow shadow-glow-amber-subtle"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-accent rounded-full animate-pulse-slow shadow-glow-amber-subtle" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-accent rounded-full animate-pulse-slow shadow-glow-amber-subtle" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <p className="text-sm md:text-base text-gray-700 tracking-wide font-light">
              Analyse de votre demande…
            </p>
            <p className="text-xs text-gray-500 tracking-wide mt-2 font-light">
              Cela peut prendre quelques secondes
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PromptForm
