const CompassRose = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle cx="200" cy="200" r="180" className="stroke-border" strokeWidth="1" />
      <circle cx="200" cy="200" r="150" className="stroke-border" strokeWidth="1" />
      <circle cx="200" cy="200" r="120" className="stroke-border" strokeWidth="1" />
      
      {/* Main compass points */}
      <path
        d="M200 20L210 180H190L200 20Z"
        className="fill-primary"
      />
      <path
        d="M200 380L190 220H210L200 380Z"
        className="fill-primary/30"
      />
      <path
        d="M380 200L220 190V210L380 200Z"
        className="fill-primary/30"
      />
      <path
        d="M20 200L180 210V190L20 200Z"
        className="fill-primary"
      />
      
      {/* Secondary compass points */}
      <path
        d="M327 73L215 185L225 195L327 73Z"
        className="fill-accent/60"
      />
      <path
        d="M73 327L185 215L175 205L73 327Z"
        className="fill-accent/30"
      />
      <path
        d="M327 327L215 215L225 205L327 327Z"
        className="fill-accent/30"
      />
      <path
        d="M73 73L185 185L175 195L73 73Z"
        className="fill-accent/60"
      />
      
      {/* Center circle */}
      <circle cx="200" cy="200" r="20" className="fill-accent" />
      <circle cx="200" cy="200" r="10" className="fill-primary" />
      
      {/* Cardinal labels */}
      <text x="200" y="55" textAnchor="middle" className="fill-muted-foreground text-sm font-medium">N</text>
      <text x="200" y="360" textAnchor="middle" className="fill-muted-foreground text-sm font-medium">S</text>
      <text x="355" y="205" textAnchor="middle" className="fill-muted-foreground text-sm font-medium">E</text>
      <text x="45" y="205" textAnchor="middle" className="fill-muted-foreground text-sm font-medium">O</text>
    </svg>
  );
};

export default CompassRose;
