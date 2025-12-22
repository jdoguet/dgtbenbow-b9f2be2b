import logoSvg from "@/assets/logo-dgtbenbow.svg";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <img 
      src={logoSvg} 
      alt="DGTBenbow" 
      className={`h-12 w-auto ${className}`}
    />
  );
};

export default Logo;
