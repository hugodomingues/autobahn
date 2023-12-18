export interface Coordinate {
  lat: string;
  long: string;
}

export interface DetailsInfo {
  title: string;
  subtitle: string;
  description: string[];
  identifier: string;
  coordinate: Coordinate;
  imageUrl?: string;
}
