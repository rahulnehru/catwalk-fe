import {Component} from "react";
import React from "react";
import {Table, Button} from "react-bootstrap";


export default class ReleaseTable extends Component {
    constructor() {
        super();
        this.state = {
            tags: [
                {
                    name: "AUK1",
                    components: [
                        {
                            name: "Customer",
                            status: "red"
                        },
                        {
                            name: "Payments",
                            status: "red"
                        },
                        {
                            name: "Catalogue",
                            status: "red"
                        },
                        {
                            name: "Admin",
                            status: "red"
                        },
                        {
                            name: "Submission",
                            status: "red"
                        }
                    ]
                },
                {
                    name: "AUK2",
                    components: [
                        {
                            name: "Customer",
                            status: "red"
                        },
                        {
                            name: "Payments",
                            status: "red"
                        },
                        {
                            name: "Catalogue",
                            status: "red"
                        },
                        {
                            name: "Admin",
                            status: "red"
                        },
                        {
                            name: "CWI",
                            status: "green"
                        }
                    ]
                }
            ]

        }
    }


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
        let button = [];
        if (state === 'green') {button.push(<td><Button bsStyle="success"/></td>)}
        else if (state === 'yellow') { button.push(<td><Button bsStyle="warning"/></td>) }
        else {button.push(<td><Button bsStyle="danger"/></td>)}
        return button;
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
            <Table>
                <thead>
                <tr>
                    <th>Tag</th>
                    {headers.map((h) => <th>{h}</th>)}
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
            </Table>
        )
    }


}