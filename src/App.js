import React, {Component} from 'react';
import './App.css';
import ReleaseTable from './ReleaseTable';
import StatusModal from "./StatusModal";

class App extends Component {



    render() {
        return (
            <div className="App">
                <ReleaseTable/>
                <StatusModal/>
            </div>
        );
    }
}

export default App;
