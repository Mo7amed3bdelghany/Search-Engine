import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useSearchStore } from '../store/searchStore';
import { cn } from '../lib/utils';
import { useSearchResults } from '../hooks/useSearchResults';

const SearchResults: React.FC = () => {
  const { theme } = useTheme();
  const { query, algorithm } = useSearchStore();
  const { data, isLoading, isError } = useSearchResults(query, algorithm);
  
  if (isLoading) {
    return (
      <div className="w-full mt-8 flex justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  if (isError) {
    return (
      <div className={cn(
        "w-full mt-8 p-4 rounded-lg",
        theme === 'dark' ? 'bg-red-900/20 text-red-200' : 'bg-red-50 text-red-600'
      )}>
        <p>An error occurred while fetching search results. Please try again.</p>
      </div>
    );
  }
  
  if (!data || data.length === 0) {
    return (
      <div className={cn(
        "w-full mt-8 p-6 rounded-lg text-center",
        theme === 'dark' ? 'bg-slate-800' : 'bg-slate-400'
      )}>
        <p className="text-lg">No results found for "{query}"</p>
        <p className="mt-2 text-sm text-slate-500">Try different keywords or search algorithm</p>
      </div>
    );
  }
  
  return (
    <div className="w-full mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Search Results for "{query}" 
        <span className="text-blue-500 ml-2">
          using {algorithm === 'invertedIndex' ? 'Inverted Index' : 'PageRank'}
        </span>
      </h2>
      
      <div className="space-y-4">
        {data.map((result, index) => (
          <div 
            key={index}
            className={cn(
              "p-4 rounded-lg transition-all duration-300 hover:shadow-md",
              theme === 'dark' 
                ? 'bg-slate-800 hover:bg-slate-900' 
                : 'bg-slate-200 hover:bg-slate-100 shadow-sm'
            )}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "text-xs px-2 py-0.5 rounded-full font-medium",
                    theme === 'dark' ? 'bg-slate-700' : 'bg-slate-300'
                  )}>
                    
                  </span>
                  
                </div>
                <h3 className="text-lg font-medium mt-5 ml-4">
                  <a 
                    href={result.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title={result.url}
                    className="text-blue-900 hover:text-blue-600 transition-colors duration-300 flex items-center gap-1"
                  >
                    <span className="hidden sm:inline">
                      {result.url.length > 75 ? `${result.url.slice(0, 75)}...` : result.url}
                    </span>

                    <span className="inline sm:hidden">
                      {result.url.slice(0, 25)+ '...'}
                    </span>

                    <ExternalLink className="h-4 w-4" />
                  </a>
                </h3>


              </div>
              <div className={cn(
                "text-sm px-3 py-1 rounded-md",
                theme === 'dark' ? 'bg-blue-700/30 text-blue-300' : 'bg-blue-50 text-blue-700'
              )}>
                {algorithm === 'invertedIndex' ? `${result.wordCount} words` : `Rank: ${result.wordCount.toFixed(4)}`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;