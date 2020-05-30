import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  synthesis: state.synthesis.synthesisDoc || null,
});

const Ecgs = (props) => {
  
  const synthesis = props.synthesis;

  return (
    <div>
    <h3>Ecg :</h3>
    <hr/>
    {synthesis && synthesis.ecgs.map((ecg) => {
      return (
        <div className="row"> 
            <div className="col-4">
                        <p><strong>Date:</strong> {new Date(ecg.date).toDateString()}</p>
                      </div>
                      <div className="col-4">
                        <p><strong>Ajouté par: </strong> - </p>
                      </div>
                      <div className="col-4">
                        <p><strong>Type radiologie: </strong>{ecg.type}</p>
                      </div>
                      <div className="col-12">
                        <p><strong>Observation: </strong>{ecg.observation}</p>
            </div>
        </div>
      )}
    )}

    </div>
  )
}


export default connect(mapStateToProps, {})(Ecgs);
