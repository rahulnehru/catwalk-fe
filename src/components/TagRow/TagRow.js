import React, {forwardRef, Component} from 'react';
import posed from "react-pose";

import "./TagRow.css";
import ExpandedTagRow from "../ExtendedTagRow/ExpandedTagRow";

const PosedExpandedTagRow = posed(ExpandedTagRow)({
    closed: { height: 0 },
    open: { height: 'auto' }
});

class TagRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExtended: false
        }
    }

    getStatusButton = ({deployable, name}) =>
        deployable ?
            <div key={name} className="dot dot-green" /> :
                <div key={name} className="dot dot-red" />
    ;

    getRowForTag = (tag) => {
        let row = [];
        for (let c of this.props.components) {
            let t = tag.components.find(o => o.component === c);
            if (t) row.push(this.getStatusButton(t));
            else row.push(<td/>);
        }
        return row;
    };

    toggleExpandClick = () => this.setState(prevState => ({isExtended: !prevState.isExtended}));

    render() {
        const { tag } = this.props;
        const { isExtended } = this.state;
        return (
            <div ref={this.props.innerRef} className={`row ${isExtended ? "expanded" : ""}`}>
                <div key={tag.tag} className="catwalk-row tag-row" >
                    <div className="green-stripe" />
                    <h3>
                        {tag.tag.toUpperCase()}
                    </h3>
                    {
                        this.getRowForTag(tag)
                    }
                    <div className="expand" onClick={this.toggleExpandClick}>
                        {isExtended ? <h1 style={{marginTop: "-3px", marginLeft: "1px"}}>-</h1> : <h1>+</h1> }
                    </div>
                </div>
                <PosedExpandedTagRow key={`${tag.tag}-extended-row`} pose={isExtended ? "open" : "closed"} />
            </div>
        )
    }
}

export default forwardRef((props, ref) => <TagRow {...props} innerRef={ref} />)
