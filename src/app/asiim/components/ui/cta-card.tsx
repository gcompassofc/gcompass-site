import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface CtaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: React.ReactNode;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  icon?: React.ReactNode;
}

const CtaCard = React.forwardRef<HTMLDivElement, CtaCardProps>(
  ({ className, imageSrc, imageAlt, title, subtitle, description, buttonText, onButtonClick, icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden rounded-[2rem] border bg-white border-asiim-primary/5 shadow-asiim",
          "flex flex-col md:flex-row group",
          className
        )}
        {...props}
      >
        <div className="md:w-1/3 w-full relative overflow-hidden">
          <div className="absolute inset-0 bg-asiim-deep/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-56 w-full object-cover md:h-full group-hover:scale-105 transition-transform duration-700" 
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="md:w-2/3 w-full p-8 md:p-12 flex flex-col justify-center">
          <div>
            <div className="flex items-center gap-4 mb-4">
              {icon && (
                <div className="w-12 h-12 bg-asiim-primary/10 rounded-2xl flex items-center justify-center text-asiim-primary">
                  {icon}
                </div>
              )}
              <p className="text-xs md:text-sm font-bold text-asiim-primary/70 uppercase tracking-[0.2em]">{title}</p>
            </div>
            
            <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-asiim-primary leading-tight">
              {subtitle}
            </h3>
            <p className="mt-5 text-text-secondary text-base md:text-lg leading-relaxed mix-blend-multiply">
              {description}
            </p>
            
            {buttonText && (
              <div className="mt-8">
                <Button size="lg" onClick={onButtonClick} className="bg-asiim-yellow text-asiim-deep hover:bg-asiim-yellow-light rounded-full font-bold px-8">
                  {buttonText}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);
CtaCard.displayName = "CtaCard";

export { CtaCard };
