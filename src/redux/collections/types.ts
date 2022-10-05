export type PhotoCollection = {
  category: number;
  name: string;
  photos: string[];
};

export interface PhotoCollectionsState {
  items: PhotoCollection[];
}
