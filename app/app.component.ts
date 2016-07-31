import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavBarComponent } from './nav-bar.component';
import { AvFooterComponent } from './av-footer.component';
import { ListToDoComponent } from './list-to-do.component';
import { AddToDoComponent } from './add-to-do.component';

@Component({
  selector: 'my-app',
  template: `<nav-bar></nav-bar>
             <router-outlet></router-outlet>
             <av-footer></av-footer>`,
  directives: [NavBarComponent, AvFooterComponent, ROUTER_DIRECTIVES],
  precompile: [ListToDoComponent, AddToDoComponent]
})
export class AppComponent { }
