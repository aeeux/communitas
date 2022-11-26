import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AdminpageComponent } from './views/adminpage/adminpage.component';
import { ReadComponent } from './views/read/read.component';
import { CreateComponent } from './views/create/create.component';
// Import the authentication guard
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'adminpage',
    component: AdminpageComponent,
    // Protect a route by registering the auth guard in the `canActivate` hook
    canActivate: [AuthGuard],
  },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update/:id',
    component: CreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'read',
    component: ReadComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'read/:id',
    component: ReadComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
