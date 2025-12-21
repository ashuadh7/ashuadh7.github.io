import { Link, useLocation } from 'react-router-dom';
import { Layers, User, BookOpen } from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };
  
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex flex-col">
            <h1 className="text-gray-900">Ashu Adhikari</h1>
            <p className="text-sm text-gray-600">HCI Researcher & Software Developer</p>
          </Link>
          
          <nav className="flex gap-2">
            <Link
              to="/"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isActive('/') && location.pathname === '/'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Layers className="w-4 h-4" />
              Projects
            </Link>
            <Link
              to="/about"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isActive('/about')
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <User className="w-4 h-4" />
              About
            </Link>
            <Link
              to="/publications"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isActive('/publications')
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Publications
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
