import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanegesMap from './pages/OrphanegesMap';
import Orphanages from './pages/Orphanage';
import CreateOrphaneges from './pages/CreateOrphanage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanegesMap} />

                <Route path="/orphanages/create" component={CreateOrphaneges} />
                <Route path="/orphanages/:id" component={Orphanages} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;