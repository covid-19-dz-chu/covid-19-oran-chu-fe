import React, { Component } from 'react';
import { connect } from 'react-redux';
import patientRequest from '../../../api/patients';
import { SYNTHESISDOC_PAGE_LOADED } from '../../../utils/constants/actionTypes';
import Personal from './components/Personal';

const mapStateToProps = (state) => ({
  synthesisDoc : state.synthesis.synthesisDoc || null,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload) => dispatch({ type: SYNTHESISDOC_PAGE_LOADED, payload : payload }),
});

class SynthesisDoc extends Component {
  constructor(props){
    super(props);
    
  }
  componentWillMount(){
    if(this.props.match.params) {
      return this.props.onLoad(patientRequest.getPatientSynthesisById(this.props.match.params.id));
    }
    return this.props.onLoad(null);    
  }

  print = () => {
    window.print();
  };

  render() {
    const synthesisDoc = this.props.synthesisDoc;
    
    if (synthesisDoc && synthesisDoc.data) {
      return (
        <div className="container">
            <div className="text-center">
              <p>Date : {new Date().toDateString()}</p>
            </div>
            <Personal/>
            <div>
              <h3>Radiologies :</h3>
              <hr/>
              { synthesisDoc.data && synthesisDoc.data.radiologics.map((radiologic) => {
                  return (
                    <div className="row"> 
                      <div className="col-4">
                        <p><strong>Date:</strong> {new Date(radiologic.date).toDateString()}</p>
                      </div>
                      <div className="col-4">
                        <p><strong>Ajouté par: </strong> - </p>
                      </div>
                      <div className="col-4">
                        <p><strong>Type radiologie: </strong> {radiologic.type}</p>
                      </div>
                      <div className="col-12">
                        <p><strong>Observation: </strong>{radiologic.observation}</p>
                      </div>
                    </div>
                  )
                })}
              
            </div>
            <div>
              <h3>Ecgs :</h3>
              <hr/>
              <div className="row">
              { synthesisDoc.data && synthesisDoc.data.ecgs.map((ecg) => {
                return (
                  <div>
                    <div className="col-4">
                    {}
                    </div>
                    <div className="col-4">
                    {}
                    </div>
                    <div className="col-4">
                    {}
                    </div>
                  </div>
                )
              })}
              </div>
            <div>
              <h3>Biologiques :</h3>
              <hr/>
              { synthesisDoc.data && synthesisDoc.data.biologics.map((biologic , key) => {
                return (
                  <div>
                    <div className="col-4">
                      <p><strong>Date: </strong></p>{new Date(biologic.date).toDateString()}
                    </div>
                    <div className="col-4">
                      <p><strong>Ajouté par: </strong> - </p>
                    </div>
                    <div className="col-4">
                      <p><strong>Observation: </strong>{biologic.observation}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div>
              <h3>Evolutions :</h3>
              <hr/>
              { synthesisDoc.data && synthesisDoc.data.evolutions.map((evolution) => {
                return (
                  <div>
                    <div className="col-4">
                      {}
                    </div>
                    <div className="col-4">
                      {}
                    </div>
                    <div className="col-4">
                      {}
                    </div>
                  </div>
                )
              })}

            </div>
            <div>
              <h3>Treatments :</h3>
              <hr/>
              { synthesisDoc.data && synthesisDoc.data.treatments.map((radiologic , key) => {
                return (
                  <div>
                    <div className="col-4">
                      {}
                    </div>
                    <div className="col-4">
                      {}
                    </div>
                    <div className="col-4">
                      {}
                    </div>
                  </div>
                )
              })}
            </div>
          
            <button className="btn btn-lg btn-primary pull-lg-right full-width" onClick={this.print}>Telecharger le document PDF</button>
        </div>
        </div>
      );
    }
    return (
      <div>
      </div>
    )
    
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(SynthesisDoc);
