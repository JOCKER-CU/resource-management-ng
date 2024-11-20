import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../service/resource.service';

@Component({
  selector: 'app-track-usage',
  templateUrl: './track-usage.component.html',
  styleUrls: ['./track-usage.component.scss']
})
export class TrackUsageComponent implements OnInit {
  displayedColumns: string[] = ['resource', 'date', 'duration', 'user'];
  bookings: any[] = [];

  constructor(private resourceService: ResourceService) { }

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings(): void {
    this.resourceService.getBookings().subscribe(data => {
      this.bookings = data;
    });
  }
}
