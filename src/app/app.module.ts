import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
    declarations: [
        AppComponent,
        AccordionComponent,
        HamburgerComponent
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
