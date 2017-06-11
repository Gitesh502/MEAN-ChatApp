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
var auth_service_1 = require('./auth.service');
var cuppaOAuth = (function () {
    function cuppaOAuth(authService) {
        this.authService = authService;
    }
    cuppaOAuth.prototype.linkedinLogin = function () {
        this.authService.auth('linkedin', this.authConfig);
    };
    cuppaOAuth.prototype.facebookLogin = function () {
        this.authService.auth('facebook', this.authConfig);
    };
    cuppaOAuth.prototype.googleLogin = function () {
        this.authService.auth('google', this.authConfig);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], cuppaOAuth.prototype, "authConfig", void 0);
    cuppaOAuth = __decorate([
        core_1.Component({
            selector: 'cuppa-oauth',
            template: "\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-4\">\n      <button (click)=\"googleLogin()\" class=\"btn btn-block btn-social btn-google\">\n          <span class=\"fa fa-google\"></span> Sign in with Google\n      </button>\n      <button (click)=\"facebookLogin()\" class=\"btn btn-block btn-social btn-facebook\">\n          <span class=\"fa fa-facebook\"></span> Sign in with Facebook\n      </button>\n      <button (click)=\"linkedinLogin()\" class=\"btn btn-block btn-social btn-linkedin\">\n          <span class=\"fa fa-linkedin\"></span> Sign in with LinkedIn\n      </button>\n      </div>\n    </div>",
            styleUrls: ['./auth-styles.css']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof auth_service_1.AuthService !== 'undefined' && auth_service_1.AuthService) === 'function' && _a) || Object])
    ], cuppaOAuth);
    return cuppaOAuth;
    var _a;
}());
exports.cuppaOAuth = cuppaOAuth;
//# sourceMappingURL=oauth.component.js.map