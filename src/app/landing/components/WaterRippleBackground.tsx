"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    $: unknown;
    jQuery: unknown;
  }
}

interface RippleJQuery {
  fn?: { ripples?: unknown };
  (selector: HTMLElement | null): { ripples: (opts: unknown) => void };
}

export function WaterRippleBackground({ imageUrl }: { imageUrl: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let $ = window.jQuery as RippleJQuery | undefined;
    const rippleNode = ref.current;
    
    const initRipples = async () => {
      try {
        const jqueryModule = await import("jquery");
        $ = (jqueryModule.default || jqueryModule) as RippleJQuery;
        window.jQuery = $;
        window.$ = $;
        
        await import("jquery.ripples");
        
        if (rippleNode && $ && $.fn?.ripples) {
          setTimeout(() => {
            if (!$) return;
            try {
              $(rippleNode).ripples({
                resolution: 256,
                dropRadius: 20,
                perturbance: 0.04,
                interactive: true,
                crossOrigin: ""
              });
            } catch (err) {
              console.error("Failed to dynamically bind ripples:", err);
            }
          }, 200);
        }
      } catch (err) {
        console.error("Failed to initialize ripples script:", err);
      }
    };

    initRipples();

    return () => {
      if (rippleNode && $) {
        try {
          $(rippleNode).ripples("destroy");
        } catch {
        }
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 h-full w-full bg-cover bg-center grayscale opacity-30"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    />
  );
}
