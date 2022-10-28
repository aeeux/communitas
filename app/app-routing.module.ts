import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//views
import { HomeComponent } from './views/home/home.component';
import { MemberComponent } from './views/member/member.component';
import { PostsComponent } from './views/posts/posts.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'member', component: MemberComponent },
  { path: 'home/:id', component: PostsComponent , pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
