import ResultCard from './ResultCard'
import { products } from '../data/companiesData'

function ResultsList({ company, contactsByProduct }) {
  if (!contactsByProduct || Object.keys(contactsByProduct).length === 0) {
    return (
      <div className="mt-8 md:mt-12 text-center py-12">
        <div className="mb-4">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto text-white/40">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <p className="text-sm md:text-base text-white/60 tracking-wide font-light">
          Aucun contact disponible pour cette entreprise.
        </p>
      </div>
    )
  }

  const totalContacts = Object.values(contactsByProduct).reduce((sum, contacts) => sum + contacts.length, 0)

  return (
    <div className="space-y-10 md:space-y-12 animate-fade-in-up">
      {/* En-tête avec statistiques */}
      <div className="mb-6 pb-4 border-b border-primary/20">
        <p className="text-sm text-white/60 tracking-wide">
          {totalContacts} contact{totalContacts > 1 ? 's' : ''} trouvé{totalContacts > 1 ? 's' : ''} au total
        </p>
      </div>

      {products.map((product, productIndex) => {
        const contacts = contactsByProduct[product] || []
        if (contacts.length === 0) return null

        return (
          <section key={product} className="space-y-6">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <h2 className="text-xl md:text-2xl text-white/90 tracking-wide font-light">
                {product}
              </h2>
              <span className="text-xs md:text-sm text-white/50 tracking-wide px-3 py-1.5 border border-primary/40 rounded-lg bg-primary/20">
                {contacts.length} contact{contacts.length > 1 ? 's' : ''}
              </span>
            </div>
            <div className="space-y-4 md:space-y-5">
              {contacts.map((contact, index) => (
                <ResultCard 
                  key={contact.id} 
                  contact={contact}
                  product={product}
                  delay={(productIndex * 200) + (index * 100)}
                />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default ResultsList

