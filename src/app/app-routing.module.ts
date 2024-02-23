import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { AccessComponent } from './pages/access/access.component';
import { AlarmComponent } from './pages/alarm/alarm.component';
import { CctvComponent } from './pages/cctv/cctv.component';
import { OtherComponent } from './pages/other/other.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cctv', component: CctvComponent },
  { path: 'access', component: AccessComponent },
  { path: 'alarm', component: AlarmComponent },
  { path: 'other', component: OtherComponent },

  // { path: 'about-us', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'terms-conditions', component: TermsConditionsComponent },
  { path: '**', redirectTo: '' } // This should be the last route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
