import { PortfoilioComponent } from './components/portfoilio/portfoilio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
      { path: '', pathMatch: 'full', redirectTo: 'welcome' },
      { path: 'welcome', component: PortfoilioComponent },
      { path: '**', redirectTo: '/welcome' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
