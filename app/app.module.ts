import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './views/content/content.component';
import { FooterComponent } from './views/footer/footer.component';
import { HeroComponent } from './views/hero/hero.component';
import { HomeComponent } from './views/home/home.component';
import { IntroComponent } from './views/intro/intro.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api/ApiService';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminpageComponent } from './views/adminpage/adminpage.component';
import { ReadComponent } from './views/read/read.component';
import { UpdateComponent } from './views/update/update.component';
import { CreateComponent } from './views/create/create.component';
// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    HeroComponent,
    HomeComponent,
    IntroComponent,
    AdminpageComponent,
    ReadComponent,
    UpdateComponent,
    CreateComponent,
  ],
  providers: [
    ApiService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-8ywcl6gfku8jyt8i.us.auth0.com',
      clientId: 'D12NTCfFxOPcYvSNKfrg0kRcf7OD1cpC',
    }),
  ],
})
export class AppModule {}
