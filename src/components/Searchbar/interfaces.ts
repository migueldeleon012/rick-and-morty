export interface ISearchbar {
  searchInput: string;
  setSearchInput: (value: string) => void;
  setCurrentPage: (value: number) => void;
  setMaxPageLimit: (value: number) => void;
  setMinPageLimit: (value: number) => void;
}
