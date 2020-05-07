import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import homeRequest from '../../../api/home';
import { HOME_PAGE_LOADED } from '../../../utils/constants/actionTypes';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch({ type: HOME_PAGE_LOADED }),
});
class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.onLoad();
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
