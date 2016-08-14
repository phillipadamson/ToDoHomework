import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import { provide } from '@angular/core';
import { ToastOptions } from 'ng2-toastr/ng2-toastr';

let options = {
    positionClass: 'toast-top-center'
};

bootstrap(AppComponent, [
  appRouterProviders,
  HTTP_PROVIDERS,
  provide(ToastOptions, {useValue: new ToastOptions(options)})
])
.catch(err => console.error(err));
