import { Component } from '@angular/core';
import { ReportListComponent } from '../report-list/report-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReportListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}