import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntoComponent } from './into/into.component';

const routes: Routes = [
  {path:'',component:IntoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
