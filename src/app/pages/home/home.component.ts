import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit(): void {
    AOS.init();
  }

  // Example method to demonstrate refreshing AOS
  // Call this method if you dynamically load or change content
  someContentLoadingMethod() {
    // Assume this method loads or changes content dynamically
    // ...

    // After the content is loaded/changed
    AOS.refresh();
  }
}
