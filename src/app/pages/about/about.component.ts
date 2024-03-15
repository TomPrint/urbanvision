import { Component, AfterViewInit, OnDestroy, ElementRef, OnInit } from '@angular/core';
import * as AOS from 'aos';


interface CounterInfo {
  counter: any;
  property: string;
  max: number;
  interval: number; // Add an interval property
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit, OnDestroy, OnInit {
  camera_counter: number = 0;
  video_counter: number = 0;
  // cable_counter: number = 0;
  localize_counter: number = 0;

  counters: { [key: string]: CounterInfo } = {
    camera: { counter: null, property: 'camera_counter', max: 10000, interval: 5}, // Set individual interval for camera
    video: { counter: null, property: 'video_counter', max: 2000, interval: 35 }, // Set individual interval for video
    // cable: { counter: null, property: 'cable_counter', max: 30, interval: 800 }, // Set individual interval for cable
    localize: { counter: null, property: 'localize_counter', max: 700, interval: 120} // Set individual interval for localize
  };

  intersectionObserver!: IntersectionObserver;

  constructor(private elementRef: ElementRef) {}

ngOnInit(): void {
  
}


  ngAfterViewInit(): void {
    AOS.init();
    this.initializeIntersectionObserver();
  }

  ngOnDestroy(): void {
    this.clearCounters();
    this.disconnectIntersectionObserver();
  }

  initializeIntersectionObserver(): void {
    this.intersectionObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        // Element is now visible, start all counters
        this.startCounters();
        this.disconnectIntersectionObserver(); // Stop observing once visible
      }
    });

    this.intersectionObserver.observe(this.elementRef.nativeElement);
  }

  startCounters(): void {
    for (const key in this.counters) {
      if (this.counters.hasOwnProperty(key)) {
        const counterInfo = this.counters[key];
        this.startCounter(counterInfo);
      }
    }
  }

  startCounter(counterInfo: CounterInfo): void {
    counterInfo.counter = setInterval(() => {
      // Use type assertion here
      (this as any)[counterInfo.property] = (this as any)[counterInfo.property] +10;

      if ((this as any)[counterInfo.property] === counterInfo.max) {
        this.clearCounter(counterInfo.counter);
      }
    }, counterInfo.interval);
  }

  clearCounters(): void {
    for (const key in this.counters) {
      if (this.counters.hasOwnProperty(key)) {
        const counterInfo = this.counters[key];
        this.clearCounter(counterInfo.counter);
      }
    }
  }

  clearCounter(counter: any): void {
    if (counter) {
      clearInterval(counter);
    }
  }

  disconnectIntersectionObserver(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  someContentLoadingMethod(): void {
    // Assume this method loads or changes content dynamically
    // ...

    // After the content is loaded/changed
    AOS.refresh();
  }
}
