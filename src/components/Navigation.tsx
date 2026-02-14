import { Link, useLocation } from 'react-router-dom';
import { Layers, User, BookOpen, LandPlot } from 'lucide-react';
import { useTheme } from '@/theme/ThemeProvider';

export function Navigation() {
    const location = useLocation();
    const { mode, accent, toggleMode, setAccent } = useTheme();

    const navItems = [
        { path: '/', label: 'Projects', icon: Layers },
        { path: '/playground', label: 'Playground', icon: LandPlot },
        { path: '/about', label: 'About', icon: User },
        { path: '/publications', label: 'Publications', icon: BookOpen },
    ];

    const isActive = (path: string) => {
        if (path === '/' && location.pathname === '/') return true;
        if (path !== '/' && location.pathname.startsWith(path)) return true;
        return false;
    };

    const baseStyles = 'flex items-center gap-2 px-4 py-2 rounded-lg transition-colors';
    const activeStyles = 'bg-accent';
    const inactiveStyles = 'text-secondary hover-bg-soft';

    return (
        <header className="border-b border-default bg-surface sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <Link to="/" className="flex flex-col">
                        <h1 className="text-primary">Ashu Adhikari</h1>
                        <p className="text-sm text-muted">HCI Researcher & Software Developer</p>
                    </Link>

                    <nav className="flex flex-wrap gap-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`${baseStyles} ${
                                    isActive(item.path) ? activeStyles : inactiveStyles
                                }`}
                            >
                                <item.icon className="w-4 h-4" />
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={toggleMode}
                            className="px-3 py-2 rounded-lg border border-default bg-surface text-secondary hover-text-accent transition-colors text-sm"
                        >
                            {mode === 'light' ? 'Dark' : 'Light'}
                        </button>
                        <select
                            value={accent}
                            onChange={(e) =>
                                setAccent(e.target.value as 'violet' | 'indigo' | 'emerald' | 'rose')
                            }
                            className="px-3 py-2 rounded-lg border border-default bg-surface text-secondary text-sm"
                            aria-label="Accent color"
                        >
                            <option value="violet">Violet</option>
                            <option value="indigo">Indigo</option>
                            <option value="emerald">Emerald</option>
                            <option value="rose">Rose</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    );
}
