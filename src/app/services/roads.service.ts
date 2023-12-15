import { Injectable } from '@angular/core';
import { Roads } from '../interfaces/roads';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class RoadsService {
  baseUrl = 'https://verkehr.autobahn.de/o/autobahn/';
  constructor() {}

  async getAllRoads(): Promise<string[]> {
    const data = await axios.get(this.baseUrl);
    return data.data.roads ?? [];
  }
}
