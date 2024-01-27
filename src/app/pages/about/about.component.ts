import { Component, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {

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
