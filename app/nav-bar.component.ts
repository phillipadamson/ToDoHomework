import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/templates/nav-bar.component.html',
    directives: [ROUTER_DIRECTIVES, NgClass]
})

export class NavBarComponent {
    arrTab: any[] = [{ blnIsActive: true }, { blnIsActive: false }];
    toggle(intIndex: number) {
        if (this.arrTab[intIndex].blnIsActive === false) {
          for(let i = 0; i < this.arrTab.length; i++) {
            if(i === intIndex) {
              this.arrTab[i].blnIsActive = true;
            } else {
              this.arrTab[i].blnIsActive = false;
            }
          }
        }

    }
}
