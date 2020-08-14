import React, { Component } from 'react';
import HomePage from './page/HomePage/HomePage';
import NotFound from './page/NotFound/NotFound';
import ProductList from './page/ProductList/ProductList';
import ProductAction from './page/ProductAction/ProductAction';
import { Switch, Route } from 'react-router-dom';

const routes = [
    {
        to: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        to: '/product-list',
        exact: false,
        main: () => <ProductList />
    },
    {
        to: '/product/add',
        exact: false,
        main: ({match}) => <ProductAction match={match}/>
    },
    
    {
        to: '/product/:id/edit',
        exact: false,
        main: ({match}) => <ProductAction match={match}/>
    },
    {
        to: '',
        exact: false,
        main: () => <NotFound />
    }
]

class Routes extends Component {
    render() {
        return (
            <Switch>
                {this.showRoutes(routes)}
            </Switch>
        );
    }

    showRoutes = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route key={index} path={route.to} exact={route.exact} component={route.main}/>
                );
            })
        }
        return result;
    }

}

export default Routes;