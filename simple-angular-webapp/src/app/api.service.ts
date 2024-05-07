// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class ApiService {
  private mockUrl = '/assets/mock-data.json'; // Path to mock data file

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    // Instead of making an HTTP request, read the mock data file
    return this.http.get<any>(this.mockUrl);
  }
}