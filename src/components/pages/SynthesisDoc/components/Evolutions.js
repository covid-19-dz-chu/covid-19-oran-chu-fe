import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  synthesis: state.synthesis.synthesisDoc || null,
});

const Radiologics = ( props ) => {

  const synthesis = props.synthesis;
  
  return (
    <div>
    <h3>Evolutions :</h3>
    <hr/>
    
    { synthesis && synthesis.evolutions.map((evolution) => {
      return (
          <div className="row"> 
                      <div className="col-4">
                        <p><strong>Date:</strong>{new Date(evolution.date).toDateString()}</p>
                      </div>
                      <div className="col-4">
                        <p><strong>Ajouté par:</strong> - </p>
                      </div>
                      <div className="col-4">
                        <p><strong>Type radiologie:</strong> {evolution.type}</p>
                      </div>
                      <div className="col-12">
                        <p><strong>Observation:</strong> {evolution.observation}</p>
                      </div>
          </div>
        )
      })}
    </div>
  )
}


export default connect(mapStateToProps, {})(Radiologics);
