import { PortfoilioComponent } from './components/portfoilio/portfoilio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
      { path: '', pathMatch: 'full', redirectTo: '' },
      { path: '', component: PortfoilioComponent },
      { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
