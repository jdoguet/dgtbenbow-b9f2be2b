import { Droplets, Brain, Globe, ShoppingBag, Leaf } from "lucide-react";

const VisionIllustration = () => {
  const circles = [
    { 
      id: "eau", 
      icon: Droplets, 
      label: "Eau",
      cx: 150, 
      cy: 150, 
      r: 55,
      bgClass: "fill-primary/20",
      borderClass: "stroke-primary",
      iconClass: "text-primary",
      delay: "0s"
    },
    { 
      id: "ia", 
      icon: Brain, 
      label: "IA",
      cx: 80, 
      cy: 70, 
      r: 40,
      bgClass: "fill-accent/20",
      borderClass: "stroke-accent",
      iconClass: "text-accent",
      delay: "0.5s"
    },
    { 
      id: "culture", 
      icon: Globe, 
      label: "Culture",
      cx: 220, 
      cy: 70, 
      r: 40,
      bgClass: "fill-sky-400/20",
      borderClass: "stroke-sky-400",
      iconClass: "text-sky-500",
      delay: "1s"
    },
    { 
      id: "ecommerce", 
      icon: ShoppingBag, 
      label: "E-commerce",
      cx: 230, 
      cy: 220, 
      r: 40,
      bgClass: "fill-emerald-400/20",
      borderClass: "stroke-emerald-400",
      iconClass: "text-emerald-500",
      delay: "1.5s"
    },
    { 
      id: "nature", 
      icon: Leaf, 
      label: "Nature",
      cx: 70, 
      cy: 220, 
      r: 40,
      bgClass: "fill-lime-400/20",
      borderClass: "stroke-lime-500",
      iconClass: "text-lime-600",
      delay: "2s"
    },
  ];

  // Connecting lines from center to satellites
  const connections = [
    { from: circles[0], to: circles[1] },
    { from: circles[0], to: circles[2] },
    { from: circles[0], to: circles[3] },
    { from: circles[0], to: circles[4] },
  ];

  return (
    <div className="relative w-full max-w-[300px] aspect-square mx-auto">
      <svg
        viewBox="0 0 300 300"
        className="w-full h-full"
        aria-labelledby="vision-illustration-title"
      >
        <title id="vision-illustration-title">
          Illustration des 5 domaines d'activité interconnectés de DGTBenbow
        </title>
        
        {/* Connecting lines */}
        <g className="opacity-30">
          {connections.map((conn, index) => (
            <line
              key={index}
              x1={conn.from.cx}
              y1={conn.from.cy}
              x2={conn.to.cx}
              y2={conn.to.cy}
              className="stroke-muted-foreground"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.7;0.3"
                dur="3s"
                repeatCount="indefinite"
                begin={`${index * 0.5}s`}
              />
            </line>
          ))}
        </g>

        {/* Circles */}
        {circles.map((circle) => (
          <g key={circle.id} className="group">
            {/* Glow effect */}
            <circle
              cx={circle.cx}
              cy={circle.cy}
              r={circle.r + 8}
              className={`${circle.bgClass} opacity-50 blur-sm`}
            >
              <animate
                attributeName="r"
                values={`${circle.r + 5};${circle.r + 12};${circle.r + 5}`}
                dur="4s"
                repeatCount="indefinite"
                begin={circle.delay}
              />
            </circle>
            
            {/* Main circle */}
            <circle
              cx={circle.cx}
              cy={circle.cy}
              r={circle.r}
              className={`${circle.bgClass} ${circle.borderClass}`}
              strokeWidth="2"
              style={{
                filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
              }}
            >
              <animate
                attributeName="cy"
                values={`${circle.cy};${circle.cy - 5};${circle.cy}`}
                dur="3s"
                repeatCount="indefinite"
                begin={circle.delay}
              />
            </circle>
          </g>
        ))}
      </svg>

      {/* Icons positioned absolutely over SVG */}
      {circles.map((circle) => {
        const Icon = circle.icon;
        const size = circle.id === "eau" ? 28 : 20;
        // Convert SVG coordinates to percentages
        const left = (circle.cx / 300) * 100;
        const top = (circle.cy / 300) * 100;
        
        return (
          <div
            key={`icon-${circle.id}`}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animation: `float 3s ease-in-out infinite`,
              animationDelay: circle.delay,
            }}
          >
            <Icon 
              size={size} 
              className={`${circle.iconClass} drop-shadow-sm`}
              aria-label={circle.label}
            />
          </div>
        );
      })}

      {/* Decorative dots */}
      <div className="absolute top-4 right-8 w-2 h-2 rounded-full bg-accent/40 animate-pulse" />
      <div className="absolute bottom-8 left-4 w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/3 right-4 w-1 h-1 rounded-full bg-sky-400/50 animate-pulse" style={{ animationDelay: "0.5s" }} />
    </div>
  );
};

export default VisionIllustration;
