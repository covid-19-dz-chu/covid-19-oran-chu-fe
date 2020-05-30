import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HOME_PAGE_LOADED } from '../../../utils/constants/actionTypes';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch({ type: HOME_PAGE_LOADED }),
});
class Home extends Component {
  componentWillMount() {
    this.props.onLoad();
  }

  render() {
    return (
      <div>
        <h3>Bureau</h3>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
