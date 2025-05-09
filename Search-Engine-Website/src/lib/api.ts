import axios from 'axios';
import { SearchResult } from '../types/result';

export const fetchSearchResults = async (
  query: string,
  algorithm: 'invertedIndex' | 'pageRank'
): Promise<SearchResult[]> => {
  try {
    const response = await axios.get<SearchResult[]>('http://localhost:5000/api/Search', {
      params: { query, algorithm },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw error;
  }
};
