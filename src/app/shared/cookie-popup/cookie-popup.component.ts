import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-popup',
  templateUrl: './cookie-popup.component.html',
  styleUrls: ['./cookie-popup.component.css']
})
export class CookiePopupComponent implements OnInit {
  showPopup: boolean = true;

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    // Check if the cookie exists
    if (!this.cookieService.check('cookieConsent')) {
      this.showPopup = true;
    }
  }

  acceptCookies(): void {
    // Set the cookie for 1 year
    this.cookieService.set('cookieConsent', 'accepted', 365);
    this.showPopup = false;
  }

  rejectCookies(): void {
    // Set the cookie for 1 day to remember the user's choice
    this.cookieService.set('cookieConsent', 'rejected', 1);
    this.showPopup = false;
    
    // Optionally, you can delete other cookies here if they were set before the user made a choice
    // this.cookieService.delete('otherCookieName');
  }
}