import {Component, AfterViewInit, ElementRef} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

import {DashboardComponent} from "./dashboard/dashboard.component";
import {SettingsComponent} from "./settings/settings.component";
import {WatchlistComponent} from "./watchlist/watchlist.component";
import {TodoComponent} from "./todo/todo.component";
import {SideBar} from "./sidebar/sidebar.component";

@Component({
    // Declare the tag name in index.html to where the component attaches
    selector: 'main',

    // Location of the template for this component
    templateUrl: 'app/components/main.component.html',

    directives: [SideBar, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {
        path: '/',
        component: DashboardComponent,
        name: 'Dashboard',
        useAsDefault: true
    },
    {
        path: '/todo',
        component: TodoComponent,
        name: 'Todo'
    },
    {
        path: '/watchlist',
        component: WatchlistComponent,
        name: 'Watchlist'
    },
    {
        path: '/settings',
        component: SettingsComponent,
        name: 'Settings'
    }
])

export class MainComponent implements AfterViewInit {

    constructor(private el:ElementRef){

    }

    ngAfterViewInit() {

        console.log(this.el.nativeElement);

        var pw = $(this.el.nativeElement).find('#page-wrapper');
        //pw.css( "color", "red" );

        console.log(pw);
    }

}