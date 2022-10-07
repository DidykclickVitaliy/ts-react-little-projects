export type PhotoCollection = {
  category: number;
  name: string;
  photos: string[];
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  REJECT = "reject",
}

export interface PhotoCollectionsState {
  items: PhotoCollection[];
  page: number;
  status: Status;
}
