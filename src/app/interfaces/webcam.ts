import { Coordinate } from './common';

export interface Webcam {
  extent: string;
  identifier: string;
  routeRecommendation: any[];
  coordinate: Coordinate;
  footer: string[];
  icon: string;
  isBlocked: string;
  description: any[];
  title: string;
  operator: string;
  point: string;
  display_type: string;
  lorryParkingFeatureIcons: any[];
  future: boolean;
  imageurl: string;
  subtitle: string;
  linkurl: string;
}
