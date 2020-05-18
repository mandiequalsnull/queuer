import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from '../app/components/clients/clients.component';
import { ContactFormComponent } from '../app/components/contact-form/contact-form.component';

const routes: Routes = [
  {path:'clients', component: ClientsComponent},
  {path: '', component: ContactFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ClientsComponent, ContactFormComponent]
