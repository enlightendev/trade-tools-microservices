import {Injectable} from "angular2/core";
import {WatchList} from "./watchlist.model";
import {Http} from "angular2/http";
import 'rxjs/add/operator/map';
import {Headers} from "angular2/http";
import {Response} from "angular2/http";

@Injectable()
export class WatchlistService {

    public watchLists:Array<WatchList>;

    constructor(private http:Http){
        //this.watchLists = this.getWatchLists();
        this.getWatchLists();
    }

    getWatchLists():any {
        this.http.get('http://localhost:9001/api/watchlist')
              // Call map on the response observable to get the parsed people object
               .map(res => res.json())
               // Subscribe to the observable to get the parsed people object and attach it to the
               // component
               .subscribe(data => this.watchLists = data._embedded.watchlist);

        //return watchLists.map(w => new WatchList(w.id, w.name, w.type));
    }

    public createWatchlist(watchlist:WatchList) {

        var url = 'http://localhost:9090/api/watchlist';

        if (watchlist.id) {
            url = url + '/' + watchlist.id
        }

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        if (watchlist.id) {
            return this.http.put(url, watchlist.toJSON(), {headers: headers})
                .map((res:Response) => res.json());

        } else {
            return this.http.post(url, watchlist.toJSON(), {headers: headers})
                .map((res:Response) => res.json());
        }

    }

    public deleteWatchlist(watchlist:WatchList) {

        var url = 'http://localhost:9001/api/watchlist';

        if (watchlist.id) {
            url = url + '/' + watchlist.id
        }

        return this.http.delete(url )
            .map((res:Response) => res.json());

    }

    logError(err) {
        console.error('There was an error: ' + err);
    }

}