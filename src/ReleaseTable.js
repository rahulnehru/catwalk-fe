import {Component} from "react";
import React from "react";

export default class ReleaseTable extends Component {
    constructor() {
        super();
        this.state = {
            tags: [
                {
                    name: 'AUK.master.2019.10.01',
                    components: [
                        {'customer': 'red'},
                        {'catalogue': 'red'},
                        {'payments': 'green'}
                    ]
                },
                {
                    name: 'AUK.master.2019.10.02',
                    components: [
                        {'customer': 'red'},
                        {'catalogue': 'red'},
                        {'payments': 'green'}
                    ]
                },
                {
                    name: 'AUK.master.2019.10.03',
                    components: [
                        {'customer': 'red'},
                        {'catalogue': 'red'},
                        {'payments': 'green'}
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <table className="table">

                    <thead>
                    {
                    this.state.tags.map((k) => <th scope="col">{k.name}</th>)
                    }
                    </thead>
                    

                    <tr>
                        <th scope="row">Customer</th>
                        <td>Green</td>
                        <td>Green</td>
                        <td>Red</td>
                    </tr>
                </table>
            </div>
        )
    }

}