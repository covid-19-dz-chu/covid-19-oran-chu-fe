import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import patientRequest from '../../../api/patients';
import { SYNTHESISDOC_PAGE_LOADED } from '../../../utils/constants/actionTypes';
import Personal from './components/Personal';
import Biologics from './components/Biologics';
import Radiologics from './components/Radiologics';
import Ecgs from './components/Ecgs';
import Evolutions from './components/Evolutions';
import Treatements from './components/Treatments';

const mapStateToProps = (state) => ({
  synthesisDoc : state.synthesis.synthesisDoc || null,
  laoding : state.synthesis.loading,
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
        <div>
            <div className="text-center">
              <h3>Date: {new Date().toDateString()}</h3>
            </div>
            <button className="btn btn-lg btn-primary pull-lg-right full-width" onClick={this.print}>Telecharger le document PDF</button>
            <Personal/>
            <Evolutions/>
            <Biologics/>
            <Radiologics/>
            <Ecgs/>
            <Treatements/>
          
        </div>
      );
    }
    else if (this.props.loading){
      return (
        <Spinner animation="border" role="status">
            <span className="sr-only"></span>
        </Spinner>
       )
    }
    return (
      <div>
      
      </div>
    )
    
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(SynthesisDoc);
