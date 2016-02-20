import {Component} from "angular2/core";
import {WatchlistService} from "./watchlist.service";
import {WatchList} from "./watchlist.model";
import {WatchlistForm} from "./watchlist.form";
import {WatchlistTickerListComponent} from "./watchlist.tickerlist.component";

@Component({
    selector: 'watchlist',
    templateUrl: 'app/components/watchlist/watchlist.component.html',
    styleUrls: ['app/components/watchlist/watchlist.component.css'],
    directives: [WatchlistForm, WatchlistTickerListComponent]
})
export class WatchlistComponent{

    isHovered = false;

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
                () => console.log('watchlistService.deleteSelected Request Complete')
            )
    }

    deleteWatchlist(){
        this.watchlistService.getWatchLists();
    }

    logError(err){
        console.error('There was an error: ' + err);
        this.watchlistService.getWatchLists();
    }

    rotateCard(data){
        console.log(data);
        if(this.isHovered){
            this.isHovered = false;
        }else{
            this.isHovered = true;
        }

    }

}