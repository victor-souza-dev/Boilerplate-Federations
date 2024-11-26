import { initFederation } from '@angular-architects/native-federation';

initFederation({
  'remote-nativeFederation': 'http://localhost:4201/remoteEntry.json',
})
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
