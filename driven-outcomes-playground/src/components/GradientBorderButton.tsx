interface GradientBorderButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "rounded";
  size?: "sm" | "md" | "lg";
  backgroundColor?: string;
  className?: string;
}

export function GradientBorderButton({
  children,
  href,
  onClick,
  variant = "default",
  size = "md",
  backgroundColor,
  className = "",
}: GradientBorderButtonProps) {
  const sizeClasses = {
    sm: "px-6 py-2.5 text-sm",
    md: "px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base",
    lg: "px-8 py-3 text-base",
  };

  const roundedClass = variant === "rounded" ? "rounded-full" : "";
  
  // Default to fully transparent with gradient on hover, unless custom backgroundColor is provided
  const hoverClasses = backgroundColor
    ? ""
    : "hover:bg-gradient-to-r hover:from-pearl-aqua-500 hover:to-cool-steel-500";

  const buttonClasses = `inline-flex justify-center items-center border-2 border-transparent ${sizeClasses[size]} font-bold uppercase tracking-wide text-white ${backgroundColor || ""} ${hoverClasses} transition-all duration-300 ${roundedClass} ${className}`;

  // Use background-clip technique for single element gradient border
  // For transparent: padding area is transparent, border area has gradient
  // For custom background: padding area uses custom color, border area has gradient
  const getBackgroundImage = () => {
    if (backgroundColor) {
      // If custom background is provided, we need to convert it to a color value
      // For now, we'll use a simplified approach - you may need to handle more cases
      if (backgroundColor.includes("white/10")) {
        return "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), linear-gradient(to right, var(--color-pearl-aqua-500), var(--color-cool-steel-500))";
      }
      if (backgroundColor.includes("white/20")) {
        return "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(to right, var(--color-pearl-aqua-500), var(--color-cool-steel-500))";
      }
      // Default: try to use the backgroundColor class and add gradient
      return `linear-gradient(var(--tw-gradient-stops)), linear-gradient(to right, var(--color-pearl-aqua-500), var(--color-cool-steel-500))`;
    }
    return "linear-gradient(transparent, transparent), linear-gradient(to right, var(--color-pearl-aqua-500), var(--color-cool-steel-500))";
  };

  const buttonStyle = {
    backgroundImage: getBackgroundImage(),
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    WebkitBackgroundClip: "padding-box, border-box",
  };

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`${buttonClasses} !no-underline`}
        style={buttonStyle}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={buttonClasses}
      style={buttonStyle}
    >
      {children}
    </button>
  );
}
