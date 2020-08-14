import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        label: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        label: 'Danh sách sản phẩm',
        to: '/product-list',
        exact: false
    }
];

const MyLink = ({ label, to, activeWhenOnlyExact }) => {
    return (
        <Route path={to} exact={activeWhenOnlyExact} children={({match}) => {
            var active = match ? 'active' : '';
            console.log(match);
            console.log(active); 
            return(
                <li className={active}>
                    <Link to={to}>
                        {label}
                    </Link>
                </li>
            );
        }}/>
    );
}

class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <a className='navbar-brand'>Call API</a>
                <ul className="nav navbar-nav">
                    {this.showMenuLink(menus)}
                </ul>
            </div>
        );
    }
    showMenuLink = (menus) => {
        var result = null;
        if(menus.length > 0) {
            result = menus.map((menu, index) => {
                return(
                    <MyLink key={index} label={menu.label} to={menu.to} exact={menu.exact} />
                );
            });
        }
        return result;
    }
}

export default Menu;