import React, {Component} from "react";

import { dummyApiResponseJson } from "../../api/dummy-api_json";
import "./index.css";

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

    getStatusButton = ({status, name}) =>
        status === "green" ? <div key={name} className="dot dot-green" /> : status === "yellow" ? <div key={name} className="dot dot-yellow" /> : <div key={name} className="dot dot-red" />;

    getRowForTag = (tag) => {
        let cs = this.getComponents();
        let row = [];

        for (let c of cs) {
            let t = tag.components.find(o => o.component === c);
            if (t) {
                row.push(this.getStatusButton(t))
            } else row.push(<td/>);
        }
        return row;
    };

    toggleExpandClick = (tagKey) => {
        this.setState((prevState) => (
            {
                extendedTagKey: prevState.extendedTagKey === tagKey ? -1 : tagKey
            }
        ))
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
                        <div className={`row ${t.key === this.state.extendedTagKey ? "expanded" : ""}`}>
                            <div key={t.name} className={`catwalk-row tag-row`} >
                                <div className="green-stripe" />
                                <h3>
                                    {t.tag.toUpperCase()}
                                </h3>
                                {
                                    this.getRowForTag(t)
                                }
                                <div className="expand" onClick={() => this.toggleExpandClick(t.key)}>
                                    {t.key === this.state.extendedTagKey ? <h1 style={{marginTop: "-3px", marginLeft: "1px"}}>-</h1> : <h1>+</h1> }
                                </div>
                            </div>
                            {
                                t.key === this.state.extendedTagKey &&

                                <div className="expanded-tag-row">
                                    <hr className="catwalk-hr" />
                                    <h1 className="expanded-tag-row-h1"> RELEASE NOTES </h1>
                                    <h2 className="expanded-tag-row-h2"> OVERVIEW </h2>
                                    <div className="expanded-tag-row-completed">
                                        <h3>COMPLETE TICKETS</h3>
                                        <ul>
                                            <li>DJ-21502</li>
                                            <li>DJ-21504</li>
                                            <li>DJ-21508</li>
                                            <li>DJ-21617</li>
                                            <li>DJ-21882</li>
                                        </ul>
                                    </div>
                                    <div className="expanded-tag-row-outstanding">
                                        <h3>OUTSTANDING TICKETS</h3>
                                        <ul>
                                            <li>DJ-22000</li>
                                            <li>DJ-22201</li>
                                            <li>DJ-21299</li>
                                            <li>DJ-21237</li>
                                            <li>DJ-21282</li>
                                        </ul>
                                    </div>
                                    <div className="expanded-tag-row-contacts">
                                        <div className="contacts">
                                            <h2>Lead Contact</h2>
                                            <span>Icon</span>
                                            <p>
                                                Rahul Nehru <br />
                                                07755113322 <br />
                                                rnehru@deloitte.co.uk <br />
                                            </p>
                                        </div>
                                    </div>
                                    <hr className="expanded-tag-row-bottom-hr" />
                                </div>
                            }
                        </div>
                    )
                }
                </div>
            </div>
        )
    }
}

export default ReleaseTable;