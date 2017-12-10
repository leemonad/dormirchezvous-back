import 'babel-polyfill';

import connector from './connector';
import router from './router';

const port = process.env.PORT || 3000;

connector
  .sync()
  .then(() => {
    router.listen(port, () => {
      console.log('Listening on port', port);
    });
  })
  .catch(console.log);
