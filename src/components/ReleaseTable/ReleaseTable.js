import React, {Component} from "react";

import { dummyApiResponse } from "../../api/dummy-api";
import "./index.css";

class ReleaseTable extends Component {
    constructor() {
        super();
        this.state = {
            tags: []
        }
    }

    componentWillMount = () => {
        // Specify number of tags to simulate
        this.setState({
            tags: dummyApiResponse(5)
        })
    };

    getComponents = () => {
        let components = [];
        for (let tag of this.state.tags) {
            for (let component of tag.components) {
                if (!components.includes(component.name)) {
                    components.push(component.name);
                }
            }
        }
        return components;
    };

    getStatusButton = ({status, name}) =>
        status === "green" ? <div key={name} className="dot dot-green" /> : status === "yellow" ? <div key={name} className="dot dot-yellow" /> : <div key={name} className="dot dot-red" />;

    getRowForTag = (tag) => {
        let cs = this.getComponents();
        let row = [];

        for (let c of cs) {
            let t = tag.components.find(o => o.name === c);
            if (t) {
                row.push(this.getStatusButton(t))
            } else row.push(<td/>);
        }
        return row;
    };

    onExpandClick = () => {
        console.log('Expand clicked!')
    };

    render() {
        let headers = this.getComponents();
        return (
            <div className="release-table">
                <header>
                    <div className="catwalk-row header-row">
                        <h3>TAG</h3>
                        {headers.map(h => <h3 key={h}>{h.toUpperCase()}</h3>)}
                    </div>
                </header>
                <div className="table-body">
                {
                    this.state.tags.map(t =>
                        <div key={t.name} className="catwalk-row tag-row">
                            <div className="green-stripe" />
                            <h3>
                                {t.name.toUpperCase()}
                            </h3>
                            {
                                this.getRowForTag(t)
                            }
                            <div className="expand" onClick={this.onExpandClick}>
                                <h1>+</h1>
                            </div>
                        </div>
                    )
                }
                </div>
            </div>
        )
    }
}

export default ReleaseTable;