import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResourceService } from '../service/resource.service';


@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.scss']
})
export class GenerateReportComponent implements OnInit {
  reportForm: FormGroup;
  reportData: any[] = [];

  constructor(private fb: FormBuilder, private resourceService: ResourceService) {
    this.reportForm = this.fb.group({
      startDate: [''],
      endDate: ['']
    });
  }

  ngOnInit(): void { }

  generateReport(): void {
    if (this.reportForm.valid) {
      const { startDate, endDate } = this.reportForm.value;
      this.resourceService.getResourceUsageReport(startDate, endDate).subscribe(data => {
        this.reportData = data;
      });
    }
  }
}
