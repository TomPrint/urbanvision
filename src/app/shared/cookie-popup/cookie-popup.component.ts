import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-popup',
  templateUrl: './cookie-popup.component.html',
  styleUrls: ['./cookie-popup.component.css']
})
export class CookiePopupComponent implements OnInit {
  showPopup: boolean | undefined;

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    // Check if the cookie exists and its value
    const cookieConsent = this.cookieService.get('cookieConsent');
    if (cookieConsent === 'accepted') {
      this.showPopup = false; // If user accepted cookies, hide the popup
    } else {
      this.showPopup = true; // Otherwise, show the popup
    }
  }

  acceptCookies(): void {
    // Set the cookie for 30 days
    this.cookieService.set('cookieConsent', 'accepted', 30);
    this.showPopup = false;
  }

  rejectCookies(): void {
    // Set the cookie for 1 day to remember the user's choice
    this.cookieService.set('cookieConsent', 'rejected', 1);
    this.showPopup = false;
  }
}
