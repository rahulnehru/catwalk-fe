import React, { forwardRef } from 'react';

import './style.css';
import ticketDummyApiResponseJson from '../../api/tickets-dummy-api_json';

const getColorFromJiraState = deployable => (deployable ? 'dot dot-green small' : 'dot dot-red small');

const ExpandedTagRow = forwardRef((props, ref) => (
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
          <td width="5%" />
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
        {
          ticketDummyApiResponseJson(2).map(s => (
            <tr>
              <td><div key={s.key} className={getColorFromJiraState(s.deployable)} /></td>
              <td>{s.ticket}</td>
              <td>{s.team}</td>
              <td>{s.description}</td>
              <td>{s.status}</td>
              <td>{s.reporter}</td>
              <td>{s.assignee}</td>
              <td>{s.featureState}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    <hr className="expanded-tag-row-bottom-hr" />
  </div>
));

export default ExpandedTagRow;
