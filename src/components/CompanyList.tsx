import type { Company } from '@/data/companiesData'

interface CompanyListProps {
  companies: Company[]
  onSelectCompany: (company: Company) => void
}

function CompanyList({ companies, onSelectCompany }: CompanyListProps) {
  if (companies.length === 0) {
    return (
      <div className="mt-12 text-center py-12">
        <p className="text-sm text-gray-500 tracking-wide">
          Aucune entreprise trouvée.
        </p>
      </div>
    )
  }

  return (
    <div className="mt-8 md:mt-12 space-y-6 animate-fade-in-up">
      <div className="mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl text-gray-900 tracking-tight font-bold mb-2">
          Sélectionnez une entreprise
        </h2>
        <p className="text-sm text-gray-600 tracking-wide">
          {companies.length} entreprise{companies.length > 1 ? 's' : ''} disponible{companies.length > 1 ? 's' : ''}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {companies.map((company, index) => (
          <button
            key={company.id}
            onClick={() => onSelectCompany(company)}
            aria-label={`Sélectionner ${company.name}`}
            className="
              group border border-gray-200 rounded-xl p-5 md:p-6 
              bg-white shadow-card
              hover:border-accent/60 hover:shadow-glow-amber-subtle hover:scale-[1.02]
              active:scale-[0.98] transition-all duration-300
              text-left animate-fade-in-up
              focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2 
              focus:ring-offset-white
            "
            style={{ 
              animationDelay: `${index * 50}ms`,
            }}
          >
            <h3 className="text-base md:text-lg text-gray-900 font-semibold tracking-normal mb-3 group-hover:text-accent transition-colors duration-300">
              {company.name}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-xs text-gray-700 tracking-wide px-2.5 py-1 border border-accent/30 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                {company.sector}
              </span>
              <span className="text-xs text-gray-500 tracking-wide flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60">
                  <circle cx="12" cy="10" r="3"></circle>
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"></path>
                </svg>
                {company.country}
              </span>
            </div>
            <div className="mt-4 flex items-center text-xs text-gray-500 group-hover:text-accent transition-colors duration-300">
              <span>Voir les contacts</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default CompanyList
