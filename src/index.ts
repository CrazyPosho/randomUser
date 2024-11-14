export interface Name {
  first: string;
  last: string;
}

export interface Location {
  country: string;
}

export interface User {
  name: Name;
  cell: string;
  email: string;
  gender: string;
  location: Location;
}

export interface ApiResponse {
  results: User[];
}
