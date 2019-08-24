import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from './containers/Register';

export default () => (
    <Switch>
        <Route path="/" exact={true} component={Register}/>
    </Switch>
)