import { lazy } from 'react'
import { Switch, Route, withRouter } from "react-router-dom";

const Home = lazy(() =>  import('./../../modules/Home'));
const Search = lazy(() =>  import('./../../modules/Search'));
const Detail = lazy(() =>  import('../../modules/ProductDetail'));

const Routes = () => {
    return (
        <Switch>
            <Route 
                exact
                path="/"
                component={Home}
            />
            <Route 
                exact
                path="/items"
                component={Search}
            />
            <Route 
                exact
                path="/items/:id"
                component={Detail}
            />
        </Switch>
    );
}

export default withRouter(Routes);