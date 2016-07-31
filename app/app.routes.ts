import { provideRouter, RouterConfig } from '@angular/router';

import { AddToDoComponent } from './add-to-do.component';
import { ListToDoComponent } from './list-to-do.component';

const routes: RouterConfig = [
    { path: '', redirectTo: 'list-to-do', pathMatch: 'full' },
    { path: 'add-to-do', component: AddToDoComponent },
    { path: 'list-to-do', component: ListToDoComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];
