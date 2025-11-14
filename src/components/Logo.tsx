function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* H stylisé avec crochet */}
      <svg 
        width="36" 
        height="40" 
        viewBox="0 0 36 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-accent"
      >
        {/* Barre verticale gauche avec courbe en crochet vers l'intérieur en bas */}
        <path 
          d="M10 0 L10 18 Q10 20 6 20 Q10 20 10 22 L10 40" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round"
          fill="none"
        />
        {/* Barre horizontale */}
        <line 
          x1="10" 
          y1="20" 
          x2="26" 
          y2="20" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
        {/* Barre verticale droite avec extension arrondie en bas */}
        <path 
          d="M26 0 L26 20 L26 40 Q26 40 30 36" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      
      {/* Texte HOOK */}
      <span className="text-gray-900 text-xl font-semibold tracking-wide">
        HOOK
      </span>
    </div>
  )
}

export default Logo
