import { create } from 'zustand';

type SearchAlgorithm = 'invertedIndex' | 'pageRank';

interface SearchState {
  query: string;
  algorithm: SearchAlgorithm;
  isSearching: boolean;
  setQuery: (query: string) => void;
  setAlgorithm: (algorithm: SearchAlgorithm) => void;
  performSearch: (query: string) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  query: '',
  algorithm: 'invertedIndex',
  isSearching: false,
  
  setQuery: (query: string) => set({ query }),
  
  setAlgorithm: (algorithm: SearchAlgorithm) => set({ algorithm }),
  
  performSearch: (query: string) => set({ 
    query, 
    isSearching: true 
  }),
}));