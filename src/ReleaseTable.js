import {Component} from "react";
import React from "react";
import red from "./red.png"
import ylw from "./ylw.png"
import grn from "./grn.png"


export default class ReleaseTable extends Component {
    constructor() {
        super();
        this.state = {
            components: [
                {
                    name: 'customer',
                    tags: [
                        {
                            name: 'AUK1',
                            state: 'green'
                        },
                        {
                            name: 'AUK2',
                            state: 'green'
                        },
                        {
                            name: 'AUK3',
                            state: 'green'
                        },
                        {
                            name: 'AUK4',
                            state: 'yellow'
                        },
                        {
                            name: 'AUK5',
                            state: 'red'
                        },
                        {
                            name: 'AUK6',
                            state: 'red'
                        },
                        {
                            name: 'AUK7',
                            state: 'red'
                        },
                        {
                            name: 'AUK8',
                            state: 'red'
                        }
                    ]
                },
                {
                    name: 'payments',
                    tags: [
                        {
                            name: 'AUK1',
                            state: 'green'
                        },
                        {
                            name: 'AUK2',
                            state: 'green'
                        },
                        {
                            name: 'AUK3',
                            state: 'green'
                        },
                        {
                            name: 'AUK4',
                            state: 'green'
                        },
                        {
                            name: 'AUK5',
                            state: 'green'
                        },
                        {
                            name: 'AUK6',
                            state: 'green'
                        },
                        {
                            name: 'AUK7',
                            state: 'yellow'
                        },
                        {
                            name: 'AUK8',
                            state: 'red'
                        }
                    ]
                }
            ]
        }
    }


    createTable = () => {
        let table = [];
        for (let component = 0; component < this.state.components.length; component++) {
            let name = this.state.components[component].name;
            let row = [];
            row.push(<td key={name}>{name}</td>);
            for (let tag = 0; tag < this.state.components[component].tags.length; tag++) {
                let state = this.state.components[component].tags[tag].state;
                if(state === 'green'){
                    row.push(<td><img src={grn}/></td>)
                } else if (state === 'yellow') {
                    row.push(<td><img src={ylw}/></td>)
                } else {
                    row.push(<td><img src={red}/></td>)
                }

            }
            table.push(<tr>{row}</tr>);
        }
        return table;
    };

    createReleaseColumns = () => {
        let headers = [];
        let comps = this.state.components;
        if (comps.length > 0 && comps[0].tags.length > 0) {
            let tags = comps[0].tags;
            for (let tag of tags) {
                headers.push(<th scope="col" key={tag.name}>{tag.name}</th>)
            }
        }
        return headers;
    };

    render() {
        return (
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Component</th>
                        {this.createReleaseColumns()}
                    </tr>
                </thead>
                <tbody>
                {this.createTable()}
                </tbody>
            </table>
        )
    }

}