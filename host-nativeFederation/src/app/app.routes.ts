import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'remote',
    loadComponent: () =>
      loadRemoteModule('remote-nativeFederation', './Component').then(
        (m) => m.AppComponent
      ),
  },
];
