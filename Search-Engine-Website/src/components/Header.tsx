import React from 'react';
import { Search } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import { cn } from '../lib/utils';

const Header: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <header className={cn(
      "sticky top-0 z-10 py-4 px-6 transition-colors duration-300 backdrop-blur-md",
      theme === 'dark' 
        ? 'bg-slate-700/90 text-slate-100 shadow-md shadow-slate-900/50' 
        : 'bg-white/90 text-slate-900 shadow-md shadow-slate-400/50'
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Search className="w-6 h-6 text-blue-500" />
          <h1 className="text-xl font-bold">Big Data Project</h1>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;