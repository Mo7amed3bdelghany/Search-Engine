import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from '../context/ThemeContext';
import { useSearchStore } from '../store/searchStore';
import AlgorithmToggle from './AlgorithmToggle';

const SearchBox: React.FC = () => {
  const { theme } = useTheme();
  const { setQuery, performSearch, algorithm } = useSearchStore();
  const [inputValue, setInputValue] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setQuery(inputValue);
      performSearch(inputValue);
    }
  };
  
  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="mb-4">
        <div className={cn(
          "flex items-center relative rounded-full overflow-hidden transition-all duration-300 shadow-lg",
          theme === 'dark' 
            ? 'bg-gray-800 shadow-slate-700/30' 
            : 'bg-white shadow-slate-400/80'
        )}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your search query..."
            className={cn(
              "w-full py-3 px-6 outline-none transition-colors duration-300",
              theme === 'dark' 
                ? 'bg-slate-800 text-white placeholder:text-slate-400' 
                : 'bg-white text-slate-900 placeholder:text-slate-400'
            )}
            aria-label="Search query"
          />
          <button
            type="submit"
            className={cn(
              "absolute right-1 rounded-full p-2 m-1 transition-all duration-300",
              "bg-blue-500 text-white hover:bg-blue-600",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
              theme === 'dark' ? 'focus:ring-offset-slate-800' : 'focus:ring-offset-white'
            )}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </form>
      <AlgorithmToggle />
    </div>
  );
};

export default SearchBox;