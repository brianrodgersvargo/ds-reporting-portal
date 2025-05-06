import { Component } from '@angular/core';
import { ReportListComponent } from '../report-list/report-list.component';
import { ReportComponent } from '../report/report.component';

@Component({
    selector: 'app-home',
    imports: [ReportListComponent, ReportComponent],
    templateUrl: './home.component.html',
    standalone: true,
    styleUrl: './home.component.css',
})
export class HomeComponent {

}