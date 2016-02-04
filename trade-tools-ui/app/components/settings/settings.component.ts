import {Component} from "angular2/core";
import {ElementRef} from "angular2/core";
import {BrowserDomAdapter} from "angular2/src/platform/browser/browser_adapter";
@Component({
    templateUrl: 'app/components/settings/settings.component.html',
    providers: [BrowserDomAdapter]
})

export class SettingsComponent {

    constructor(private _elementRef:ElementRef,
                private _dom: BrowserDomAdapter){

        console.log(_elementRef);
        var domIWant = this._dom.query('#pageHeader');

        console.log(domIWant);
    }
}