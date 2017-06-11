"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
//import { DashboardComponent } from './dashboard/dashboard.component';
var app_routing_1 = require('./app.routing');
var app_config_1 = require('./app.config');
var index_1 = require('./_directives/index');
var index_2 = require('./_guards/index');
var index_3 = require('./_services/index');
var index_4 = require('./home/index');
var index_5 = require('./login/index');
var index_6 = require('./register/index');
var index_7 = require('./user/index');
var index_8 = require('./shared/onlineusers/index');
//import { DashboardModule } from './dashboard/dashboard.module';
var sidebar_module_1 = require('./sidebar/sidebar.module');
var footer_module_1 = require('./shared/footer/footer.module');
var navbar_module_1 = require('./shared/navbar/navbar.module');
var common_1 = require('@angular/common');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                // DashboardModule,
                sidebar_module_1.SidebarModule,
                navbar_module_1.NavbarModule,
                forms_1.FormsModule,
                footer_module_1.FooterModule,
                http_1.HttpModule,
                app_routing_1.routing,
                router_1.RouterModule.forRoot([])
            ],
            declarations: [
                app_component_1.AppComponent,
                // DashboardComponent,
                index_1.AlertComponent,
                index_4.HomeComponent,
                index_7.UserComponent,
                index_5.LoginComponent,
                index_6.RegisterComponent,
                index_8.OnlineUsersComponent
            ],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                app_config_1.AppConfig,
                index_2.AuthGuard,
                index_3.AlertService,
                index_3.AuthenticationService,
                index_3.UserService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map