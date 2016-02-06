import {Component} from "angular2/core";
import {ElementRef} from "angular2/core";
import {BrowserDomAdapter} from "angular2/src/platform/browser/browser_adapter";
import {FORM_DIRECTIVES} from "angular2/common";
import {MATERIAL_DIRECTIVES} from "ng2-material/all";

@Component({
    templateUrl: 'app/components/settings/settings.component.html',
    providers: [BrowserDomAdapter],
    directives: [MATERIAL_DIRECTIVES, FORM_DIRECTIVES]
})

export class SettingsComponent {

    user = {
        title: 'Developer',
        email: 'ipsum@lorem.com',
        firstName: '',
        lastName: '',
        company: 'Google',
        address: '1600 Amphitheatre Pkwy',
        address2: '',
        city: 'Mountain View',
        state: 'CA',
        biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
        postalCode: '94043'
    };
    states = [
        'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME',
        'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA',
        'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
    ].map(function (state) {
        return { abbrev: state };
    });

    constructor(private _elementRef:ElementRef,
                private _dom: BrowserDomAdapter){

        console.log(_elementRef);
    }
}