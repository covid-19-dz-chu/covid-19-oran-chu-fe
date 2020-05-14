import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  synthesisBody: state.synthesis.synthesisBody || null,
});

const SynthesisBody = (props) => {
  const synthesis = props.synthesisBody
  if(synthesis && synthesis.data && synthesis.data[0]){
    console.log('true')
    return (
      <div>
          <h3>Synthesis : </h3>
          <h1>{synthesis.data[0].syntheseuniteHospitalisation}</h1>
          <h2>{synthesis.data[0].dateAdmission}</h2>
          <h2>{synthesis.data[0].uuid}</h2>
          <h3>{synthesis.data[0].uuid}</h3>
          <h4>{synthesis.data[0].age}</h4>
      </div>
    )
  }
  return (
    <h3>Search for synthesis : </h3>
  )
  
}

export default connect(mapStateToProps,{})(SynthesisBody);