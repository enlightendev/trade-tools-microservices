import {Component} from "angular2/core";
import {WatchlistService} from "./watchlist.service";
import {WatchList} from "./watchlist.model";

@Component({
    selector: 'watchlist',
    templateUrl: 'app/components/watchlist/watchlist.component.html'
})
export class WatchlistComponent{

    public selectedList:WatchList;

    constructor(public watchlistService:WatchlistService){

    }

    listSelected(list:WatchList){
        this.selectedList = list;
    }

}