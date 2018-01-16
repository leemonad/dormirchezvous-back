import 'babel-polyfill';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import webpackConfig from '../webpack.config';
import connector from './api/connector';
import apiRouter from './api/router';

const compiler = webpack(webpackConfig);
const server = express();

server.use(webpackDevMiddleware(compiler, {
  hot: true,
  publicPath: '/',
}));

server.use('/api', apiRouter);
server.use('/admin', express.static(__dirname + '/admin'));
server.use('*', express.static(__dirname + '/front'));

const port = process.env.PORT || 3000;

connector
  .authenticate() // Test Database connection
  .then(() => {
    server.listen(port, () => {
      console.log('Listening on port', port);
    });
  })
  .catch(console.log);
