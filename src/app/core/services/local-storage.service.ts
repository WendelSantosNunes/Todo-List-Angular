import { Injectable } from '@angular/core';
import { task } from 'src/app/shared/models/task';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getItem(key: string): task[] | null {
    const serializedData = localStorage.getItem(key);
    if (serializedData) {
      try {
        return JSON.parse(serializedData);
      } catch (error) {
        console.error(`Error retrieving data for key ${key}: ${error}`);
      }
    }
    return null;
  }

  setItem(key: string, data: task[]): void {
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
    } catch (error) {
      console.error(`Error storing data for key ${key}: ${error}`);
    }
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
