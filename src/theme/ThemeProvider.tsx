import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ThemeMode = "light" | "dark";
type AccentTheme = "violet" | "indigo" | "emerald" | "rose";

type ThemeContextValue = {
  mode: ThemeMode;
  accent: AccentTheme;
  setMode: (mode: ThemeMode) => void;
  setAccent: (accent: AccentTheme) => void;
  toggleMode: () => void;
};

const MODE_KEY = "ashu-theme-mode";
const ACCENT_KEY = "ashu-theme-accent";

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getInitialMode(): ThemeMode {
  const saved = localStorage.getItem(MODE_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getInitialAccent(): AccentTheme {
  const saved = localStorage.getItem(ACCENT_KEY);
  if (
    saved === "violet" ||
    saved === "indigo" ||
    saved === "emerald" ||
    saved === "rose"
  ) {
    return saved;
  }
  return "violet";
}

export function ThemeProvider({ children }: { children?: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(getInitialMode);
  const [accent, setAccent] = useState<AccentTheme>(getInitialAccent);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-mode", mode);
    localStorage.setItem(MODE_KEY, mode);
  }, [mode]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-accent", accent);
    localStorage.setItem(ACCENT_KEY, accent);
  }, [accent]);

  const value = useMemo(
    () => ({
      mode,
      accent,
      setMode,
      setAccent,
      toggleMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    [mode, accent],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
