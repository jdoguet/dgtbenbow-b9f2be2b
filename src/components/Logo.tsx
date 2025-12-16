const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" className="stroke-primary" strokeWidth="3" fill="none" />
          <path
            d="M24 8L26 20L38 18L26 24L38 30L26 28L24 40L22 28L10 30L22 24L10 18L22 20L24 8Z"
            className="fill-accent"
          />
          <circle cx="24" cy="24" r="4" className="fill-primary" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold text-primary tracking-tight">DGT</span>
        <span className="text-xl font-extrabold text-primary tracking-wider">BENBOW</span>
      </div>
    </div>
  );
};

export default Logo;
