import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { Check, Palette } from "lucide-react";
import { cn } from "../../lib/cn";

export type MarketingGradientPalette = {
  id: string;
  label: string;
  /** Short note shown in the picker */
  hint: string;
  /** Four stops used for text + soft bg washes */
  colors: [string, string, string, string];
  /** Solid accent for buttons / eyebrows */
  accent: string;
  /** Slightly darker hover for buttons */
  accentHover: string;
};

export const MARKETING_GRADIENT_PALETTES: MarketingGradientPalette[] = [
  {
    id: "violet-sunset",
    label: "Violet Sunset",
    hint: "Purple · Pink · Blue · Orange",
    colors: ["#7C3AED", "#EC4899", "#2563EB", "#F59E0B"],
    accent: "#7C3AED",
    accentHover: "#6D28D9",
  },
  {
    id: "candy-pop",
    label: "Candy Pop",
    hint: "Hot pink · Magenta · Violet · Sky",
    colors: ["#FF4D8D", "#E879F9", "#A78BFA", "#60A5FA"],
    accent: "#DB2777",
    accentHover: "#BE185D",
  },
  {
    id: "golden-hour",
    label: "Golden Hour",
    hint: "Amber · Coral · Rose · Gold",
    colors: ["#F59E0B", "#FB7185", "#F472B6", "#EAB308"],
    accent: "#D97706",
    accentHover: "#B45309",
  },
  {
    id: "ocean-mist",
    label: "Ocean Mist",
    hint: "Sky · Indigo · Cyan · Teal",
    colors: ["#0EA5E9", "#6366F1", "#22D3EE", "#14B8A6"],
    accent: "#0EA5E9",
    accentHover: "#0284C7",
  },
  {
    id: "sapphire-glow",
    label: "Sapphire Glow",
    hint: "Deep blue · Indigo · Azure · Ice",
    colors: ["#1D4ED8", "#4F46E5", "#38BDF8", "#93C5FD"],
    accent: "#2563EB",
    accentHover: "#1D4ED8",
  },
  {
    id: "aurora",
    label: "Aurora",
    hint: "Emerald · Cyan · Violet · Blue",
    colors: ["#10B981", "#06B6D4", "#8B5CF6", "#3B82F6"],
    accent: "#059669",
    accentHover: "#047857",
  },
  {
    id: "tropical-punch",
    label: "Tropical Punch",
    hint: "Lime · Teal · Cyan · Yellow",
    colors: ["#84CC16", "#14B8A6", "#06B6D4", "#FACC15"],
    accent: "#65A30D",
    accentHover: "#4D7C0F",
  },
  {
    id: "coral-dusk",
    label: "Coral Dusk",
    hint: "Rose · Orange · Amber · Red",
    colors: ["#F43F5E", "#FB7185", "#F59E0B", "#EF4444"],
    accent: "#E11D48",
    accentHover: "#BE123C",
  },
  {
    id: "peach-cream",
    label: "Peach Cream",
    hint: "Peach · Apricot · Blush · Soft gold",
    colors: ["#FB923C", "#FDA4AF", "#F9A8D4", "#FCD34D"],
    accent: "#EA580C",
    accentHover: "#C2410C",
  },
  {
    id: "berry-crush",
    label: "Berry Crush",
    hint: "Berry · Plum · Magenta · Wine",
    colors: ["#BE123C", "#C026D3", "#E879F9", "#9F1239"],
    accent: "#BE123C",
    accentHover: "#9F1239",
  },
  {
    id: "noir-neon",
    label: "Noir Neon",
    hint: "Fuchsia · Violet · Blue · Cyan",
    colors: ["#D946EF", "#8B5CF6", "#3B82F6", "#22D3EE"],
    accent: "#A855F7",
    accentHover: "#9333EA",
  },
  {
    id: "midnight-bloom",
    label: "Midnight Bloom",
    hint: "Indigo · Violet · Orchid · Blue",
    colors: ["#312E81", "#7C3AED", "#C084FC", "#60A5FA"],
    accent: "#4F46E5",
    accentHover: "#4338CA",
  },
  {
    id: "mint-slate",
    label: "Mint Slate",
    hint: "Teal · Slate · Sky · Lime",
    colors: ["#0D9488", "#64748B", "#38BDF8", "#84CC16"],
    accent: "#0F766E",
    accentHover: "#115E59",
  },
  {
    id: "ice-lilac",
    label: "Ice Lilac",
    hint: "Lilac · Periwinkle · Soft blue · Mint",
    colors: ["#C4B5FD", "#A5B4FC", "#7DD3FC", "#6EE7B7"],
    accent: "#7C3AED",
    accentHover: "#6D28D9",
  },
  {
    id: "citrus-spark",
    label: "Citrus Spark",
    hint: "Lemon · Orange · Coral · Chartreuse",
    colors: ["#FACC15", "#F97316", "#FB7185", "#A3E635"],
    accent: "#EA580C",
    accentHover: "#C2410C",
  },
  {
    id: "flamingo-tide",
    label: "Flamingo Tide",
    hint: "Flamingo · Coral · Turquoise · Aqua",
    colors: ["#F472B6", "#FB7185", "#2DD4BF", "#67E8F9"],
    accent: "#DB2777",
    accentHover: "#BE185D",
  },
  {
    id: "royal-velvet",
    label: "Royal Velvet",
    hint: "Royal · Magenta · Gold · Crimson",
    colors: ["#4C1D95", "#DB2777", "#F59E0B", "#DC2626"],
    accent: "#6D28D9",
    accentHover: "#5B21B6",
  },
  {
    id: "lagoon",
    label: "Lagoon",
    hint: "Deep teal · Aqua · Cobalt · Seafoam",
    colors: ["#0F766E", "#2DD4BF", "#2563EB", "#99F6E4"],
    accent: "#0D9488",
    accentHover: "#0F766E",
  },
];

