import React from 'react';
import {connect} from 'react-redux';


const mapStateTopProps = (state) => ({
  appName:state.app.appName,
})

const TopBar = (props) => {
  return (
    <div>
      <div className="application-header">
        <h1>{props.appName}</h1>
        <p>Un message ici</p>
      </div>
      <hr/>
    </div>
  )
}

export default connect(mapStateTopProps, null)(TopBar);