import { useState } from 'react'
import Header from './components/Header'
import PromptForm from './components/PromptForm'
import CompanyList from './components/CompanyList'
import ResultsList from './components/ResultsList'
import { companiesData, type Company } from './data/companiesData'

type AppState = 'prompt' | 'loading' | 'companies' | 'contacts'

function App() {
  const [state, setState] = useState<AppState>('prompt')
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null)
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([])
  const [searchPrompt, setSearchPrompt] = useState('')

  // Fonction simulée pour matcher les entreprises selon le prompt
  const matchCompanies = (prompt: string): Company[] => {
    const lowerPrompt = prompt.toLowerCase()
    
    // Mots-clés pour chaque secteur/type d'entreprise
    const keywords: Record<string, string[]> = {
      'banque': ['banque', 'bancaire', 'finance', 'financier', 'bnp', 'société générale', 'jpmorgan', 'hsbc'],
      'assurance': ['assurance', 'assureur', 'sinistre', 'axa', 'allianz', 'zurich'],
      'luxe': ['luxe', 'luxury', 'lvmh', 'kering', 'hermès', 'fashion', 'mode', 'retail'],
      'cosmétique': ['cosmétique', 'beauté', 'l\'oréal', 'loreal', 'beauty'],
      'télécom': ['télécom', 'telecom', 'orange', 'telco', 'télécommunications'],
      'services': ['services', 'conseil', 'capgemini', 'accenture', 'atos', 'sopra'],
      'logiciel': ['logiciel', 'software', 'dassault', 'schneider', 'sap', 'oracle'],
      'aéronautique': ['aéronautique', 'aeronautique', 'safran', 'airbus', 'thales', 'défense'],
      'distribution': ['distribution', 'retail', 'carrefour', 'e-commerce', 'ecommerce'],
      'agroalimentaire': ['agroalimentaire', 'alimentaire', 'danone', 'food'],
      'marketplace': ['marketplace', 'plateforme', 'airbnb', 'booking', 'uber'],
      'cloud': ['cloud', 'microsoft', 'google', 'amazon', 'azure', 'aws'],
      'crm': ['crm', 'salesforce', 'servicenow', 'customer'],
    }

    // Calculer un score pour chaque entreprise
    const scoredCompanies = companiesData.map(company => {
      let score = 0
      const companyLower = company.name.toLowerCase()
      const sectorLower = company.sector.toLowerCase()
      
      // Vérifier les mots-clés
      Object.entries(keywords).forEach(([key, words]) => {
        words.forEach(word => {
          if (lowerPrompt.includes(word)) {
            if (companyLower.includes(word) || sectorLower.includes(key)) {
              score += 10
            } else if (sectorLower.includes(key)) {
              score += 5
            }
          }
        })
      })
      
      // Bonus si le nom de l'entreprise est mentionné
      if (lowerPrompt.includes(companyLower)) {
        score += 20
      }
      
      // Bonus si le secteur correspond
      if (lowerPrompt.includes(sectorLower)) {
        score += 8
      }
      
      return { company, score }
    })
    
    // Trier par score et prendre les meilleures
    const sorted = scoredCompanies
      .sort((a, b) => b.score - a.score)
      .map(item => item.company)
    
    // Si des correspondances avec score > 0, les retourner
    const matched = sorted.filter((_, index) => {
      const item = scoredCompanies.find(sc => sc.company.id === sorted[index].id)
      return item && item.score > 0
    })
    
    // Si aucune correspondance précise, retourner les 8-12 premières entreprises (simulation)
    // pour donner l'impression d'une recherche intelligente
    if (matched.length === 0) {
      // Mélanger légèrement pour varier les résultats
      const shuffled = [...companiesData].sort(() => Math.random() - 0.5)
      return shuffled.slice(0, Math.floor(Math.random() * 5) + 8)
    }
    
    // Retourner les meilleures correspondances (max 15)
    return matched.slice(0, 15)
  }

  const handlePromptSubmit = async (prompt: string) => {
    setSearchPrompt(prompt)
    setState('loading')
    
    // Simulation d'un délai de recherche
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const matched = matchCompanies(prompt)
    setFilteredCompanies(matched)
    setState('companies')
  }

  const handleSelectCompany = (company: Company) => {
    setSelectedCompany(company)
    setState('contacts')
  }

  const handleBackToCompanies = () => {
    setSelectedCompany(null)
    setState('companies')
  }

  const handleBackToPrompt = () => {
    setSelectedCompany(null)
    setFilteredCompanies([])
    setSearchPrompt('')
    setState('prompt')
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16 max-w-6xl">
        {state === 'prompt' && (
          <PromptForm 
            onSubmit={handlePromptSubmit}
            state={state}
          />
        )}

        {state === 'loading' && (
          <PromptForm 
            onSubmit={handlePromptSubmit}
            state={state}
            initialPrompt={searchPrompt}
          />
        )}

        {state === 'companies' && (
          <>
            <div className="mb-6 md:mb-8">
              <button
                onClick={handleBackToPrompt}
                aria-label="Retour à la recherche"
                className="text-sm text-gray-600 hover:text-gray-900 hover:text-accent tracking-wide mb-6 flex items-center gap-2 transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2 focus:ring-offset-white rounded-lg px-2 py-1 -ml-2"
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="transform group-hover:-translate-x-1 transition-transform duration-300"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Nouvelle recherche
              </button>
              <div className="text-center py-6 md:py-8 mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl text-gray-900 tracking-normal font-bold mb-3">
                  Entreprises correspondantes
                </h2>
                {searchPrompt && (
                  <p className="text-sm md:text-base text-gray-600 tracking-wide mb-2 max-w-2xl mx-auto px-4">
                    Résultats pour : <span className="text-accent font-medium">"{searchPrompt}"</span>
                  </p>
                )}
              </div>
            </div>
            <CompanyList 
              companies={filteredCompanies} 
              onSelectCompany={handleSelectCompany}
            />
          </>
        )}

        {state === 'contacts' && selectedCompany && (
          <>
            <div className="mb-6 md:mb-8">
              <button
                onClick={handleBackToCompanies}
                aria-label="Retour à la liste des entreprises"
                className="text-sm text-gray-600 hover:text-gray-900 hover:text-accent tracking-wide mb-6 flex items-center gap-2 transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2 focus:ring-offset-white rounded-lg px-2 py-1 -ml-2"
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="transform group-hover:-translate-x-1 transition-transform duration-300"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Retour à la liste des entreprises
              </button>
              <div className="mb-6">
                <h1 className="text-2xl md:text-3xl text-gray-900 font-bold tracking-tight mb-3">
                  {selectedCompany.name}
                </h1>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm text-gray-700 tracking-wide px-3 py-1.5 border border-accent/30 rounded-lg bg-accent/10">
                    {selectedCompany.sector}
                  </span>
                  <span className="text-sm text-gray-600 tracking-wide flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60">
                      <circle cx="12" cy="10" r="3"></circle>
                      <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"></path>
                    </svg>
                    {selectedCompany.country}
                  </span>
                </div>
              </div>
            </div>
            <ResultsList 
              contactsByProduct={selectedCompany.contacts}
            />
          </>
        )}
      </main>
      
      {/* Constellation de points en arrière-plan adaptée au thème clair */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-1 h-1 bg-accent opacity-20 rounded-full animate-dot-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent opacity-20 rounded-full animate-dot-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-accent opacity-20 rounded-full animate-dot-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent opacity-20 rounded-full animate-dot-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-accent opacity-20 rounded-full animate-dot-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-accent opacity-25 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-0.5 h-0.5 bg-gray-400 opacity-30 rounded-full animate-dot-pulse" style={{ animationDelay: '0.8s' }}></div>
      </div>
    </div>
  )
}

export default App
