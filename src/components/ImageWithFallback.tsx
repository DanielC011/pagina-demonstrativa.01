import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  aspectRatioClass?: string;
  showAiNotice?: boolean;
  priority?: boolean;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  aspectRatioClass = 'aspect-[4/5]',
  showAiNotice = true,
  priority = false,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#E7DED3]/60 group ${aspectRatioClass} ${className}`}>
      {/* Skeleton / Placeholder state */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-[#E7DED3] animate-pulse flex items-center justify-center">
          <span className="text-xs text-[#5F5952]/60 font-sans tracking-widest uppercase">
            Aura
          </span>
        </div>
      )}

      {error ? (
        <div className="absolute inset-0 bg-[#E7DED3] flex flex-col items-center justify-center p-6 text-center">
          <div className="w-8 h-8 rounded-full border border-[#9A8066]/40 flex items-center justify-center mb-2">
            <span className="text-xs text-[#9A8066]">●</span>
          </div>
          <p className="text-xs text-[#5F5952] font-sans tracking-wide">
            {alt}
          </p>
          <span className="text-[10px] text-[#5F5952]/70 mt-1 uppercase tracking-widest">
            Imagem ilustrativa IA
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
          } group-hover:scale-[1.02]`}
          {...props}
        />
      )}

      {/* Discreet AI notice per briefing guidelines:
          "Utilizar de forma discreta: 'Imagem ilustrativa criada com IA para fins demonstrativos.'" */}
      {showAiNotice && (
        <div className="absolute bottom-2 right-2.5 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:opacity-70">
          <span className="inline-block text-[9px] sm:text-[10px] text-[#F4F0EA]/90 tracking-wide font-sans bg-[#171614]/65 backdrop-blur-[2px] px-2 py-0.5 rounded-[2px] border border-white/10">
            Imagem ilustrativa IA
          </span>
        </div>
      )}
    </div>
  );
};
