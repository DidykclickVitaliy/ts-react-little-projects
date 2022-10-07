export type FiltersParams = {
  category: string;
  search: string;
  currentPage: number;
};

export interface FilterState {
  categoryIndex: number;
  searchValue: string;
}
