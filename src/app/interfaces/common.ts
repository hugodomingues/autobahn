export interface Coordinate {
  lat: number;
  long: number;
}

export interface DetailsInfo {
  title: string;
  subtitle: string;
  description: string[];
  identifier: string;
  coordinate: Coordinate;
  imageUrl?: string;
}
