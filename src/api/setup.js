
import 'babel-polyfill';
import connector from './connector';

connector.sync().then(() => {
    console.log('Database sync OK');
    process.exit();
})
.catch(console.log);
