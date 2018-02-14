import { Component } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'the Bootstrap 4 Angular Components demo';

    constructor(config: NgbAccordionConfig) {
        config.closeOthers = true;
    }
}
