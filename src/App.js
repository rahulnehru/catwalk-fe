import React, {Component} from 'react';
import './App.css';
import ReleaseTable from './ReleaseTable';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header"><h1>Catwalk</h1></header>
                <ReleaseTable/>
            </div>
        );
    }
}

export default App;
