import {Component} from "angular2/core";
import {WatchlistService} from "./watchlist.service";
import {WatchList} from "./watchlist.model";
import {OnInit} from "angular2/core";

@Component({
    selector: 'watchlist',
    templateUrl: 'app/components/watchlist/watchlist.component.html'
})
export class WatchlistComponent implements OnInit{

    public watchLists:Array<WatchList>;

    constructor(public watchlistService:WatchlistService){

    }

    ngOnInit() {
        this.watchLists = this.watchlistService.getWatchLists();
    }

}