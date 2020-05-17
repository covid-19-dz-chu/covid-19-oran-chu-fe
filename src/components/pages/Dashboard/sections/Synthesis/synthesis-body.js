import React from 'react';
import { connect } from 'react-redux';
import '../../styles/synthesis.css';


const mapStateToProps = (state) => ({
  synthesisBody: state.synthesis.synthesisBody || null,
});

const SynthesisBody = (props) => {
  const synthesis = props.synthesisBody;
    return (
      <div>
      {
        synthesis && synthesis.data.map((synthesis) => {
          return (
            <div className="synthesis-body">
              <h1>{ synthesis.syntheseuniteHospitalisation }</h1>
              <h2>{ synthesis.dateAdmission }</h2>
              <h2>{ synthesis.uuid }</h2>
              <h4>{ synthesis.age }</h4>
            </div>
            )
          }
        )
      }
      
      <div>
        <div className="synthesis-body">
          <h2>Hambouk g3oud f dar</h2>
          <h4>20</h4>
        </div>
        <div className="synthesis-body">
          <h2>Hambouk g3oud f dar</h2>
          <h4>19</h4>
        </div>
        <div className="synthesis-body">
          <h2>Hambouk g3oud f dar</h2>
          <h4>21</h4>
        </div>
      </div>
        
      </div>
    )
  }


export default connect(mapStateToProps,{})(SynthesisBody);