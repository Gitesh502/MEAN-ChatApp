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
var common_1 = require('@angular/common');
var oauth_component_1 = require('./oauth.component');
var auth_service_1 = require('./auth.service');
var interceptor_1 = require('./interceptor');
var ng2_interceptors_1 = require('ng2-interceptors');
var http_1 = require('@angular/http');
function interceptorFactory(xhrBackend, requestOptions, serverURLInterceptor) {
    var service = new ng2_interceptors_1.InterceptorService(xhrBackend, requestOptions);
    service.addInterceptor(serverURLInterceptor); // Add it here
    return service;
}
exports.interceptorFactory = interceptorFactory;
var CuppaOAuthModule = (function () {
    function CuppaOAuthModule() {
    }
    CuppaOAuthModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [oauth_component_1.cuppaOAuth],
            exports: [oauth_component_1.cuppaOAuth],
            providers: [
                auth_service_1.AuthService,
                interceptor_1.ServerURLInterceptor,
                {
                    provide: ng2_interceptors_1.InterceptorService,
                    useFactory: interceptorFactory,
                    deps: [http_1.XHRBackend, http_1.RequestOptions, interceptor_1.ServerURLInterceptor] }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CuppaOAuthModule);
    return CuppaOAuthModule;
}());
exports.CuppaOAuthModule = CuppaOAuthModule;
//# sourceMappingURL=cuppaOAuth.module.js.map