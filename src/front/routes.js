import React from 'react';
import { Route } from 'react-router-dom';

import Home from './screens/Home';

export const Routes = () => (
    <div>
        <div>Header</div>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <div>Footer</div>
    </div>
);

export default Routes;