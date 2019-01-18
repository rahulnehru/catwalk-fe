import React, {Component} from "react";
import {Button} from "react-bootstrap";

import { dummyApiResponse } from "../../api/dummy-api";

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
        return <Button bsStyle={buttonStyle}/>
    };

    getRowForTag = (tag) => {
        let cs = this.getComponents();
        let row = [];

        for (let c of cs) {
            let t = tag.components.find(o => o.name === c);
            if (t) {
                row.push(<td>{this.getStatusButton(t.status)}</td>)
            } else row.push(<td/>);
        }
        return row;
    };

    render() {
        let headers = this.getComponents();
        return (
            <table>
                <thead>
                    <tr>
                        <th>Tag</th>
                        {headers.map(h => <th>{h}</th>)}
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.tags.map(t =>
                        <tr>
                            <td>{t.name}</td>
                            {this.getRowForTag(t)}
                        </tr>
                    )
                }
                </tbody>
            </table>
        )
    }
}

export default ReleaseTable;