import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../lib/utils';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  
  return (
    <div 
      className={cn(
        "min-h-screen transition-colors duration-300",
        theme === 'dark' ? 'bg-slate-700 text-slate-100' : 'bg-slate-50 text-slate-900'
      )}
    >
      <Header />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;