const STORAGE_KEY = "marketing-agent-gradient-palette";

type PaletteContextValue = {
  palette: MarketingGradientPalette;
  paletteId: string;
  setPaletteId: (id: string) => void;
  cssVars: CSSProperties;
};

const MarketingPaletteContext = createContext<PaletteContextValue | null>(null);

function readStoredPaletteId(): string {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && MARKETING_GRADIENT_PALETTES.some((p) => p.id === stored)) {
      return stored;
    }
  } catch {
    /* ignore */
  }
  return MARKETING_GRADIENT_PALETTES[0].id;
}

export function MarketingPaletteProvider({ children }: { children: ReactNode }) {
  const [paletteId, setPaletteIdState] = useState(readStoredPaletteId);

  const setPaletteId = useCallback((id: string) => {
    setPaletteIdState(id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* ignore */
    }
  }, []);

  const palette =
    MARKETING_GRADIENT_PALETTES.find((p) => p.id === paletteId) ??
    MARKETING_GRADIENT_PALETTES[0];

  const cssVars = useMemo(
    () =>
      ({
        "--marketing-p1": palette.colors[0],
        "--marketing-p2": palette.colors[1],
        "--marketing-p3": palette.colors[2],
        "--marketing-p4": palette.colors[3],
        "--marketing-accent": palette.accent,
        "--marketing-accent-hover": palette.accentHover,
      }) as CSSProperties,
    [palette],
  );

  const value = useMemo(
    () => ({ palette, paletteId, setPaletteId, cssVars }),
    [palette, paletteId, setPaletteId, cssVars],
  );

  return (
    <MarketingPaletteContext.Provider value={value}>
      <div style={cssVars}>{children}</div>
    </MarketingPaletteContext.Provider>
  );
}

export function useMarketingPalette() {
  const ctx = useContext(MarketingPaletteContext);
  if (!ctx) {
    throw new Error("useMarketingPalette must be used within MarketingPaletteProvider");
  }
  return ctx;
}

/** Safe hook when provider may be absent (falls back to default palette). */
export function useMarketingPaletteOptional() {
  return useContext(MarketingPaletteContext);
}

export function MarketingPalettePicker({ className }: { className?: string }) {
  const { palette, paletteId, setPaletteId } = useMarketingPalette();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn("relative shrink-0", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Choose color palette"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 items-center gap-2 rounded-full border border-ink-200 bg-white px-2.5 text-[13px] font-medium text-ink-700 shadow-sm transition hover:border-ink-300 hover:bg-ink-50"
      >
        <span
          aria-hidden
          className="h-5 w-5 shrink-0 rounded-full ring-1 ring-ink-200/80"
          style={{
            background: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[1]}, ${palette.colors[2]}, ${palette.colors[3]})`,
          }}
        />
        <Palette className="hidden h-3.5 w-3.5 text-ink-500 sm:block" strokeWidth={2} />
        <span className="hidden max-w-[7.5rem] truncate sm:inline">{palette.label}</span>
      </button>

      {open ? (
        <div
          role="listbox"
          aria-label="Gradient palettes"
          className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-[min(18.5rem,calc(100vw-1.5rem))] overflow-hidden rounded-2xl border border-ink-200 bg-white py-2 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.35)]"
        >
          <p className="px-3.5 pb-1.5 text-[11px] font-medium uppercase tracking-wide text-ink-400">
            Color palette
          </p>
          <ul className="max-h-[min(22rem,70vh)] overflow-y-auto">
            {MARKETING_GRADIENT_PALETTES.map((option) => {
              const active = option.id === paletteId;
              return (
                <li key={option.id}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => {
                      setPaletteId(option.id);
                      setOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center gap-3 px-3.5 py-2.5 text-left transition",
                      active ? "bg-ink-50" : "hover:bg-ink-50/80",
                    )}
                  >
                    <span
                      aria-hidden
                      className="h-8 w-8 shrink-0 rounded-full shadow-inner ring-1 ring-ink-200/70"
                      style={{
                        background: `linear-gradient(135deg, ${option.colors[0]} 0%, ${option.colors[1]} 35%, ${option.colors[2]} 70%, ${option.colors[3]} 100%)`,
                      }}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium text-ink-900">
                        {option.label}
                      </span>
                      <span className="mt-0.5 block truncate text-[11px] text-ink-500">
                        {option.hint}
                      </span>
                    </span>
                    {active ? (
                      <Check className="h-4 w-4 shrink-0 text-[var(--marketing-accent)]" strokeWidth={2.5} />
                    ) : null}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
