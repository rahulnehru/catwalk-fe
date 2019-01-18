import React, {Component} from "react";
import {Button} from "react-bootstrap";

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
        this.setState({
            tags: dummyApiResponse
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

    getStatusButton = (state) => {
        return state === "green" ? <div className="dot-green" /> : state === "yellow" ?  <div className="dot-yellow" /> :  <div className="dot-red" />

    };

    getRowForTag = (tag) => {
        let cs = this.getComponents();
        let row = [];

        for (let c of cs) {
            let t = tag.components.find(o => o.name === c);
            if (t) {
                row.push(this.getStatusButton(t.status))
            } else row.push(<td/>);
        }
        return row;
    };

    render() {
        let headers = this.getComponents();
        return (
            <div className="release-table">
                <header>
                <div className="header-row">
                    <h3>TAG</h3>
                    {headers.map(h => <h3>{h.toUpperCase()}</h3>)}
                </div>
                </header>
                <div className="table-body">
                {
                    this.state.tags.map(t =>
                        <div className="row">
                        <div className="tag-row">
                        <div className="green-stripe" />
                                <h3>
                                    {t.name.toUpperCase()}
                                </h3>
                            {
                                this.getRowForTag(t)
                            }
                            <div className="expand"><h1>+</h1></div>
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