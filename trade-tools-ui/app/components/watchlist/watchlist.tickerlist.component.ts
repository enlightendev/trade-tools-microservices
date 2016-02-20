import {Component} from "angular2/core";
import {Input} from "angular2/core";

@Component({

    selector: "ticker-components",
    templateUrl: 'app/components/watchlist/watchlist.tickerlist.component.html',
})
export class WatchlistTickerListComponent {

    public selectedTicker:any ;

    public tickers:Array<any> = [
        {
            "ticker" : "msft",
            "levels" : [
                {
                    "level": 50,
                    "description" : "21 period ema"
                },
                {
                    "level": 20,
                    "description" : "35 period ema"
                }
            ]
        },{
            "ticker" : "orcl",
            "levels" : [
                {
                    "level": 27,
                    "description" : "25% retrcaement"
                },
                {
                    "level": 18,
                    "description" : "50% reatracement"
                }
            ]
        }
    ];

    constructor(){

    }

    selectTicker(ticker:any){
        this.selectedTicker = ticker;
    }
}