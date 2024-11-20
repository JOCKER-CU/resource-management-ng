import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResourceService } from '../service/resource.service';

@Component({
  selector: 'app-book-resource',
  templateUrl: './book-resource.component.html',
  styleUrls: ['./book-resource.component.scss']
})
export class BookResourceComponent implements OnInit {
  bookingForm: FormGroup;
  resources: any[] = [];

  constructor(private fb: FormBuilder, private resourceService: ResourceService) {
    this.bookingForm = this.fb.group({
      resource: [''],
      date: [''],
      duration: ['']
    });
  }

  ngOnInit(): void {
    this.getResources();
  }

  getResources(): void {
    this.resourceService.getResources().subscribe(data => {
      this.resources = data;
    });
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      this.resourceService.bookResource(this.bookingForm.value).subscribe(response => {
        alert('Resource booked successfully!');
      });
    }
  }
}
