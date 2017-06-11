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
var index_1 = require('../_services/index');
var index_2 = require('../_services/index');
var UserComponent = (function () {
    function UserComponent(userService, authenticationService, alertService) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    UserComponent.prototype.ngOnInit = function () {
        // $.getScript('../../../assets/js/material-dashboard.js');
        this.getCurrentUserById();
    };
    UserComponent.prototype.update = function () {
        var _this = this;
        this.userService.update(this.currentUser)
            .subscribe(function (data) {
            // this.router.navigate([this.returnUrl]);
            _this.getCurrentUserById();
        }, function (error) {
            _this.alertService.error(error._body);
        });
    };
    UserComponent.prototype.getCurrentUserById = function () {
        var _this = this;
        this.userService.getById(this.currentUser._id).subscribe(function (data) {
            _this.currentUser = data;
            localStorage.setItem('currentUser', JSON.stringify(_this.currentUser));
        }, function (error) {
            _this.alertService.error(error._body);
        });
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user-cmp',
            moduleId: module.id,
            templateUrl: 'user.component.html'
        }), 
        __metadata('design:paramtypes', [index_1.UserService, index_2.AuthenticationService, index_2.AlertService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map