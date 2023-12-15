import { Coordinate } from './common';

export interface ElectricStations {
  extent: string;
  identifier: string;
  routeRecommendation: any[];
  coordinate: Coordinate;
  footer: any[];
  icon: string;
  isBlocked: string;
  description: string[];
  title: string;
  point: string;
  display_type: string;
  lorryParkingFeatureIcons: any[];
  future: boolean;
  subtitle: string;
}