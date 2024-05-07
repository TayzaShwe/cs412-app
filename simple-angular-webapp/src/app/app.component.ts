import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: any[] = [];
  dataAvailable: boolean = false;

  constructor(private apiService: ApiService) {}

  fetchData() {
    this.apiService.getData().subscribe((data: any) => {
      this.items = data.items; // Assuming your API response has an "items" array
      this.dataAvailable = true;
    });
  }
}