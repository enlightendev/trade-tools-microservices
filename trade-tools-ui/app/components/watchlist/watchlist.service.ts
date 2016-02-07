import {Injectable} from "angular2/core";
import {WatchList} from "./watchlist.model";
import {Http} from "angular2/http";
import 'rxjs/add/operator/map';

@Injectable()
export class WatchlistService {

    public watchLists:Array<WatchList>;

    constructor(private http:Http){
        //this.watchLists = this.getWatchLists();
        this.getWatchLists();
    }

    getWatchLists():any {
        this.http.get('http://localhost:9090/api/watchlist')
              // Call map on the response observable to get the parsed people object
               .map(res => res.json())
               // Subscribe to the observable to get the parsed people object and attach it to the
               // component
               .subscribe(data => this.watchLists = data);

        //return watchLists.map(w => new WatchList(w.id, w.name, w.type));
    }

    addWatchlist(watchlist:WatchList):void {
        this.watchLists.push(watchlist);
    }

}