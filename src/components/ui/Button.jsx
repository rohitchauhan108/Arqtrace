import { cn } from "@/lib/utils";

export const Button = ({ children, className, variant = "primary", ...props }) => {
  const variants = {
    primary: "bg-primary text-white hover:bg-secondary",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    dark: "bg-secondary text-white hover:bg-primary",
  };

  return (
    <button
      className={cn(
        "px-8 py-4 font-bold transition-all duration-300 uppercase text-sm tracking-wider",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
