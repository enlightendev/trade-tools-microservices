import {Component, AfterViewInit, ElementRef} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

import {DashboardComponent} from "./dashboard/dashboard.component";
import {SettingsComponent} from "./settings/settings.component";
import {WatchlistComponent} from "./watchlist/watchlist.component";
import {TodoComponent} from "./todo/todo.component";
import {SideBar} from "./sidebar/sidebar.component";
import {ScratchComponent} from "./scratch/scratch.component";
import {MATERIAL_DIRECTIVES} from "ng2-material/all";

@Component({
    // Declare the tag name in index.html to where the component attaches
    selector: 'main',

    // Location of the template for this component
    templateUrl: 'app/components/main.component.html',

    directives: [ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES]
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
    },
    {
        path: '/scratch',
        component: ScratchComponent,
        name: 'Scratch'
    }
])

export class MainComponent implements AfterViewInit {

    constructor(private el:ElementRef){

    }

    ngAfterViewInit() {

        console.log(this.el.nativeElement);
    }

}