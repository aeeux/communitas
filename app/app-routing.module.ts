import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AdminComponent } from './views/admin/admin/admin.component';
import { AdminpageComponent } from './views/adminpage/adminpage.component';
import { CreateuserComponent } from './views/createUser/createUser.component';
import { ReadComponent } from './views/read/read.component';
import {UpdateComponent} from './views/update/update.component';
// Import the authentication guard
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'adminpage',
    component: AdminpageComponent,
     // Protect a route by registering the auth guard in the `canActivate` hook
     canActivate: [AuthGuard],
  },
  {
    path: 'read',
    component: ReadComponent,
  },
  {
    path: 'update',
    component: UpdateComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
