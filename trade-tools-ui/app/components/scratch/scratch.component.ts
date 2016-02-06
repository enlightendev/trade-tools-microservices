import {Component} from "angular2/core";
@Component({
    template: `
        <table>
            <tr *ngFor="#process of processDocumentList">
                <td>{{process.process}}</td>
            </tr>
        </table>
    `
})

export class ScratchComponent {

    public processDocumentList = [
        {
            process: 'application-kit',
            document: [
                { name: 'doc1'},
                { name: 'doc10'},
                { name: 'doc5'}
            ]
        },
        {
            process: 'underwrite',
            document: [
                { name: 'doc12'},
                { name: 'doc1'},
                { name: 'doc7'}
            ]
        }
    ];

    constructor(){

    }
}