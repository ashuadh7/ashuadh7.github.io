import { Link, useLocation } from 'react-router-dom';
import { Layers, User, BookOpen, LandPlot, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/theme/ThemeProvider';

export function Navigation() {
    const location = useLocation();
    const { mode, accent, toggleMode, setAccent } = useTheme();
    const accentOptions = [
        {
            key: 'indigo',
            label: 'Indigo',
            swatchClass: 'bg-[#4f46e5]',
            activeRingClass: 'ring-[#312e81]',
        },
        {
            key: 'emerald',
            label: 'Emerald',
            swatchClass: 'bg-[#059669]',
            activeRingClass: 'ring-[#065f46]',
        },
        {
            key: 'rose',
            label: 'Rose',
            swatchClass: 'bg-[#e11d48]',
            activeRingClass: 'ring-[#9f1239]',
        },
    ] as const;

    const navItems = [
        { path: '/', label: 'Projects', shortLabel: 'Projects', icon: Layers },
        { path: '/playground', label: 'Playground', shortLabel: 'Play', icon: LandPlot },
        { path: '/about', label: 'About', shortLabel: 'About', icon: User },
        { path: '/publications', label: 'Publications', shortLabel: 'Pubs', icon: BookOpen },
    ];

    const isActive = (path: string) => {
        if (path === '/' && location.pathname === '/') return true;
        if (path !== '/' && location.pathname.startsWith(path)) return true;
        return false;
    };

    const activeStyles = 'bg-accent';
    const inactiveStyles = 'text-secondary hover-bg-soft';

    return (
        <header className="border-b border-default bg-surface sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
                <div className="flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-3">
                        <Link to="/" className="flex flex-col min-w-0">
                            <h1 className="text-primary truncate">Ashu Adhikari</h1>
                            <p className="text-sm text-muted truncate">
                                HCI Researcher & Software Developer
                            </p>
                        </Link>

                        <div className="flex items-center justify-end gap-2 flex-wrap">
                            <button
                                type="button"
                                onClick={toggleMode}
                                className="inline-flex items-center justify-center text-secondary hover-text-accent transition-colors p-1"
                                aria-label={
                                    mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
                                }
                                title={mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                            >
                                {mode === 'light' ? (
                                    <Moon className="w-4 h-4" />
                                ) : (
                                    <Sun className="w-4 h-4" />
                                )}
                            </button>
                            <div className="inline-flex items-center gap-1.5" aria-label="Accent color">
                                {accentOptions.map((option) => (
                                    <button
                                        key={option.key}
                                        type="button"
                                        onClick={() => setAccent(option.key)}
                                        aria-label={`Use ${option.label} accent`}
                                        title={option.label}
                                        className={`h-5 w-5 rounded-full ${option.swatchClass} transition-transform hover:scale-110 ${
                                            accent === option.key
                                                ? `ring-2 ring-offset-2 ring-offset-[var(--bg-surface)] ${option.activeRingClass}`
                                                : 'ring-1 ring-[var(--border-color)]'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <nav className="w-full overflow-x-auto no-scrollbar pb-1">
                        <div className="ml-auto flex w-max items-center gap-2 whitespace-nowrap">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`shrink-0 flex items-center gap-2 px-2.5 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                                        isActive(item.path) ? activeStyles : inactiveStyles
                                    }`}
                                >
                                    <item.icon className="hidden sm:block w-4 h-4" />
                                    <span className="whitespace-nowrap max-[400px]:hidden">{item.label}</span>
                                    <span className="hidden whitespace-nowrap max-[400px]:inline">
                                        {item.shortLabel}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
