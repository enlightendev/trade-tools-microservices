import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';
import {WatchlistService} from "./watchlist.service";
import {WatchList} from "./watchlist.model";
import {ControlGroup} from "angular2/common";
import {FormBuilder} from "angular2/common";


@Component({
    selector: 'watch-list-form',
    templateUrl: 'app/components/watchlist/watchlist.form.html',
    directives: [FORM_DIRECTIVES]
})

export class WatchlistForm {

    myForm: ControlGroup;

    data: string;

    constructor(fb: FormBuilder, public watchlistService:WatchlistService){
        this.myForm = fb.group({
            'name': [''] ,
            'type': ['']
        });
    }

    onSubmit(data){
        this.data = JSON.stringify(data, null, 2);
        console.log(data);

        this.watchlistService.createWatchlist(new WatchList(data.name, data.type))
            .subscribe(
                //data => this.policies = data,
                data => this.submitWatchlist(data),
                err => this.logError(err),
                () => console.log('watchlistService.createWatchlist Request Complete')
            )
    }

    submitWatchlist(data){
        this.watchlistService.watchLists.push(WatchList.fromJSON(data));
    }

    logError(err){
        console.error('There was an error: ' + err);
    }
}