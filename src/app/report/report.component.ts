import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js'; // Import ChartOptions and ChartType
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-report',
    imports: [BaseChartDirective],
    templateUrl: './report.component.html',
    standalone: true,
    styleUrl: './report.component.css'
})
export class ReportComponent {
  // Define the type for the bar chart
  public barChartType: ChartType = 'bar';

  // Define chart options
  public barChartOptions: ChartOptions = {
    responsive: true, // Makes the chart responsive
    // You can add other options here, like scales, plugins, etc.
    // For example, to ensure bars are not too wide if there's little data:
    // scales: {
    //   x: {
    //     stacked: false, // if you don't want stacked bars
    //   },
    //   y: {
    //     stacked: false,
    //     beginAtZero: true // Start y-axis at 0
    //   }
    // }
  };

  // Define chart labels (categories for the x-axis)
  public barChartLabels: string[] = ['Category 1', 'Category 2', 'Category 3'];

  // Define chart data
  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels, // Assign labels to the chart
    datasets: [
      {
        data: [65, 59, 80], // Your data points corresponding to labels
        label: 'Series A', // Label for this dataset
        // You can add styling for this dataset here:
        // backgroundColor: 'rgba(255,0,0,0.3)',
        // borderColor: 'red',
        // borderWidth: 1
      },
      // You can add more datasets if needed
      // {
      //   data: [28, 48, 40],
      //   label: 'Series B',
      //   backgroundColor: 'rgba(0,255,0,0.3)',
      //   borderColor: 'green',
      //   borderWidth: 1
      // }
    ]
  };

  // If your data points were [{x: 10, y: 20}, {x: 15, y: null}, {x: 20, y: 10}]
  // and you want to represent these as bars where 'x' is a category label
  // and 'y' is the value, you would transform it like this:
  //
  // public barChartLabels: string[] = ['10', '15', '20']; // Assuming x values are categories
  // public barChartData: ChartData<'bar'> = {
  //   labels: this.barChartLabels,
  //   datasets: [
  //     {
  //       data: [20, null, 10], // y values, with null for missing data
  //       label: 'My Data Series'
  //     }
  //   ]
  // };

  constructor() { }
}

