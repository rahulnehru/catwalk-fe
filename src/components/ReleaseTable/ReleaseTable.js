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
        const buttonStyle = state === "green" ? "success" : state === "yellow" ? "warning" : "danger";
        return <Button className="status-button" bsStyle={buttonStyle}/>
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
                <div className="tag-row">
                    <h3>Tag</h3>
                    {headers.map(h => <h3>{h}</h3>)}
                </div>
                {
                    this.state.tags.map(t =>
                        <div className="tag-row">
                        <div className="green-stripe" />
                                <h3>
                                    {t.name}
                                </h3>
                            {
                                this.getRowForTag(t)
                            }
                        </div>
                    )

                }

            </div>
        )
    }
}

export default ReleaseTable;