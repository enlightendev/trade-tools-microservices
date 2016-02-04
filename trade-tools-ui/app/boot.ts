import {bootstrap}  from 'angular2/platform/browser';
import {MainComponent} from './components/main.component';
import {HTTP_PROVIDERS} from "angular2/http";
import {ROUTER_PROVIDERS} from "angular2/router";
import {LocationStrategy} from "angular2/router";
import {provide} from "angular2/core";
import {HashLocationStrategy} from "angular2/router";
import {WatchlistService} from "./components/watchlist/watchlist.service";

bootstrap(MainComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    WatchlistService,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]).then(
    success => console.log('app starting...'),
    error => console.log(error)
);