import React , { Component } from "react";
import { connect } from 'react-redux';
import patientsRequest from '../../../api/patients';
import { SYNTHESIS_PAGE_LOADED, SYNTHESIS_REQUESTED, UPDATE_FIELD_SYNTHESIS } from '../../../utils/constants/actionTypes';
import SynthesisBody from './synthesis-body';
import './styles/synthesis.css';


const mapStateToProps = (state) => ({
  synthesis:state.synthesis,
})

const mapDispatchToProps = (dispatch) => ({
  onLoad:() => dispatch({ type:SYNTHESIS_PAGE_LOADED }),
  onSubmit: (payload) => dispatch({ type:SYNTHESIS_REQUESTED , payload }),
  onChangeField: (key, value) => dispatch({ type: UPDATE_FIELD_SYNTHESIS, key, value }),
})

class Synthesis extends Component {
  componentWillMount(){
    this.props.onLoad();
  }

  validate = (credentials) =>  {
    const errors = {};
    if (!credentials.synthesisNum) {
      errors.synthesisNum = 'Veuillez introduire votre billet de salle';
    }
    return errors;
  }
  
  onSubmit = (ev) => {
    ev.preventDefault();
    console.log("submit");
    const errors = this.validate(this.props.synthesis);
    if (Object.keys(errors).length === 0){
      console.log('synthesis number' ,this.props.synthesis.synthesisNum);
      this.props.onSubmit(patientsRequest.getPatientByReference(this.props.synthesis.synthesisNum));
    }
  }

  render(){
    const { synthesisNum } = this.props.synthesis;
    return (
      <div>
        <h3>Recherche de patient</h3>
        <div className="synthesis-search">
          <form onSubmit={this.onSubmit}>
            <br/>
            <fieldset>  
              <label className="full-width form-label" htmlFor="patientNumber">Entrer le billet de salle</label>
              <div className="row">
                  <div className="col-10">
                    <input
                        className="form-control form-control-lg"
                        type="text"
                        value={synthesisNum}
                        onChange={(ev) => {this.props.onChangeField('synthesisNum' , ev.target.value)}}
                        placeholder="Entrer votre billet de salle"
                    />
                  </div>
                  <div className="col-2">
                      <button className="btn btn-lg btn-primary pull-lg-right full-width" type="submit">
                        <small>Search</small>
                      </button>
                  </div>
              </div>
            </fieldset>
          </form>
        </div>
        

        <SynthesisBody/>
      </div>
    )
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Synthesis);