export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  REJECTED = "rejected",
}

export type UserType = {
  id: number;
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
};

export interface UserSliceState {
  users: UserType[];
  searchValue: string;
  status: Status;
}
