type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "lg" | "md" | "sm" | "full";
  round?: "lg" | "md" | "sm";
};

const variants = {
  primary:
    "bg-stone-300/70 border-stone-400/50 hover:bg-stone-300/90 dark:bg-stone-800/40 dark:hover:bg-stone-800/20 dark:border-stone-800/30",
  secondary: "border-stone-800 dark:border-stone-300",
};

const sizes = {
  lg: "px-6 py-2",
  md: "px-4 py-1.5",
  sm: "px-2 py-1",
  full: "px-6 py-2 w-full",
};

const rounded = {
  lg: "rounded-full",
  md: "rounded-xl",
  sm: "rounded-md",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  round = "md",
}: ButtonType) => {
  return (
    <button
      className={`border cursor-pointer transition-all duration-200 flex justify-center gap-1 focus-visible:outline-0
     ${variants[variant]} ${sizes[size]} ${rounded[round]}`}
      style={{ lineHeight: 1.2 }}
    >
      {children}
    </button>
  );
};

export default Button;
