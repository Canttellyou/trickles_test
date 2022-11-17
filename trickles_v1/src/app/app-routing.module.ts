import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModalOneComponent } from './components/modals/registration/modal-one/modal-one.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: ModalOneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
