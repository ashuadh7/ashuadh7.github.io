import { Link, useLocation } from 'react-router-dom';
import { Layers, User, BookOpen, LandPlot } from 'lucide-react';

export function Navigation() {
    const location = useLocation();

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
    const activeStyles = 'bg-purple-600 text-white';
    const inactiveStyles = 'text-gray-700 hover:bg-gray-100';

    return (
        <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex flex-col">
                        <h1 className="text-gray-900">Ashu Adhikari</h1>
                        <p className="text-sm text-gray-600">HCI Researcher & Software Developer</p>
                    </Link>

                    <nav className="flex gap-2">
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
                </div>
            </div>
        </header>
    );
}