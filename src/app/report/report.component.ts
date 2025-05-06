import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {

}
