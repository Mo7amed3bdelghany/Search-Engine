import React from 'react';
import { Network, ListFilter } from 'lucide-react';
import { useSearchStore } from '../store/searchStore';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../lib/utils';

const AlgorithmToggle: React.FC = () => {
  const { algorithm, setAlgorithm, performSearch, query } = useSearchStore();
  const { theme } = useTheme();
  
  const handleAlgorithmChange = (algo: 'invertedIndex' | 'pageRank') => {
    setAlgorithm(algo);
    if (query) {
      performSearch(query);
    }
  };
  
  return (
    <div className="flex justify-center items-center gap-4 mb-4">
      <div className={cn(
        "p-1 rounded-lg flex gap-1 transition-colors duration-300",
        theme === 'dark' ? 'bg-slate-800' : 'bg-slate-300'
      )}>
        <button
          onClick={() => handleAlgorithmChange('invertedIndex')}
          className={cn(
            "flex items-center gap-1 py-1 px-3 rounded-md text-sm transition-all duration-300",
            algorithm === 'invertedIndex' 
              ? theme === 'dark'
                ? 'bg-slate-700 text-blue-400'
                : 'bg-white text-blue-600 shadow-sm'
              : 'hover:bg-opacity-50'
          )}
        >
          <ListFilter className="h-4 w-4" />
          <span>Inverted Index</span>
        </button>
        <button
          onClick={() => handleAlgorithmChange('pageRank')}
          className={cn(
            "flex items-center gap-1 py-1 px-3 rounded-md text-sm transition-all duration-300",
            algorithm === 'pageRank' 
              ? theme === 'dark'
                ? 'bg-slate-700 text-blue-400'
                : 'bg-white text-blue-600 shadow-sm'
              : 'hover:bg-opacity-50'
          )}
        >
          <Network className="h-4 w-4" />
          <span>PageRank</span>
        </button>
      </div>
    </div>
  );
};

export default AlgorithmToggle;