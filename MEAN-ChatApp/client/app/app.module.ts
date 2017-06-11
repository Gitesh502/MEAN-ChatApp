import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent }   from './app.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
import {routing} from './app.routing';
import { AppConfig } from './app.config';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { UserComponent } from './user/index';
import {OnlineUsersComponent} from './shared/onlineusers/index';
//import { DashboardModule } from './dashboard/dashboard.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
    imports:      [
        BrowserModule,
       // DashboardModule,
        SidebarModule,
        NavbarModule,
        FormsModule,
        FooterModule,
         HttpModule,
        routing,
        RouterModule.forRoot([])
    ],
    declarations: [ 
        AppComponent, 
       // DashboardComponent,
         AlertComponent,
         HomeComponent,
         UserComponent,
        LoginComponent,
        RegisterComponent,
        OnlineUsersComponent
         ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        AppConfig,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService
        ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
