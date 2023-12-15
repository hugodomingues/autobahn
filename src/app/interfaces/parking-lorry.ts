import { Coordinate } from './common';

export interface ParkingLorry {
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
  lorryParkingFeatureIcons: LorryParkingFeatureIcon[];
  future: boolean;
  subtitle: string;
}

interface LorryParkingFeatureIcon {
  icon: string;
  description: string;
  style: string;
}
