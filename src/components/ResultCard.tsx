import type { Contact } from '@/data/companiesData'

interface ResultCardProps {
  contact: Contact
  delay?: number
}

function ResultCard({ contact, delay = 0 }: ResultCardProps) {
  const confidenceLevel = contact.confidence >= 85 
    ? 'high' 
    : contact.confidence >= 75
    ? 'medium'
    : 'low'

  const getConfidenceColor = () => {
    if (confidenceLevel === 'high') return 'text-accent border-accent/50'
    if (confidenceLevel === 'medium') return 'text-gray-800 border-gray-400'
    return 'text-gray-600 border-gray-300'
  }

  return (
    <article 
      className={`
        group border border-gray-200 rounded-xl p-5 md:p-6 
        bg-white shadow-card
        hover:border-accent/60 hover:shadow-glow-amber-subtle hover:scale-[1.01]
        transition-all duration-300 animate-fade-in-up
        ${contact.confidence >= 85 ? 'border-accent/30 bg-accent/[0.02]' : ''}
      `}
      style={{ 
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl text-gray-900 font-semibold tracking-normal mb-2 group-hover:text-accent transition-colors duration-300">
            {contact.name}
          </h3>
          <p className="text-sm md:text-base text-gray-700 tracking-wide mb-2 font-normal">
            {contact.jobTitle}
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <span className="text-xs text-gray-700 tracking-wide px-2.5 py-1 border border-gray-200 rounded-lg bg-gray-50">
              {contact.department}
            </span>
            <span className="text-xs text-gray-700 tracking-wide px-2.5 py-1 border border-gray-200 rounded-lg bg-gray-50">
              {contact.seniority}
            </span>
          </div>
        </div>

        {/* Badge de confiance amélioré */}
        <div className="flex-shrink-0 md:ml-4">
          <div className="flex md:flex-col items-center md:items-end gap-3">
            <div className="text-right">
              <span className={`text-sm md:text-base tracking-wide font-medium ${getConfidenceColor()}`}>
                {contact.confidence}%
              </span>
              <p className="text-xs text-gray-500 tracking-wide mt-0.5">
                correspondance
              </p>
            </div>
            <div className="w-20 md:w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-700 ease-out ${
                  confidenceLevel === 'high' ? 'bg-accent' : 
                  confidenceLevel === 'medium' ? 'bg-accent/80' : 
                  'bg-gray-400'
                }`}
                style={{ width: `${contact.confidence}%` }}
                role="progressbar"
                aria-valuenow={contact.confidence}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${contact.confidence}% de correspondance`}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Explication améliorée */}
      <div className="mt-5 pt-5 border-t border-gray-100">
        <p className="text-xs text-gray-500 tracking-wide mb-3 font-medium uppercase">
          Pourquoi ce contact ?
        </p>
        <p className="text-sm md:text-base text-gray-700 tracking-wide leading-relaxed font-light">
          {contact.explanation}
        </p>
      </div>

      {/* Bouton View Profile amélioré */}
      <div className="mt-6 flex justify-end">
        <button
          aria-label={`Voir le profil de ${contact.name}`}
          className="
            px-5 py-2.5 border border-gray-200 rounded-lg
            text-xs md:text-sm text-gray-700 tracking-wide font-medium
            hover:border-accent hover:text-accent hover:bg-accent/5 
            hover:shadow-glow-amber-subtle active:scale-[0.98]
            transition-all duration-300
            flex items-center gap-2
            focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2 
            focus:ring-offset-white
          "
        >
          <svg 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="opacity-70"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          Voir le profil
        </button>
      </div>
    </article>
  )
}

export default ResultCard
