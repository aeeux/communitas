import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//views
import { HomeComponent } from './views/home/home.component';
import { MemberComponent } from './views/member/member.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'member', component: MemberComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
