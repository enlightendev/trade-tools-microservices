import {Injectable} from "angular2/core";
import {WatchList} from "./watchlist.model";

@Injectable()
export class WatchlistService {

    getWatchLists():Array<WatchList>{
        return watchLists.map(w => new WatchList(w.id, w.name, w.type));
    }

}

var watchLists = [
    {
        id: 0,
        'name': 'list 1',
        'type' :'stocks'
    },
    {
        id: 0,
        'name': 'list 1',
        'type' :'futures'
    }
];