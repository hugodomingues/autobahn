import { Injectable } from '@angular/core';
import axios from 'axios';
import { RoadWorks } from '../interfaces/road-works';
import { Webcam } from '../interfaces/webcam';
import { ParkingLorry } from '../interfaces/parking-lorry';
import { Warning } from '../interfaces/warning';
import { Closure } from '../interfaces/closure';
import { ElectricStations } from '../interfaces/electric-stations';

@Injectable({
  providedIn: 'root',
})
export class RoadsService {
  baseUrl = 'https://verkehr.autobahn.de/o/autobahn/';
  axiosInstance = axios.create({ baseURL: this.baseUrl });
  constructor() {}

  async getAllRoads(): Promise<string[]> {
    const data = await this.axiosInstance.get('');
    return data.data.roads ?? [];
  }

  async getRoadServices(roadId: string): Promise<RoadWorks[]> {
    const response = await this.axiosInstance.get(
      `/${roadId}/services/roadworks`
    );

    return response.data.roadworks;
  }

  async getRoadCameras(roadId: string): Promise<Webcam[]> {
    const response = await this.axiosInstance.get(`/${roadId}/services/webcam`);

    return response.data.webcam;
  }

  async getParkingLorry(roadId: string): Promise<ParkingLorry[]> {
    const response = await this.axiosInstance.get(
      `/${roadId}/services/parking_lorry`
    );

    return response.data.parking_lorry;
  }

  async getRoadWarnings(roadId: string): Promise<Warning[]> {
    const response = await this.axiosInstance.get(
      `/${roadId}/services/warning`
    );

    return response.data.warning;
  }
  async getRoadClosures(roadId: string): Promise<Closure[]> {
    const response = await this.axiosInstance.get(
      `/${roadId}/services/closures`
    );

    return response.data.closures;
  }

  async getElectricStations(roadId: string): Promise<ElectricStations[]> {
    const response = await this.axiosInstance.get(
      `/${roadId}/services/electric_charging_station`
    );

    return response.data.electric_charging_station;
  }
}
