import { Component, OnInit } from '@angular/core';


declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'rightsidebar-cmp',
    templateUrl: 'onlineusers.component.html',
})

export class OnlineUsersComponent implements OnInit {
    ngOnInit() {
        $.getScript('../../assets/js/right-sidebar-moving-tab.js');
       
    }
}
