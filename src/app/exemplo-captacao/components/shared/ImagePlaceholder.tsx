interface ImagePlaceholderProps {
  label: string;
  description: string;
  className?: string;
  src?: string;
}

export default function ImagePlaceholder({ label, description, className = "", src }: ImagePlaceholderProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-2xl ${className}`}>
        <img 
          src={src} 
          alt={description} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
      </div>
    );
  }

  return (
    <div className={`image-placeholder ${className}`} role="img" aria-label={description}>
      <div className="flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] opacity-40">{label}</span>
        <span className="max-w-[200px] leading-relaxed">{description}</span>
      </div>
    </div>
  );
}
