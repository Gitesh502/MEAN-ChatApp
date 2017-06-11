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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/observable/of');
require('rxjs/add/operator/do');
require('rxjs/add/operator/delay');
var ng2_interceptors_1 = require('ng2-interceptors');
var router_1 = require('@angular/router');
var AuthService = (function () {
    function AuthService(_http, router, location) {
        var _this = this;
        this._http = _http;
        this.router = router;
        this.location = location;
        this.configObj = { "authEndpoint": "", "clientId": "", "redirectURI": "" };
        var config = localStorage.getItem("authConfig");
        var provider = localStorage.getItem("provider");
        var cachedURL = localStorage.getItem('cachedurl');
        var params = new http_1.URLSearchParams(this.location.path(false).split('?')[1]);
        this.code = params.get('code');
        if (config) {
            this.configObj = JSON.parse(config)[provider];
            this.loginURI = JSON.parse(config).loginRoute;
        }
        if (provider) {
            this.loginProvider = provider;
        }
        if (cachedURL) {
            this.cachedURL = cachedURL;
        }
        if (this.code) {
            this.login(this.code, this.configObj.clientId, this.configObj.redirectURI, this.configObj.authEndpoint)
                .then(function (data) {
                _this.loading = false;
                _this.router.navigate([_this.cachedURL]);
                return true;
            });
        }
    }
    AuthService.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.verifyLogin(url);
    };
    AuthService.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthService.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        return this.verifyLogin(url);
    };
    AuthService.prototype.login = function (code, clientId, redirectURI, authEndpoint) {
        var body = { "code": code, "clientId": clientId, "redirectUri": redirectURI };
        return this._http.post(authEndpoint, body, {})
            .toPromise()
            .then(function (r) {
            localStorage.setItem('isLoggedIn', "true");
            localStorage.setItem('token', r.json().token);
            return r.json();
        })
            .catch(this.handleError);
        ;
        // return Observable.of(true).delay(1000).do(val => this.isLoggedIn = localStorage.getItem('isLoggedIn'));
    };
    AuthService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    AuthService.prototype.logout = function () {
        localStorage.setItem('isLoggedIn', "false");
        localStorage.removeItem('token');
        localStorage.removeItem('cachedurl');
        localStorage.removeItem('provider');
        this.router.navigate([this.loginURI]);
    };
    AuthService.prototype.verifyLogin = function (url) {
        if (!this.isLoggedIn() && this.code == null) {
            localStorage.setItem('cachedurl', url);
            this.router.navigate([this.loginURI]);
            return false;
        }
        else if (this.isLoggedIn()) {
            return true;
        }
        else if (!this.isLoggedIn() && this.code != null) {
            var params = new http_1.URLSearchParams(this.location.path(false).split('?')[1]);
            if (params.get('code') && (localStorage.getItem('cachedurl') == "" || localStorage.getItem('cachedurl') == undefined)) {
                localStorage.setItem('cachedurl', this.location.path(false).split('?')[0]);
            }
            if (this.cachedURL != null || this.cachedURL != "") {
                this.cachedURL = localStorage.getItem('cachedurl');
            }
        }
    };
    AuthService.prototype.isLoggedIn = function () {
        var status = false;
        if (localStorage.getItem('isLoggedIn') == "true") {
            status = true;
        }
        else {
            status = false;
        }
        return status;
    };
    AuthService.prototype.auth = function (provider, authConfig) {
        localStorage.setItem("authConfig", JSON.stringify(authConfig));
        localStorage.setItem("provider", provider);
        if (provider == "linkedin" && !this.isLoggedIn()) {
            window.location.href = 'https://www.linkedin.com/oauth/v2/authorization?client_id=' + authConfig.linkedin.clientId + '&redirect_uri=' + authConfig.linkedin.redirectURI + '&response_type=code';
        }
        if (provider == "facebook" && !this.isLoggedIn()) {
            window.location.href = 'https://www.facebook.com/v2.8/dialog/oauth?client_id=' + authConfig.facebook.clientId + '&redirect_uri=' + authConfig.facebook.redirectURI + '&scope=email';
        }
        if (provider == "google" && !this.isLoggedIn()) {
            window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=' + authConfig.google.clientId + '&redirect_uri=' + authConfig.google.redirectURI + '&scope=email%20profile';
        }
        else {
            this.router.navigate([this.cachedURL]);
        }
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [ng2_interceptors_1.InterceptorService, router_1.Router, common_1.Location])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map