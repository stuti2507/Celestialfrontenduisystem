import { Link, useLocation } from 'react-router';
import { Search, BookOpen, BarChart3, MessageSquare, FileText, Library, Menu, BookMarked } from 'lucide-react';
import { useState } from 'react';
import logoImage from '../../assets/1b1ce5c7070d39fb4bacc54354bc4495ea8f967a.png';

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: BookOpen },
    { path: '/explorer', label: 'Signal Explorer', icon: BarChart3 },
    { path: '/evidence', label: 'Evidence', icon: Search },
    { path: '/debate', label: 'Debate Room', icon: MessageSquare },
    { path: '/think-tank', label: 'Think Tank', icon: FileText },
    { path: '/glossary', label: 'Glossary', icon: BookMarked },
    { path: '/library', label: 'Library', icon: Library },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="ESTRA - Evidence Synthesis & Translation for Real-World Action" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#A8D5E2]/20 text-[#2C7A8C]'
                      : 'text-muted-foreground hover:bg-white/60 hover:text-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/60"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#A8D5E2]/20 text-[#2C7A8C]'
                      : 'text-muted-foreground hover:bg-white/60 hover:text-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}