import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const MyLink = ({ label, to, activeWhenExact }) => {
    return (
        <Route path={to} exact={activeWhenExact} children={({ match }) => {
            var active = match ? 'active' : '';
            return (
                <li className={active}>
                    <Link to={to}>
                        {label}
                    </Link>
                </li>
            );
        }} />
    );
}

const menus = [
    {
        label: 'Home',
        to: '/',
        activeWhenExact: true
    },
    {
        label: 'Danh sach san pham',
        to: '/product-list',
        activeWhenExact: false
    }
];

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <span className="navbar-brand">Title</span>
                <ul className="nav navbar-nav">
                    {this.showMenuProduct(menus)}
                </ul>
            </nav>
        );
    }

    showMenuProduct = (menus) => {
        var result = null;
        if(menus.length > 0) {
            result = menus.map((menu, index) => {
                return(
                    <MyLink key={index} label={menu.label} to={menu.to} activeWhenExact={menu.activeWhenExact} />
                );
            });
        }
        return result;
    }
}

export default Menu;