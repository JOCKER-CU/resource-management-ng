import { Routes } from '@angular/router';
import { ResourcesComponent } from './resources/resources.component';
import { BookResourceComponent } from './book-resource/book-resource.component';
import { TrackUsageComponent } from './track-usage/track-usage.component';
import { GenerateReportComponent } from './generate-report/generate-report.component';


export const routes: Routes = [
    { path: '', redirectTo: 'resources', pathMatch: 'full' },
    { path: 'resources', component: ResourcesComponent },
    { path: 'book', component: BookResourceComponent },
    { path: 'track-usage', component: TrackUsageComponent },
    { path: 'generate-report', component: GenerateReportComponent },
];
