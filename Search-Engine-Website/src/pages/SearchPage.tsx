import React from 'react';
import SearchBox from '../components/SearchBox';
import SearchResults from '../components/SearchResults';
import { useSearchStore } from '../store/searchStore';

const SearchPage: React.FC = () => {
  const { isSearching } = useSearchStore();
  
  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto mt-10">
      <div className="w-full max-w-2xl mb-8 mt-16">
      <h1 className="text-3xl md:text-6xl font-bold text-center mb-12">
        <span className="text-blue-600">S</span>
        <span className="text-red-600">e</span>
        <span className="text-yellow-400">a</span>
        <span className="text-blue-500">r</span>
        <span className="text-green-400">c</span>
        <span className="text-red-700">h</span>
      </h1>
        <SearchBox />
      </div>
      
      {isSearching && <SearchResults />}
    </div>
  );
};

export default SearchPage;