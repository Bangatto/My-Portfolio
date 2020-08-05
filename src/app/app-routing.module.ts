import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: ProfileComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
