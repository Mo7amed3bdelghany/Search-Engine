import { useQuery } from '@tanstack/react-query';
import { fetchSearchResults } from '../lib/api';

export const useSearchResults = (query: string, algorithm: 'invertedIndex' | 'pageRank') => {
  return useQuery({
    queryKey: ['search', query, algorithm],
    queryFn: () => fetchSearchResults(query, algorithm),
    enabled: !!query,
    staleTime: 1000 * 60 * 3,
  });
};