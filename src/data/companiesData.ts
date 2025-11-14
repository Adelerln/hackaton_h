// Types pour les contacts et entreprises

export type Product = 'Surfer H' | 'Agent Platform' | 'Holo 1.5'

export type Seniority = 'Executive' | 'Senior' | 'Mid-Level' | 'Junior'

export interface Contact {
  id: number
  name: string
  firstName: string
  lastName: string
  jobTitle: string
  department: string
  seniority: Seniority
  confidence: number
  explanation: string
  products: Product[]
}

export type ContactsByProduct = {
  [key in Product]?: Contact[]
}

export interface Company {
  id: number
  name: string
  sector: string
  country: string
  contacts: ContactsByProduct
}
// Données des entreprises et leurs contacts personnalisés par produit
export const companiesData: Company[] = [
  {
    id: 1,
    name: 'BNP Paribas',
    sector: 'Banque',
    country: 'France',
    contacts: {
      'Surfer H': [
        {
          id: 1,
          name: 'Jean-Michel Aulagnier',
          firstName: 'Jean-Michel',
          lastName: 'Aulagnier',
          jobTitle: 'Group Chief Digital and Data Officer',
          department: 'Digital & Data',
          seniority: 'Executive',
          confidence: 95,
          explanation: 'Pilote la stratégie digitale du groupe. Surfer H peut automatiser les parcours KYC et la navigation dans les outils internes, réduisant les coûts opérationnels de manière significative.',
          products: ['Surfer H']
        },
        {
          id: 2,
          name: 'Sophie Heller',
          firstName: 'Sophie',
          lastName: 'Heller',
          jobTitle: 'Group CIO',
          department: 'IT & Infrastructure',
          seniority: 'Executive',
          confidence: 92,
          explanation: 'Responsable de l\'infrastructure IT. Surfer H s\'intègre parfaitement dans sa vision d\'automatisation des processus bancaires complexes.',
          products: ['Surfer H']
        },
        {
          id: 3,
          name: 'Laurent David',
          firstName: 'Laurent',
          lastName: 'David',
          jobTitle: 'Responsable Digital Factory',
          department: 'Transformation Digitale',
          seniority: 'Senior',
          confidence: 90,
          explanation: 'En charge du programme Automation et IA. Surfer H répond directement aux besoins d\'automatisation des tâches digitales répétitives.',
          products: ['Surfer H']
        }
      ],
      'Agent Platform': [
        {
          id: 4,
          name: 'Jean-Michel Aulagnier',
          firstName: 'Jean-Michel',
          lastName: 'Aulagnier',
          jobTitle: 'Group Chief Digital and Data Officer',
          department: 'Digital & Data',
          seniority: 'Executive',
          confidence: 94,
          explanation: 'L\'Agent Platform permet d\'orchestrer plusieurs agents autonomes pour automatiser les parcours clients complexes et réduire la charge des chargés de clientèle.',
          products: ['Agent Platform']
        },
        {
          id: 5,
          name: 'Sophie Heller',
          firstName: 'Sophie',
          lastName: 'Heller',
          jobTitle: 'Group CIO',
          department: 'IT & Infrastructure',
          seniority: 'Executive',
          confidence: 91,
          explanation: 'L\'Agent Platform s\'intègre dans l\'architecture IT existante et permet de coordonner les agents entre plusieurs systèmes bancaires.',
          products: ['Agent Platform']
        },
        {
          id: 6,
          name: 'Laurent David',
          firstName: 'Laurent',
          lastName: 'David',
          jobTitle: 'Responsable Digital Factory',
          department: 'Transformation Digitale',
          seniority: 'Senior',
          confidence: 89,
          explanation: 'L\'orchestration d\'agents via Agent Platform répond aux besoins d\'industrialisation de l\'automatisation à grande échelle.',
          products: ['Agent Platform']
        }
      ],
      'Holo 1.5': [
        {
          id: 7,
          name: 'Sophie Heller',
          firstName: 'Sophie',
          lastName: 'Heller',
          jobTitle: 'Group CIO',
          department: 'IT & Infrastructure',
          seniority: 'Executive',
          confidence: 93,
          explanation: 'Holo 1.5 comme modèle fondation permet aux équipes IT internes de développer des agents capables d\'utiliser les interfaces complexes des systèmes bancaires.',
          products: ['Holo 1.5']
        },
        {
          id: 8,
          name: 'Marc Dupont',
          firstName: 'Marc',
          lastName: 'Dupont',
          jobTitle: 'Chief Data Officer',
          department: 'Data & Analytics',
          seniority: 'Executive',
          confidence: 88,
          explanation: 'Holo 1.5 s\'intègre dans la plateforme data pour créer des agents intelligents exploitant les données bancaires de manière sécurisée.',
          products: ['Holo 1.5']
        }
      ]
    }
  },
  {
    id: 2,
    name: 'Société Générale',
    sector: 'Banque',
    country: 'France',
    contacts: {
      'Surfer H': [
        {
          id: 9,
          name: 'Philippe Heim',
          firstName: 'Philippe',
          lastName: 'Heim',
          jobTitle: 'Group CIO',
          department: 'IT & Transformation',
          seniority: 'Executive',
          confidence: 94,
          explanation: 'Surfer H peut automatiser la navigation dans les multiples systèmes hérités de la banque, réduisant les coûts opérationnels.',
          products: ['Surfer H']
        },
        {
          id: 10,
          name: 'Isabelle Millat',
          firstName: 'Isabelle',
          lastName: 'Millat',
          jobTitle: 'Chief Digital Officer',
          department: 'Digital Transformation',
          seniority: 'Executive',
          confidence: 92,
          explanation: 'Pilote la transformation digitale. Surfer H s\'aligne avec les objectifs d\'efficacité opérationnelle et de réduction des coûts.',
          products: ['Surfer H']
        }
      ],
      'Agent Platform': [
        {
          id: 11,
          name: 'Philippe Heim',
          firstName: 'Philippe',
          lastName: 'Heim',
          jobTitle: 'Group CIO',
          department: 'IT & Transformation',
          seniority: 'Executive',
          confidence: 91,
          explanation: 'L\'Agent Platform permet d\'orchestrer des agents pour automatiser les processus répétitifs à grande échelle.',
          products: ['Agent Platform']
        },
        {
          id: 12,
          name: 'Isabelle Millat',
          firstName: 'Isabelle',
          lastName: 'Millat',
          jobTitle: 'Chief Digital Officer',
          department: 'Digital Transformation',
          seniority: 'Executive',
          confidence: 89,
          explanation: 'L\'orchestration d\'agents répond aux besoins du programme Efficiency Program de la banque.',
          products: ['Agent Platform']
        }
      ],
      'Holo 1.5': [
        {
          id: 13,
          name: 'Philippe Heim',
          firstName: 'Philippe',
          lastName: 'Heim',
          jobTitle: 'Group CIO',
          department: 'IT & Transformation',
          seniority: 'Executive',
          confidence: 90,
          explanation: 'Holo 1.5 comme modèle fondation pour les équipes IA internes développant des agents bancaires.',
          products: ['Holo 1.5']
        }
      ]
    }
  },
  {
    id: 3,
    name: 'AXA',
    sector: 'Assurance',
    country: 'France',
    contacts: {
      'Surfer H': [
        {
          id: 14,
          name: 'Claude Brunet',
          firstName: 'Claude',
          lastName: 'Brunet',
          jobTitle: 'Group CIO',
          department: 'IT & Digital',
          seniority: 'Executive',
          confidence: 93,
          explanation: 'Surfer H peut automatiser la navigation dans les outils de gestion des sinistres et de la relation client, réduisant les temps de traitement.',
          products: ['Surfer H']
        },
        {
          id: 15,
          name: 'Laurence Lascoux',
          firstName: 'Laurence',
          lastName: 'Lascoux',
          jobTitle: 'Chief Data Officer',
          department: 'Data & Analytics',
          seniority: 'Executive',
          confidence: 91,
          explanation: 'Surfer H permet d\'automatiser l\'extraction et le traitement de données depuis les multiples systèmes d\'assurance.',
          products: ['Surfer H']
        }
      ],
      'Agent Platform': [
        {
          id: 16,
          name: 'Claude Brunet',
          firstName: 'Claude',
          lastName: 'Brunet',
          jobTitle: 'Group CIO',
          department: 'IT & Digital',
          seniority: 'Executive',
          confidence: 92,
          explanation: 'L\'Agent Platform orchestre des agents au service des courtiers et des back offices pour améliorer l\'efficacité.',
          products: ['Agent Platform']
        },
        {
          id: 17,
          name: 'Thomas Buberl',
          firstName: 'Thomas',
          lastName: 'Buberl',
          jobTitle: 'Chief Transformation Officer',
          department: 'Transformation',
          seniority: 'Executive',
          confidence: 90,
          explanation: 'L\'orchestration d\'agents s\'intègre dans la stratégie de transformation digitale du groupe.',
          products: ['Agent Platform']
        }
      ],
      'Holo 1.5': [
        {
          id: 18,
          name: 'Claude Brunet',
          firstName: 'Claude',
          lastName: 'Brunet',
          jobTitle: 'Group CIO',
          department: 'IT & Digital',
          seniority: 'Executive',
          confidence: 89,
          explanation: 'Holo 1.5 permet aux équipes internes de développer des agents pilotant les applications de gestion complexes.',
          products: ['Holo 1.5']
        }
      ]
    }
  },
  {
    id: 4,
    name: 'LVMH',
    sector: 'Luxe',
    country: 'France',
    contacts: {
      'Surfer H': [
        {
          id: 19,
          name: 'Nathalie Balla',
          firstName: 'Nathalie',
          lastName: 'Balla',
          jobTitle: 'Chief Digital Officer',
          department: 'Digital & Innovation',
          seniority: 'Executive',
          confidence: 95,
          explanation: 'Surfer H peut automatiser les opérations e-commerce, le merchandising digital et le monitoring concurrentiel pour toutes les maisons du groupe.',
          products: ['Surfer H']
        },
        {
          id: 20,
          name: 'Franck Le Moal',
          firstName: 'Franck',
          lastName: 'Le Moal',
          jobTitle: 'Group CIO',
          department: 'IT & Digital',
          seniority: 'Executive',
          confidence: 93,
          explanation: 'Surfer H s\'intègre dans la stratégie digitale pour optimiser les opérations e-commerce et retail.',
          products: ['Surfer H']
        }
      ],
      'Agent Platform': [
        {
          id: 21,
          name: 'Nathalie Balla',
          firstName: 'Nathalie',
          lastName: 'Balla',
          jobTitle: 'Chief Digital Officer',
          department: 'Digital & Innovation',
          seniority: 'Executive',
          confidence: 94,
          explanation: 'L\'Agent Platform permet de créer des agents d\'aide à la vente connectés aux outils CRM et aux fiches produits.',
          products: ['Agent Platform']
        },
        {
          id: 22,
          name: 'Franck Le Moal',
          firstName: 'Franck',
          lastName: 'Le Moal',
          jobTitle: 'Group CIO',
          department: 'IT & Digital',
          seniority: 'Executive',
          confidence: 91,
          explanation: 'L\'orchestration d\'agents améliore l\'expérience client en connectant les outils internes de manière intelligente.',
          products: ['Agent Platform']
        }
      ],
      'Holo 1.5': [
        {
          id: 23,
          name: 'Franck Le Moal',
          firstName: 'Franck',
          lastName: 'Le Moal',
          jobTitle: 'Group CIO',
          department: 'IT & Digital',
          seniority: 'Executive',
          confidence: 90,
          explanation: 'Holo 1.5 permet aux équipes produits d\'embarquer des capacités d\'agent dans les logiciels internes de merchandising et supply.',
          products: ['Holo 1.5']
        }
      ]
    }
  },
  {
    id: 5,
    name: 'L\'Oréal',
    sector: 'Cosmétique',
    country: 'France',
    contacts: {
      'Surfer H': [
        {
          id: 24,
          name: 'Lubomira Rochet',
          firstName: 'Lubomira',
          lastName: 'Rochet',
          jobTitle: 'Chief Digital and Marketing Officer',
          department: 'Digital & Marketing',
          seniority: 'Executive',
          confidence: 94,
          explanation: 'Surfer H automatise la veille e-commerce, le suivi des prix et la collecte d\'avis clients sur toutes les plateformes.',
          products: ['Surfer H']
        },
        {
          id: 25,
          name: 'Christophe Babule',
          firstName: 'Christophe',
          lastName: 'Babule',
          jobTitle: 'Group CIO',
          department: 'IT & Digital',
          seniority: 'Executive',
          confidence: 92,
          explanation: 'Surfer H optimise les opérations marketing et trade marketing en automatisant la collecte de données concurrentielles.',
          products: ['Surfer H']
        }
      ],
      'Agent Platform': [
        {
          id: 26,
          name: 'Lubomira Rochet',
          firstName: 'Lubomira',
          lastName: 'Rochet',
          jobTitle: 'Chief Digital and Marketing Officer',
          department: 'Digital & Marketing',
          seniority: 'Executive',
          confidence: 93,
          explanation: 'L\'Agent Platform orchestre des agents pour automatiser les opérations marketing et la préparation de reportings.',
          products: ['Agent Platform']
        },
        {
          id: 27,
          name: 'Christophe Babule',
          firstName: 'Christophe',
          lastName: 'Babule',
          jobTitle: 'Group CIO',
          department: 'IT & Digital',
          seniority: 'Executive',
          confidence: 90,
          explanation: 'L\'orchestration d\'agents connecte les outils internes marketing, finance et supply chain.',
          products: ['Agent Platform']
        }
      ],
      'Holo 1.5': [
        {
          id: 28,
          name: 'Christophe Babule',
          firstName: 'Christophe',
          lastName: 'Babule',
          jobTitle: 'Group CIO',
          department: 'IT & Digital',
          seniority: 'Executive',
          confidence: 89,
          explanation: 'Holo 1.5 intègre des agents dans les outils internes marketing et supply chain pour améliorer l\'efficacité.',
          products: ['Holo 1.5']
        }
      ]
    }
  },
  {
    id: 6,
    name: 'Orange',
    sector: 'Télécommunications',
    country: 'France',
    contacts: {
      'Surfer H': [
        {
          id: 29,
          name: 'Mari-Noëlle Jégo-Laveissière',
          firstName: 'Mari-Noëlle',
          lastName: 'Jégo-Laveissière',
          jobTitle: 'Chief Digital Officer',
          department: 'Digital & Innovation',
          seniority: 'Executive',
          confidence: 94,
          explanation: 'Surfer H automatise la navigation dans les applications internes des centres d\'appels et boutiques, améliorant l\'efficacité opérationnelle.',
          products: ['Surfer H']
        },
        {
          id: 30,
          name: 'Laurent Paillassot',
          firstName: 'Laurent',
          lastName: 'Paillassot',
          jobTitle: 'Group CIO',
          department: 'IT & Infrastructure',
          seniority: 'Executive',
          confidence: 92,
          explanation: 'Surfer H s\'intègre dans les systèmes SI complexes pour automatiser les processus de support client.',
          products: ['Surfer H']
        }
      ],
      'Agent Platform': [
        {
          id: 31,
          name: 'Mari-Noëlle Jégo-Laveissière',
          firstName: 'Mari-Noëlle',
          lastName: 'Jégo-Laveissière',
          jobTitle: 'Chief Digital Officer',
          department: 'Digital & Innovation',
          seniority: 'Executive',
          confidence: 93,
          explanation: 'L\'Agent Platform orchestre des agents pour automatiser la résolution de tickets et la gestion d\'incidents.',
          products: ['Agent Platform']
        },
        {
          id: 32,
          name: 'Laurent Paillassot',
          firstName: 'Laurent',
          lastName: 'Paillassot',
          jobTitle: 'Group CIO',
          department: 'IT & Infrastructure',
          seniority: 'Executive',
          confidence: 91,
          explanation: 'L\'orchestration d\'agents améliore la gestion des interactions clients à grande échelle.',
          products: ['Agent Platform']
        }
      ],
      'Holo 1.5': [
        {
          id: 33,
          name: 'Laurent Paillassot',
          firstName: 'Laurent',
          lastName: 'Paillassot',
          jobTitle: 'Group CIO',
          department: 'IT & Infrastructure',
          seniority: 'Executive',
          confidence: 90,
          explanation: 'Holo 1.5 permet aux équipes internes de développer des agents pilotant les interfaces CRM et outils maison.',
          products: ['Holo 1.5']
        }
      ]
    }
  },
  {
    id: 7,
    name: 'Capgemini',
    sector: 'Services Numériques',
    country: 'France',
    contacts: {
      'Surfer H': [
        {
          id: 34,
          name: 'Aiman Ezzat',
          firstName: 'Aiman',
          lastName: 'Ezzat',
          jobTitle: 'Group CTO',
          department: 'Technology & Innovation',
          seniority: 'Executive',
          confidence: 95,
          explanation: 'Surfer H peut être intégré dans les offres d\'automatisation et de modernisation SI pour les clients de Capgemini.',
          products: ['Surfer H']
        },
        {
          id: 35,
          name: 'Fernando Alvarez',
          firstName: 'Fernando',
          lastName: 'Alvarez',
          jobTitle: 'Chief Innovation Officer',
          department: 'Innovation & Labs',
          seniority: 'Executive',
          confidence: 93,
          explanation: 'Surfer H comme brique technologique à revendre dans les offres d\'automatisation pour les clients.',
          products: ['Surfer H']
        }
      ],
      'Agent Platform': [
        {
          id: 36,
          name: 'Aiman Ezzat',
          firstName: 'Aiman',
          lastName: 'Ezzat',
          jobTitle: 'Group CTO',
          department: 'Technology & Innovation',
          seniority: 'Executive',
          confidence: 94,
          explanation: 'L\'Agent Platform peut être packagé dans les offres d\'automatisation pour les clients de Capgemini.',
          products: ['Agent Platform']
        },
        {
          id: 37,
          name: 'Fernando Alvarez',
          firstName: 'Fernando',
          lastName: 'Alvarez',
          jobTitle: 'Chief Innovation Officer',
          department: 'Innovation & Labs',
          seniority: 'Executive',
          confidence: 92,
          explanation: 'L\'orchestration d\'agents répond aux besoins des clients en transformation digitale.',
          products: ['Agent Platform']
        }
      ],
      'Holo 1.5': [
        {
          id: 38,
          name: 'Aiman Ezzat',
          firstName: 'Aiman',
          lastName: 'Ezzat',
          jobTitle: 'Group CTO',
          department: 'Technology & Innovation',
          seniority: 'Executive',
          confidence: 91,
          explanation: 'Holo 1.5 comme modèle fondation intégré dans les plateformes IA de Capgemini pour les clients.',
          products: ['Holo 1.5']
        }
      ]
    }
  },
  {
    id: 8,
    name: 'Dassault Systèmes',
    sector: 'Logiciels Industriels',
    country: 'France',
    contacts: {
      'Surfer H': [
        {
          id: 39,
          name: 'Pascal Daloz',
          firstName: 'Pascal',
          lastName: 'Daloz',
          jobTitle: 'CTO',
          department: 'Technology & Innovation',
          seniority: 'Executive',
          confidence: 93,
          explanation: 'Surfer H automatise la navigation dans les portails clients, fournisseurs et outils de support pour améliorer l\'efficacité.',
          products: ['Surfer H']
        },
        {
          id: 40,
          name: 'Florence Verzelen',
          firstName: 'Florence',
          lastName: 'Verzelen',
          jobTitle: 'Chief Digital Officer',
          department: 'Digital Transformation',
          seniority: 'Executive',
          confidence: 91,
          explanation: 'Surfer H s\'intègre dans la stratégie digitale pour optimiser les interactions avec les clients et partenaires.',
          products: ['Surfer H']
        }
      ],
      'Agent Platform': [
        {
          id: 41,
          name: 'Pascal Daloz',
          firstName: 'Pascal',
          lastName: 'Daloz',
          jobTitle: 'CTO',
          department: 'Technology & Innovation',
          seniority: 'Executive',
          confidence: 92,
          explanation: 'L\'Agent Platform orchestre des flux entre CRM, PLM, ERP et systèmes de support pour améliorer l\'efficacité.',
          products: ['Agent Platform']
        },
        {
          id: 42,
          name: 'Florence Verzelen',
          firstName: 'Florence',
          lastName: 'Verzelen',
          jobTitle: 'Chief Digital Officer',
          department: 'Digital Transformation',
          seniority: 'Executive',
          confidence: 90,
          explanation: 'L\'orchestration d\'agents connecte les différents systèmes pour créer des workflows intelligents.',
          products: ['Agent Platform']
        }
      ],
      'Holo 1.5': [
        {
          id: 43,
          name: 'Pascal Daloz',
          firstName: 'Pascal',
          lastName: 'Daloz',
          jobTitle: 'CTO',
          department: 'Technology & Innovation',
          seniority: 'Executive',
          confidence: 91,
          explanation: 'Holo 1.5 permet aux équipes produits d\'intégrer des agents dans les logiciels pour contrôler des interfaces desktop complexes.',
          products: ['Holo 1.5']
        }
      ]
    }
  },
  {
    id: 9,
    name: 'Safran',
    sector: 'Aéronautique',
    country: 'France',
    contacts: {
      'Surfer H': [
        {
          id: 44,
          name: 'Stéphane Cueille',
          firstName: 'Stéphane',
          lastName: 'Cueille',
          jobTitle: 'Group CIO',
          department: 'IT & Digital',
          seniority: 'Executive',
          confidence: 92,
          explanation: 'Surfer H automatise les interactions avec de multiples outils internes complexes pour améliorer l\'efficacité opérationnelle.',
          products: ['Surfer H']
        },
        {
          id: 45,
          name: 'Eric Dalbiès',
          firstName: 'Eric',
          lastName: 'Dalbiès',
          jobTitle: 'CTO',
          department: 'Technology & Innovation',
          seniority: 'Executive',
          confidence: 90,
          explanation: 'Surfer H s\'intègre dans les processus complexes de l\'aéronautique pour automatiser les tâches répétitives.',
          products: ['Surfer H']
        }
      ],
      'Agent Platform': [
        {
          id: 46,
          name: 'Stéphane Cueille',
          firstName: 'Stéphane',
          lastName: 'Cueille',
          jobTitle: 'Group CIO',
          department: 'IT & Digital',
          seniority: 'Executive',
          confidence: 91,
          explanation: 'L\'Agent Platform orchestre des agents pour automatiser les tests, la documentation et les interactions avec les outils complexes.',
          products: ['Agent Platform']
        },
        {
          id: 47,
          name: 'Eric Dalbiès',
          firstName: 'Eric',
          lastName: 'Dalbiès',
          jobTitle: 'CTO',
          department: 'Technology & Innovation',
          seniority: 'Executive',
          confidence: 89,
          explanation: 'L\'orchestration d\'agents répond aux besoins d\'automatisation dans un contexte de forte régulation.',
          products: ['Agent Platform']
        }
      ],
      'Holo 1.5': [
        {
          id: 48,
          name: 'Stéphane Cueille',
          firstName: 'Stéphane',
          lastName: 'Cueille',
          jobTitle: 'Group CIO',
          department: 'IT & Digital',
          seniority: 'Executive',
          confidence: 90,
          explanation: 'Holo 1.5 permet aux équipes internes de développer des agents pour gérer les systèmes complexes de l\'aéronautique.',
          products: ['Holo 1.5']
        }
      ]
    }
  },
  {
    id: 10,
    name: 'Edenred',
    sector: 'Services B2B2C',
    country: 'France',
    contacts: {
      'Surfer H': [
        {
          id: 49,
          name: 'Bertrand Dumazy',
          firstName: 'Bertrand',
          lastName: 'Dumazy',
          jobTitle: 'Chief Operating Officer',
          department: 'Operations',
          seniority: 'Executive',
          confidence: 93,
          explanation: 'Surfer H outille les agents téléphoniques avec un copilot naviguant dans leurs outils pour améliorer l\'efficacité.',
          products: ['Surfer H']
        },
        {
          id: 50,
          name: 'Alexandre Bompard',
          firstName: 'Alexandre',
          lastName: 'Bompard',
          jobTitle: 'Chief Digital Officer',
          department: 'Digital & Innovation',
          seniority: 'Executive',
          confidence: 91,
          explanation: 'Surfer H s\'intègre dans les services fortement digitalisés pour automatiser les processus opérationnels.',
          products: ['Surfer H']
        }
      ],
      'Agent Platform': [
        {
          id: 51,
          name: 'Bertrand Dumazy',
          firstName: 'Bertrand',
          lastName: 'Dumazy',
          jobTitle: 'Chief Operating Officer',
          department: 'Operations',
          seniority: 'Executive',
          confidence: 92,
          explanation: 'L\'Agent Platform industrialise les agents et les connecte aux flux d\'entrée et de sortie pour améliorer l\'efficacité.',
          products: ['Agent Platform']
        },
        {
          id: 52,
          name: 'Alexandre Bompard',
          firstName: 'Alexandre',
          lastName: 'Bompard',
          jobTitle: 'Chief Digital Officer',
          department: 'Digital & Innovation',
          seniority: 'Executive',
          confidence: 90,
          explanation: 'L\'orchestration d\'agents répond aux besoins d\'industrialisation des services digitalisés.',
          products: ['Agent Platform']
        }
      ],
      'Holo 1.5': [
        {
          id: 53,
          name: 'Bertrand Dumazy',
          firstName: 'Bertrand',
          lastName: 'Dumazy',
          jobTitle: 'Chief Operating Officer',
          department: 'Operations',
          seniority: 'Executive',
          confidence: 89,
          explanation: 'Holo 1.5 permet de piloter les applications internes des centres de contact pour améliorer l\'efficacité opérationnelle.',
          products: ['Holo 1.5']
        }
      ]
    }
  },
  {
    id: 11,
    name: 'Microsoft',
    sector: 'Cloud & Logiciels',
    country: 'International',
    contacts: {
      'Surfer H': [
        {
          id: 54,
          name: 'Satya Nadella',
          firstName: 'Satya',
          lastName: 'Nadella',
          jobTitle: 'VP AI',
          department: 'AI & Research',
          seniority: 'Executive',
          confidence: 96,
          explanation: 'Surfer H peut être intégré dans les marketplaces Microsoft comme exemple d\'agents web performants.',
          products: ['Surfer H']
        },
        {
          id: 55,
          name: 'Scott Guthrie',
          firstName: 'Scott',
          lastName: 'Guthrie',
          jobTitle: 'VP Cloud Product',
          department: 'Azure & Cloud',
          seniority: 'Executive',
          confidence: 94,
          explanation: 'Surfer H peut être utilisé en interne et proposé dans les catalogues Azure pour les clients.',
          products: ['Surfer H']
        }
      ],
      'Agent Platform': [
        {
          id: 56,
          name: 'Satya Nadella',
          firstName: 'Satya',
          lastName: 'Nadella',
          jobTitle: 'VP AI',
          department: 'AI & Research',
          seniority: 'Executive',
          confidence: 95,
          explanation: 'L\'Agent Platform peut être intégré dans les offres d\'agents autonomes de Microsoft.',
          products: ['Agent Platform']
        },
        {
          id: 57,
          name: 'Scott Guthrie',
          firstName: 'Scott',
          lastName: 'Guthrie',
          jobTitle: 'VP Cloud Product',
          department: 'Azure & Cloud',
          seniority: 'Executive',
          confidence: 93,
          explanation: 'L\'Agent Platform s\'intègre dans l\'écosystème Azure pour les clients cherchant des solutions d\'agents.',
          products: ['Agent Platform']
        }
      ],
      'Holo 1.5': [
        {
          id: 58,
          name: 'Satya Nadella',
          firstName: 'Satya',
          lastName: 'Nadella',
          jobTitle: 'VP AI',
          department: 'AI & Research',
          seniority: 'Executive',
          confidence: 94,
          explanation: 'Holo 1.5 comme modèle fondation peut être intégré dans les catalogues de modèles Microsoft pour computer use.',
          products: ['Holo 1.5']
        },
        {
          id: 59,
          name: 'Kevin Scott',
          firstName: 'Kevin',
          lastName: 'Scott',
          jobTitle: 'CTO',
          department: 'Technology',
          seniority: 'Executive',
          confidence: 92,
          explanation: 'Holo 1.5 répond aux besoins de modèles fondation pour agents dans l\'écosystème Microsoft.',
          products: ['Holo 1.5']
        }
      ]
    }
  },
  {
    id: 12,
    name: 'Salesforce',
    sector: 'CRM & Plateformes',
    country: 'International',
    contacts: {
      'Surfer H': [
        {
          id: 60,
          name: 'Marc Benioff',
          firstName: 'Marc',
          lastName: 'Benioff',
          jobTitle: 'Chief Product Officer',
          department: 'Product & Innovation',
          seniority: 'Executive',
          confidence: 95,
          explanation: 'Surfer H permet de piloter les interfaces Salesforce sans intégration API fine, améliorant l\'automatisation.',
          products: ['Surfer H']
        },
        {
          id: 61,
          name: 'Parker Harris',
          firstName: 'Parker',
          lastName: 'Harris',
          jobTitle: 'CTO',
          department: 'Technology',
          seniority: 'Executive',
          confidence: 93,
          explanation: 'Surfer H s\'intègre dans l\'écosystème Salesforce pour automatiser les interactions avec les applications.',
          products: ['Surfer H']
        }
      ],
      'Agent Platform': [
        {
          id: 62,
          name: 'Marc Benioff',
          firstName: 'Marc',
          lastName: 'Benioff',
          jobTitle: 'Chief Product Officer',
          department: 'Product & Innovation',
          seniority: 'Executive',
          confidence: 94,
          explanation: 'L\'Agent Platform comme couche orchestratrice d\'agents autour des solutions Salesforce.',
          products: ['Agent Platform']
        },
        {
          id: 63,
          name: 'Parker Harris',
          firstName: 'Parker',
          lastName: 'Harris',
          jobTitle: 'CTO',
          department: 'Technology',
          seniority: 'Executive',
          confidence: 92,
          explanation: 'L\'orchestration d\'agents améliore l\'intégration avec l\'écosystème Salesforce.',
          products: ['Agent Platform']
        }
      ],
      'Holo 1.5': [
        {
          id: 64,
          name: 'Marc Benioff',
          firstName: 'Marc',
          lastName: 'Benioff',
          jobTitle: 'Chief Product Officer',
          department: 'Product & Innovation',
          seniority: 'Executive',
          confidence: 93,
          explanation: 'Holo 1.5 comme modèle fondation embarqué dans les suites IA Salesforce.',
          products: ['Holo 1.5']
        },
        {
          id: 65,
          name: 'Clara Shih',
          firstName: 'Clara',
          lastName: 'Shih',
          jobTitle: 'EVP AI et Automation',
          department: 'AI & Automation',
          seniority: 'Executive',
          confidence: 91,
          explanation: 'Holo 1.5 s\'intègre dans les offres d\'IA et d\'automatisation de Salesforce.',
          products: ['Holo 1.5']
        }
      ]
    }
  },
  {
    id: 13,
    name: 'JPMorgan Chase',
    sector: 'Banque',
    country: 'International',
    contacts: {
      'Surfer H': [
        {
          id: 66,
          name: 'Lori Beer',
          firstName: 'Lori',
          lastName: 'Beer',
          jobTitle: 'Group CIO',
          department: 'IT & Operations',
          seniority: 'Executive',
          confidence: 94,
          explanation: 'Surfer H automatise les parcours réglementaires, middle office et back office pour réduire les coûts opérationnels.',
          products: ['Surfer H']
        },
        {
          id: 67,
          name: 'Teresa Heitsenrether',
          firstName: 'Teresa',
          lastName: 'Heitsenrether',
          jobTitle: 'Group CDO',
          department: 'Digital & Data',
          seniority: 'Executive',
          confidence: 92,
          explanation: 'Surfer H s\'intègre dans la stratégie digitale pour automatiser les processus bancaires complexes.',
          products: ['Surfer H']
        }
      ],
      'Agent Platform': [
        {
          id: 68,
          name: 'Lori Beer',
          firstName: 'Lori',
          lastName: 'Beer',
          jobTitle: 'Group CIO',
          department: 'IT & Operations',
          seniority: 'Executive',
          confidence: 93,
          explanation: 'L\'Agent Platform orchestre des agents pour automatiser les processus à grande échelle dans la banque.',
          products: ['Agent Platform']
        },
        {
          id: 69,
          name: 'Teresa Heitsenrether',
          firstName: 'Teresa',
          lastName: 'Heitsenrether',
          jobTitle: 'Group CDO',
          department: 'Digital & Data',
          seniority: 'Executive',
          confidence: 91,
          explanation: 'L\'orchestration d\'agents répond aux besoins d\'automatisation dans un contexte multi-pays.',
          products: ['Agent Platform']
        }
      ],
      'Holo 1.5': [
        {
          id: 70,
          name: 'Lori Beer',
          firstName: 'Lori',
          lastName: 'Beer',
          jobTitle: 'Group CIO',
          department: 'IT & Operations',
          seniority: 'Executive',
          confidence: 90,
          explanation: 'Holo 1.5 permet aux équipes internes de développer des agents pour les systèmes bancaires complexes.',
          products: ['Holo 1.5']
        }
      ]
    }
  },
  {
    id: 14,
    name: 'Allianz',
    sector: 'Assurance',
    country: 'International',
    contacts: {
      'Surfer H': [
        {
          id: 71,
          name: 'Barbara Karuth-Zelle',
          firstName: 'Barbara',
          lastName: 'Karuth-Zelle',
          jobTitle: 'CIO',
          department: 'IT & Digital',
          seniority: 'Executive',
          confidence: 93,
          explanation: 'Surfer H automatise la navigation dans la multitude d\'outils internes, portails partenaires et courtiers.',
          products: ['Surfer H']
        },
        {
          id: 72,
          name: 'Renate Wagner',
          firstName: 'Renate',
          lastName: 'Wagner',
          jobTitle: 'Chief Transformation Officer',
          department: 'Transformation',
          seniority: 'Executive',
          confidence: 91,
          explanation: 'Surfer H s\'intègre dans la stratégie de transformation pour automatiser les processus sinistres et souscription.',
          products: ['Surfer H']
        }
      ],
      'Agent Platform': [
        {
          id: 73,
          name: 'Barbara Karuth-Zelle',
          firstName: 'Barbara',
          lastName: 'Karuth-Zelle',
          jobTitle: 'CIO',
          department: 'IT & Digital',
          seniority: 'Executive',
          confidence: 92,
          explanation: 'L\'Agent Platform coordonne les agents pour améliorer l\'efficacité des processus d\'assurance.',
          products: ['Agent Platform']
        },
        {
          id: 74,
          name: 'Renate Wagner',
          firstName: 'Renate',
          lastName: 'Wagner',
          jobTitle: 'Chief Transformation Officer',
          department: 'Transformation',
          seniority: 'Executive',
          confidence: 90,
          explanation: 'L\'orchestration d\'agents répond aux besoins de transformation digitale de l\'assureur.',
          products: ['Agent Platform']
        }
      ],
      'Holo 1.5': [
        {
          id: 75,
          name: 'Barbara Karuth-Zelle',
          firstName: 'Barbara',
          lastName: 'Karuth-Zelle',
          jobTitle: 'CIO',
          department: 'IT & Digital',
          seniority: 'Executive',
          confidence: 89,
          explanation: 'Holo 1.5 permet de gérer des interfaces de systèmes legacy critiques pour l\'assurance.',
          products: ['Holo 1.5']
        }
      ]
    }
  },
  {
    id: 15,
    name: 'Accenture',
    sector: 'Conseil & Intégration',
    country: 'International',
    contacts: {
      'Surfer H': [
        {
          id: 76,
          name: 'Julie Sweet',
          firstName: 'Julie',
          lastName: 'Sweet',
          jobTitle: 'Global Head of AI et Data',
          department: 'AI & Data',
          seniority: 'Executive',
          confidence: 95,
          explanation: 'Surfer H peut être packagé dans les offres de transformation IA et d\'automatisation pour les clients d\'Accenture.',
          products: ['Surfer H']
        },
        {
          id: 77,
          name: 'Paul Daugherty',
          firstName: 'Paul',
          lastName: 'Daugherty',
          jobTitle: 'CTO',
          department: 'Technology & Innovation',
          seniority: 'Executive',
          confidence: 93,
          explanation: 'Surfer H s\'intègre dans les solutions d\'automatisation proposées aux clients d\'Accenture.',
          products: ['Surfer H']
        }
      ],
      'Agent Platform': [
        {
          id: 78,
          name: 'Julie Sweet',
          firstName: 'Julie',
          lastName: 'Sweet',
          jobTitle: 'Global Head of AI et Data',
          department: 'AI & Data',
          seniority: 'Executive',
          confidence: 94,
          explanation: 'L\'Agent Platform peut être intégré dans les offres de transformation IA pour les clients.',
          products: ['Agent Platform']
        },
        {
          id: 79,
          name: 'Paul Daugherty',
          firstName: 'Paul',
          lastName: 'Daugherty',
          jobTitle: 'CTO',
          department: 'Technology & Innovation',
          seniority: 'Executive',
          confidence: 92,
          explanation: 'L\'orchestration d\'agents répond aux besoins des clients en transformation digitale.',
          products: ['Agent Platform']
        }
      ],
      'Holo 1.5': [
        {
          id: 80,
          name: 'Julie Sweet',
          firstName: 'Julie',
          lastName: 'Sweet',
          jobTitle: 'Global Head of AI et Data',
          department: 'AI & Data',
          seniority: 'Executive',
          confidence: 91,
          explanation: 'Holo 1.5 peut être packagé dans les offres d\'automatisation et de modernisation SI pour les clients.',
          products: ['Holo 1.5']
        }
      ]
    }
  },
  {
    id: 16,
    name: 'Kering',
    sector: 'Luxe',
    country: 'France',
    contacts: {
      'Surfer H': [
        {
          id: 81,
          name: 'Grégory Boutté',
          firstName: 'Grégory',
          lastName: 'Boutté',
          jobTitle: 'Chief Digital Officer',
          department: 'Digital & Innovation',
          seniority: 'Executive',
          confidence: 94,
          explanation: 'Surfer H automatise les opérations e-commerce, le merchandising digital et le monitoring concurrentiel.',
          products: ['Surfer H']
        },
        {
          id: 82,
          name: 'Jean-Marc Duplaix',
          firstName: 'Jean-Marc',
          lastName: 'Duplaix',
          jobTitle: 'Group CIO',
          department: 'IT & Digital',
          seniority: 'Executive',
          confidence: 92,
          explanation: 'Surfer H s\'intègre dans la stratégie digitale pour optimiser les opérations retail et e-commerce.',
          products: ['Surfer H']
        }
      ],
      'Agent Platform': [
        {
          id: 83,
          name: 'Grégory Boutté',
          firstName: 'Grégory',
          lastName: 'Boutté',
          jobTitle: 'Chief Digital Officer',
          department: 'Digital & Innovation',
          seniority: 'Executive',
          confidence: 93,
          explanation: 'L\'Agent Platform permet de créer des agents d\'aide à la vente connectés aux outils CRM.',
          products: ['Agent Platform']
        },
        {
          id: 84,
          name: 'Jean-Marc Duplaix',
          firstName: 'Jean-Marc',
          lastName: 'Duplaix',
          jobTitle: 'Group CIO',
          department: 'IT & Digital',
          seniority: 'Executive',
          confidence: 91,
          explanation: 'L\'orchestration d\'agents améliore l\'expérience client en connectant les outils internes.',
          products: ['Agent Platform']
        }
      ],
      'Holo 1.5': [
        {
          id: 85,
          name: 'Jean-Marc Duplaix',
          firstName: 'Jean-Marc',
          lastName: 'Duplaix',
          jobTitle: 'Group CIO',
          department: 'IT & Digital',
          seniority: 'Executive',
          confidence: 90,
          explanation: 'Holo 1.5 permet aux équipes produits d\'embarquer des capacités d\'agent dans les logiciels internes.',
          products: ['Holo 1.5']
        }
      ]
    }
  },
  {
    id: 17,
    name: 'Danone',
    sector: 'Agroalimentaire',
    country: 'France',
    contacts: {
      'Surfer H': [
        {
          id: 86,
          name: 'Véronique Penchienati-Bosetta',
          firstName: 'Véronique',
          lastName: 'Penchienati-Bosetta',
          jobTitle: 'Chief Digital and Marketing Officer',
          department: 'Digital & Marketing',
          seniority: 'Executive',
          confidence: 93,
          explanation: 'Surfer H automatise la veille e-commerce, le suivi des prix et la collecte d\'avis clients.',
          products: ['Surfer H']
        },
        {
          id: 87,
          name: 'Frédéric Bouteiller',
          firstName: 'Frédéric',
          lastName: 'Bouteiller',
          jobTitle: 'Group CIO',
          department: 'IT & Digital',
          seniority: 'Executive',
          confidence: 91,
          explanation: 'Surfer H optimise les opérations marketing et trade marketing en automatisant la collecte de données.',
          products: ['Surfer H']
        }
      ],
      'Agent Platform': [
        {
          id: 88,
          name: 'Véronique Penchienati-Bosetta',
          firstName: 'Véronique',
          lastName: 'Penchienati-Bosetta',
          jobTitle: 'Chief Digital and Marketing Officer',
          department: 'Digital & Marketing',
          seniority: 'Executive',
          confidence: 92,
          explanation: 'L\'Agent Platform orchestre des agents pour automatiser les opérations marketing et la préparation de reportings.',
          products: ['Agent Platform']
        },
        {
          id: 89,
          name: 'Frédéric Bouteiller',
          firstName: 'Frédéric',
          lastName: 'Bouteiller',
          jobTitle: 'Group CIO',
          department: 'IT & Digital',
          seniority: 'Executive',
          confidence: 90,
          explanation: 'L\'orchestration d\'agents connecte les outils internes marketing, finance et supply chain.',
          products: ['Agent Platform']
        }
      ],
      'Holo 1.5': [
        {
          id: 90,
          name: 'Frédéric Bouteiller',
          firstName: 'Frédéric',
          lastName: 'Bouteiller',
          jobTitle: 'Group CIO',
          department: 'IT & Digital',
          seniority: 'Executive',
          confidence: 89,
          explanation: 'Holo 1.5 intègre des agents dans les outils internes marketing et supply chain.',
          products: ['Holo 1.5']
        }
      ]
    }
  },
  {
    id: 18,
    name: 'Carrefour',
    sector: 'Distribution',
    country: 'France',
    contacts: {
      'Surfer H': [
        {
          id: 91,
          name: 'Elodie Perthuisot',
          firstName: 'Elodie',
          lastName: 'Perthuisot',
          jobTitle: 'VP e-commerce',
          department: 'Digital Retail',
          seniority: 'Executive',
          confidence: 94,
          explanation: 'Surfer H automatise la veille e-commerce, le suivi des prix et la gestion des catalogues distributeurs.',
          products: ['Surfer H']
        },
        {
          id: 92,
          name: 'Marie Cheval',
          firstName: 'Marie',
          lastName: 'Cheval',
          jobTitle: 'VP Digital Retail',
          department: 'Digital & Innovation',
          seniority: 'Executive',
          confidence: 92,
          explanation: 'Surfer H optimise les opérations e-commerce et retail en automatisant les processus répétitifs.',
          products: ['Surfer H']
        }
      ],
      'Agent Platform': [
        {
          id: 93,
          name: 'Elodie Perthuisot',
          firstName: 'Elodie',
          lastName: 'Perthuisot',
          jobTitle: 'VP e-commerce',
          department: 'Digital Retail',
          seniority: 'Executive',
          confidence: 93,
          explanation: 'L\'Agent Platform orchestre des agents pour automatiser les opérations marketing et trade marketing.',
          products: ['Agent Platform']
        },
        {
          id: 94,
          name: 'Marie Cheval',
          firstName: 'Marie',
          lastName: 'Cheval',
          jobTitle: 'VP Digital Retail',
          department: 'Digital & Innovation',
          seniority: 'Executive',
          confidence: 91,
          explanation: 'L\'orchestration d\'agents améliore l\'efficacité des opérations retail et e-commerce.',
          products: ['Agent Platform']
        }
      ],
      'Holo 1.5': [
        {
          id: 95,
          name: 'Marie Cheval',
          firstName: 'Marie',
          lastName: 'Cheval',
          jobTitle: 'VP Digital Retail',
          department: 'Digital & Innovation',
          seniority: 'Executive',
          confidence: 90,
          explanation: 'Holo 1.5 intègre des agents dans les outils internes retail et supply chain.',
          products: ['Holo 1.5']
        }
      ]
    }
  },
  {
    id: 19,
    name: 'Schneider Electric',
    sector: 'Industrie & Énergie',
    country: 'France',
    contacts: {
      'Surfer H': [
        {
          id: 96,
          name: 'Peter Weckesser',
          firstName: 'Peter',
          lastName: 'Weckesser',
          jobTitle: 'CTO',
          department: 'Technology & Innovation',
          seniority: 'Executive',
          confidence: 92,
          explanation: 'Surfer H automatise la navigation dans les portails clients, fournisseurs et outils de support.',
          products: ['Surfer H']
        },
        {
          id: 97,
          name: 'Emmanuel Lagarrigue',
          firstName: 'Emmanuel',
          lastName: 'Lagarrigue',
          jobTitle: 'Chief Digital Officer',
          department: 'Digital Transformation',
          seniority: 'Executive',
          confidence: 90,
          explanation: 'Surfer H s\'intègre dans la stratégie digitale pour optimiser les interactions avec les clients.',
          products: ['Surfer H']
        }
      ],
      'Agent Platform': [
        {
          id: 98,
          name: 'Peter Weckesser',
          firstName: 'Peter',
          lastName: 'Weckesser',
          jobTitle: 'CTO',
          department: 'Technology & Innovation',
          seniority: 'Executive',
          confidence: 91,
          explanation: 'L\'Agent Platform orchestre des flux entre CRM, PLM, ERP et systèmes de support.',
          products: ['Agent Platform']
        },
        {
          id: 99,
          name: 'Emmanuel Lagarrigue',
          firstName: 'Emmanuel',
          lastName: 'Lagarrigue',
          jobTitle: 'Chief Digital Officer',
          department: 'Digital Transformation',
          seniority: 'Executive',
          confidence: 89,
          explanation: 'L\'orchestration d\'agents connecte les différents systèmes pour créer des workflows intelligents.',
          products: ['Agent Platform']
        }
      ],
      'Holo 1.5': [
        {
          id: 100,
          name: 'Peter Weckesser',
          firstName: 'Peter',
          lastName: 'Weckesser',
          jobTitle: 'CTO',
          department: 'Technology & Innovation',
          seniority: 'Executive',
          confidence: 90,
          explanation: 'Holo 1.5 permet aux équipes produits d\'intégrer des agents dans les logiciels pour contrôler des interfaces complexes.',
          products: ['Holo 1.5']
        }
      ]
    }
  },
  {
    id: 20,
    name: 'Airbnb',
    sector: 'Marketplace & Services',
    country: 'International',
    contacts: {
      'Surfer H': [
        {
          id: 101,
          name: 'Catherine Powell',
          firstName: 'Catherine',
          lastName: 'Powell',
          jobTitle: 'Chief Operations Officer',
          department: 'Operations',
          seniority: 'Executive',
          confidence: 94,
          explanation: 'Surfer H automatise la gestion d\'inventaire, la modération et la vérification de contenu entre plateformes.',
          products: ['Surfer H']
        },
        {
          id: 102,
          name: 'Margaret Richardson',
          firstName: 'Margaret',
          lastName: 'Richardson',
          jobTitle: 'VP Trust and Safety',
          department: 'Trust & Safety',
          seniority: 'Executive',
          confidence: 92,
          explanation: 'Surfer H s\'intègre dans les processus de modération et de vérification pour améliorer la sécurité.',
          products: ['Surfer H']
        }
      ],
      'Agent Platform': [
        {
          id: 103,
          name: 'Catherine Powell',
          firstName: 'Catherine',
          lastName: 'Powell',
          jobTitle: 'Chief Operations Officer',
          department: 'Operations',
          seniority: 'Executive',
          confidence: 93,
          explanation: 'L\'Agent Platform orchestre ces agents et les plugge dans les workflows internes pour améliorer l\'efficacité.',
          products: ['Agent Platform']
        },
        {
          id: 104,
          name: 'Margaret Richardson',
          firstName: 'Margaret',
          lastName: 'Richardson',
          jobTitle: 'VP Trust and Safety',
          department: 'Trust & Safety',
          seniority: 'Executive',
          confidence: 91,
          explanation: 'L\'orchestration d\'agents améliore les processus de modération et de gestion d\'exceptions.',
          products: ['Agent Platform']
        }
      ],
      'Holo 1.5': [
        {
          id: 105,
          name: 'Catherine Powell',
          firstName: 'Catherine',
          lastName: 'Powell',
          jobTitle: 'Chief Operations Officer',
          department: 'Operations',
          seniority: 'Executive',
          confidence: 90,
          explanation: 'Holo 1.5 permet aux agents d\'utiliser les consoles internes et outils d\'ops pour améliorer l\'efficacité.',
          products: ['Holo 1.5']
        }
      ]
    }
  }
]

// Liste des produits disponibles
export const products: Product[] = ['Surfer H', 'Agent Platform', 'Holo 1.5']

