import React, { Component } from 'react';
import './App.css';
import Menu from './component/menu/Menu';
import Table from './component/table/Table';
class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <button type="button" className="btn btn-primary mb-10">Thêm sản phẩm</button>
                            <Table /> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
