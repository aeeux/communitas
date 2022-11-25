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
import { AdminComponent } from './views/admin/admin/admin.component';
import { AdminpageComponent } from './views/adminpage/adminpage.component';
import { CreateuserComponent } from './views/createUser/createUser.component';

@NgModule({
    declarations: [
        AppComponent,
        ContentComponent,
        FooterComponent,
        HeroComponent,
        HomeComponent,
        IntroComponent,
        AdminComponent,
        AdminpageComponent,
        CreateuserComponent
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
        ReactiveFormsModule
    ]
})
export class AppModule {}
