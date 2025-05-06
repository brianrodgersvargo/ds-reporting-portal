import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


// move this
interface Report {
  id: number;
  sponsorName: string;
  reportTitle: string;
  summary: string;
}

@Component({
    selector: 'app-report-list',
    imports: [CommonModule],
    templateUrl: './report-list.component.html',
    styleUrl: './report-list.component.css'
})

export class ReportListComponent implements OnInit {

  public reports: Report[] = [];
  private reportsUrl = '/mock-reports.json'; // Path to JSON mock reports file
  private sidebarIsOpen = true


  // Inject HttpClient in the constructor
  constructor(private http: HttpClient) { }

  // Fetch data when the component initializes
  ngOnInit(): void {
    this.http.get<Report[]>(this.reportsUrl).subscribe(data => {
      this.reports = data; // Assign fetched data to the reports property
    });
  }

  // function to toggle sidebar view
  toggleSidebar = () => {

    //open the sidebar...
    if(this.sidebarIsOpen === false) {
      // add animation classes
      document.getElementById('hamburgerIconLine1')?.classList.remove('hamburgerIconLine1')
      document.getElementById('hamburgerIconLine1')?.classList.add('animateHamburgerIconLine1')
      document.getElementById('hamburgerIconLine2')?.classList.remove('hamburgerIconLine2')
      document.getElementById('hamburgerIconLine2')?.classList.add('animateHamburgerIconLine2')
      document.getElementById('hamburgerIconLine3')?.classList.remove('hamburgerIconLine3')
      document.getElementById('hamburgerIconLine3')?.classList.add('animateHamburgerIconLine3')
      this.sidebarIsOpen = true
      document.getElementById('sidebar')?.classList.remove('hidden')
      document.getElementById('sidebar')?.classList.add('visible')
      
      document.getElementById('sidebarToggler')?.classList.remove('sidebarTogglerOpen')
      
    }

    //close the sidebar...
    else if(this.sidebarIsOpen === true) {
      // add animation classes
      document.getElementById('hamburgerIconLine1')?.classList.remove('animateHamburgerIconLine1')
      document.getElementById('hamburgerIconLine1')?.classList.add('hamburgerIconLine1')
      
      document.getElementById('hamburgerIconLine2')?.classList.remove('animateHamburgerIconLine2')
      document.getElementById('hamburgerIconLine2')?.classList.add('hamburgerIconLine2')

      document.getElementById('hamburgerIconLine3')?.classList.remove('animateHamburgerIconLine3')
      document.getElementById('hamburgerIconLine3')?.classList.add('hamburgerIconLine3')
      this.sidebarIsOpen = false
      document.getElementById('sidebar')?.classList.remove('visible')
      document.getElementById('sidebar')?.classList.add('hidden')

      document.getElementById('sidebarToggler')?.classList.add('sidebarTogglerOpen')
    }
  }
}

