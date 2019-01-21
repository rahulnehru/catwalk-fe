import React, {forwardRef} from 'react';
import "./ExpandedTagRow.css";

const ExpandedTagRow = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="expanded-tag-row">
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
    )
});

export default ExpandedTagRow;