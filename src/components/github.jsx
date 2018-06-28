import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class GitHub extends Component {
  render () {
    return (
      <div>
        <h2>Welcome to DappRank</h2>
        <p>
          <Link to="/about">Click Here</Link> to about us!
        </p>
      </div>
    )
  }
}
