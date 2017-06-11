import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/index';
import { User } from '../_models/index';
import { AlertService, AuthenticationService } from '../_services/index';
@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {
    currentUser: User;
    user: User;
    model: any = {};
    constructor(private userService: UserService,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() {
        // $.getScript('../../../assets/js/material-dashboard.js');
         this.getCurrentUserById();
    }
    update() {
        this.userService.update(this.currentUser)
            .subscribe(
            data => {
                // this.router.navigate([this.returnUrl]);
                this.getCurrentUserById();
            },
            error => {
                this.alertService.error(error._body);
            });
    }
private getCurrentUserById() {
        this.userService.getById(this.currentUser._id).subscribe(data => { 
            this.currentUser = data; 
        localStorage.setItem('currentUser',JSON.stringify(this.currentUser));
    },
    error => {
                this.alertService.error(error._body);
            });
    }

}
