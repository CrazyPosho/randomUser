export interface UserData {
  results: Array<{
    name: {
      first: string;
      last: string;
    };
    picture: {
      large: string;
    };
    email: string;
  }>;
}
