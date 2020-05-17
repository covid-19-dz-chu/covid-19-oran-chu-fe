import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  document: state.document,
});

const SynthesisDoc = (props) => {
  return (
    <div className="container">
      <h1>Synthesis doc</h1>
    </div>
  )
}

export default connect(mapStateToProps , {})(SynthesisDoc);
