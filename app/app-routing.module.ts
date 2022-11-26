import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AdminpageComponent } from './views/adminpage/adminpage.component';
import { ReadComponent } from './views/read/read.component';
import { UpdateComponent } from './views/update/update.component';
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
  },
  {
    path: 'create/:id',
    component: CreateComponent,
  },
  {
    path: 'read',
    component: ReadComponent,
  },
  {
    path: 'read/:id',
    component: ReadComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
