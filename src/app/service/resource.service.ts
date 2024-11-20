import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private apiUrl = 'http://api.example.com/resources';

  constructor(private http: HttpClient) { }

  getResources(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  bookResource(booking: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/book`, booking);
  }

  getBookings(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/bookings`);
  }

  deleteResource(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getResourceUsageReport(startDate: string, endDate: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/report?start=${startDate}&end=${endDate}`);
  }
}
