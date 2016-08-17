import { Component, provide } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavBarComponent } from './nav-bar.component';
import { AvFooterComponent } from './av-footer.component';
import { ListToDoComponent } from './list-to-do.component';
import { AddToDoComponent } from './add-to-do.component';
import { Config } from './app.config';

// Add the RxJS Observable opertors we need in this app.
import './rxjs-operators';

@Component({
    selector: 'my-app',
    template: `<nav-bar></nav-bar>
             <div class="row">
             <div class="col-xs-2">
             </div>
             <div class="col-xs-8 tab-body">
             <router-outlet></router-outlet>
             </div>
             <div class="col-xs-2">
             </div>
             </div>
             <av-footer></av-footer>`,
    directives: [NavBarComponent, AvFooterComponent, ROUTER_DIRECTIVES],
    precompile: [ListToDoComponent, AddToDoComponent],
    providers: [provide(Config, { useClass: Config }) ]
})
export class AppComponent { }
