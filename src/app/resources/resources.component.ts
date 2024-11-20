import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../service/resource.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'type', 'actions'];
  resources: any[] = [];

  constructor(private resourceService: ResourceService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getResources();
  }

  getResources(): void {
    this.resourceService.getResources().subscribe(data => {
      this.resources = data;
    });
  }

  openAddResourceDialog(): void {
    const dialogRef = this.dialog.open(AddResourceDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getResources();
      }
    });
  }

  editResource(resource: any): void {
    // Logic to open the edit dialog and edit resource
  }

  deleteResource(id: number): void {
    this.resourceService.deleteResource(id).subscribe(() => {
      this.getResources();
    });
  }
}
