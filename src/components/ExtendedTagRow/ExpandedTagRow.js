import React, {forwardRef} from 'react';
import "./ExpandedTagRow.css";

const ExpandedTagRow = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="expanded-tag-row">
            <hr className="catwalk-hr" />
            <h1 className="expanded-tag-row-h1"> RELEASE NOTES </h1>
            <h2 className="expanded-tag-row-h2"> OVERVIEW </h2>
            <div className="expanded-tag-row-contacts">
                <div className="contacts">
                    <b>Lead Contact</b>
                    <p>Contact Name</p>
                    <p>Mobile</p>
                    <p>Email</p>
                </div>
            </div>
            <table className="expanded-tag-row-tickets">
                <thead>
                <tr>
                    <td width="10%">TICKET</td>
                    <td width="10%">TEAM</td>
                    <td width="30%">DESCRIPTION</td>
                    <td width="10%">STATUS</td>
                    <td width="10%">REPORTER</td>
                    <td width="10">ASSIGNEE</td>
                    <td width="10%">FEATURE STATE</td>
                </tr>
                </thead>
                <tbody className="expanded-tag-row-tbody">
                <tr>
                    <td>DJ-12345</td>
                    <td>Team 1</td>
                    <td>SET(O) - Turn on product</td>
                    <td>Development Done</td>
                    <td>Chris Sutton</td>
                    <td>Carrie-Lyn Kane</td>
                    <td>On</td>
                </tr>
                <tr>
                    <td>DJ-39483</td>
                    <td>Team 1</td>
                    <td>SET(F) - Turn on product</td>
                    <td>Amazing</td>
                    <td>Chris Sutton</td>
                    <td>Rahul Nehru</td>
                    <td>On</td>
                </tr>
                </tbody>
            </table>
            <hr className="expanded-tag-row-bottom-hr" />
        </div>
    )
});

export default ExpandedTagRow;