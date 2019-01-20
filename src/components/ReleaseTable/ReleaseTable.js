import React, {Component} from "react";

import { dummyApiResponseJson } from "../../api/dummy-api_json";
import "./ReleaseTable.css";
import TagRow from "../TagRow/TagRow";

class ReleaseTable extends Component {
    constructor() {
        super();
        this.state = {
            tags: [],
            extendedTagKey: -1
        }
    }

    componentWillMount = () => {
        // Specify number of tags to simulate
        this.setState({
            tags: dummyApiResponseJson(5)
        })
    };

    getComponents = () => {
        let components = [];
        for (let tag of this.state.tags) {
            for (let component of tag.components) {
                if (!components.includes(component.component)) {
                    components.push(component.component);
                }
            }
        }
        return components;
    };

    toggleExpandClick = (tagKey) => {
        this.setState((prevState) => (
            {
                extendedTagKey: prevState.extendedTagKey === tagKey ? -1 : tagKey
            }
        ))
    };

    render() {
        const headers = this.getComponents();
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
                    this.state.tags.map(tag =>
                        <TagRow
                            key={tag.tag}
                            tag={tag}
                            isExtended={this.state.extendedTagKey === tag.key}
                            components={headers}
                            toggleExpandClick={(key) => this.toggleExpandClick(key)}
                        />
                    )
                }
                </div>
            </div>
        )
    }
}

export default ReleaseTable;