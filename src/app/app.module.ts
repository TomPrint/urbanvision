import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CookiePopupComponent } from './shared/cookie-popup/cookie-popup.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { CctvComponent } from './pages/cctv/cctv.component';
import { AccessComponent } from './pages/access/access.component';
import { AlarmComponent } from './pages/alarm/alarm.component';
import { OtherComponent } from './pages/other/other.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CookiePopupComponent,
    TermsConditionsComponent,
    NavbarComponent,
    CarouselComponent,
    CctvComponent,
    AccessComponent,
    AlarmComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
