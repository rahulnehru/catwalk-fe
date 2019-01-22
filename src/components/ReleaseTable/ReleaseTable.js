import React, {Component} from "react";
import posed, {PoseGroup} from "react-pose";

import "./ReleaseTable.css";
import TagRow from "../TagRow/TagRow";
import InfiniteScroll from "react-infinite-scroll-component";

const PosedTagRow = posed(TagRow)({
    flip: {transition: {ease: 'easeInOut', duration: 500}}
});

class ReleaseTable extends Component {
    constructor() {
        super();
        this.state = {
            tags: [],
            extendedTagKey: -1,
            page: 0,
            hasMorePages: true
        }
    }

    fetchData = () => {
        let pageNumber = this.state.page;
        fetch(`https://localhost:5001/api/GetStatus/1?page=${pageNumber}&pageSize=8`)
            .then(response => response.json())
            .then(tags => {
                    this.setState({
                        page: pageNumber+1,
                        tags: this.state.tags.concat(tags)
                    }, () => {
                        console.log(this.state.tags);
                    })
                }
            );
    };

    componentDidMount = () => {
        fetch(`https://localhost:5001/api/GetStatus/1?page=0&pageSize=8`)
            .then(response => response.json())
            .then(tags => {
                    this.setState({
                        page: this.state.page + 1,
                        tags: tags
                    }, () => {
                        console.log(this.state.tags);
                    })
                }
            );
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
        components.sort();
        return components;
    };

    toggleExpandClick = (tagKey) => {
        this.setState((prevState) => (
            {
                extendedTagKey: prevState.extendedTagKey === tagKey ? -1 : tagKey
            }
        ))
    };

    _shuffle = array => {
        var currentIndex = array.length,
            temporaryValue,
            randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };


    render() {
        let headers = this.getComponents();
        return (
            <div className="release-table">
                <header>
                    <div className="catwalk-row header-row">
                        <h3>T A G</h3>
                        {headers.map(h => <h3 key={h}>{h.toUpperCase()}</h3>)}
                    </div>
                </header>
                <InfiniteScroll
                    dataLength={100}
                    next={this.fetchData}
                    hasMore={this.state.hasMorePages}
                    loader={<h4>Loading...</h4>}
                    endMessage={<h4 style={{textAlign: "center"}}><b>Yay! You have seen it all</b></h4>}>
                    >

                    <div className="table-body">
                        <PoseGroup>
                            {
                                this.state.tags.map(tag =>
                                    <PosedTagRow
                                        key={tag.tag}
                                        tag={tag}
                                        components={headers}
                                        toggleExpandClick={(key) => this.toggleExpandClick(key)}
                                    />
                                )
                            }
                        </PoseGroup>
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}

export default ReleaseTable;