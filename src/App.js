import React, {Component} from 'react';
import './App.css';
import ReleaseTable from './ReleaseTable';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header"><h1>Catwalk</h1></header>
                <ReleaseTable/>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Build 1</th>
                        <th scope="col">Build 2</th>
                        <th scope="col">Build 3</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Customer</th>
                        <td>Green</td>
                        <td>Green</td>
                        <td>Red</td>
                    </tr>
                    <tr>
                        <th scope="row">Catalogue</th>
                        <td>Green</td>
                        <td>Red</td>
                        <td>Red</td>
                    </tr>
                    <tr>
                        <th scope="row">Payments</th>
                        <td>Green</td>
                        <td>Green</td>
                        <td>Green</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
