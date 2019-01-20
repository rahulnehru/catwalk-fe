import React from 'react';
import "./TagRow.css";
import ExpandedTagRow from "../ExtendedTagRow/ExpandedTagRow";

const TagRow = (props) => {

    /*
       props: tag ->
                  tag.key,
                  tag.name,
                  tag.components
                  -> tag.components.key/name/component/status
              isExtended -> Boolean
              togglExpandClick -> Function,
              components -> Array[String]
     */
    const {tag, isExtended, toggleExpandClick, components} = props;

    const getStatusButton = ({status, name}) =>
        status === "green" ?
            <div key={name} className="dot dot-green" /> :
            status === "yellow" ?
                <div key={name} className="dot dot-yellow" /> :
                <div key={name} className="dot dot-red" />;

    const getRowForTag = (tag) => {
        let row = [];
        for (let c of components) {
            let t = tag.components.find(o => o.component === c);
            if (t) row.push(getStatusButton(t));
            else row.push(<td/>);
        }
        return row;
    };

    return (
        <div className={`row ${isExtended ? "expanded" : ""}`}>
            <div key={tag.name} className="catwalk-row tag-row" >
                <div className="green-stripe" />
                <h3>
                    {tag.tag.toUpperCase()}
                </h3>
                {
                    getRowForTag(tag)
                }
                <div className="expand" onClick={() => toggleExpandClick(tag.key)}>
                    {isExtended ? <h1 style={{marginTop: "-3px", marginLeft: "1px"}}>-</h1> : <h1>+</h1> }
                </div>
            </div>
            {
                isExtended &&  <ExpandedTagRow />
            }
        </div>
    )
};

export default TagRow;