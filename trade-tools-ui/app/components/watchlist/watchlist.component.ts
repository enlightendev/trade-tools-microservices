import {Component} from "angular2/core";
import {WatchlistService} from "./watchlist.service";
import {WatchList} from "./watchlist.model";
import {WatchlistForm} from "./watchlist.form";

@Component({
    selector: 'watchlist',
    templateUrl: 'app/components/watchlist/watchlist.component.html',
    directives: [WatchlistForm]
})
export class WatchlistComponent{

    public selectedList:WatchList;

    constructor(public watchlistService:WatchlistService){

    }

    listSelected(list:WatchList){
        this.selectedList = list;
    }

    deleteSelected(watchlist:WatchList){
        this.watchlistService.deleteWatchlist(watchlist)
            .subscribe(
                //data => this.policies = data,
                data => this.deleteWatchlist(),
                err => this.logError(err),
                () => console.log('templateService.createTemplate Request Complete')
            )
    }


    deleteWatchlist(){
        this.watchlistService.getWatchLists();
    }

    logError(err){
        console.error('There was an error: ' + err);
        this.watchlistService.getWatchLists();
    }

}