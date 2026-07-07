import { cn } from "@/lib/utils";

export const SectionTitle = ({ subtitle, title, className, light = false }) => {
  return (
    <div className={cn("mb-12", className)}>
      {subtitle && (
        <span className={cn(
          "inline-block mb-3 text-sm font-bold uppercase tracking-[0.2em]",
          light ? "text-primary/80" : "text-primary"
        )}>
          // {subtitle}
        </span>
      )}
      <h2 className={cn(
        "text-3xl md:text-5xl font-bold leading-tight",
        light ? "text-white" : "text-secondary"
      )}>
        {title}
      </h2>
    </div>
  );
};
