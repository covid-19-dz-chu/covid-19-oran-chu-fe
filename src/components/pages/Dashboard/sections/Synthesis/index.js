import React , { Component } from "react";
import { connect } from 'react-redux';
import patientsRequest from '../../../../../api/patients';
import { SYNTHESIS_PAGE_LOADED, SYNTHESIS_REQUESTED } from '../../../../../utils/constants/actionTypes';


const mapStateToProps = (state) => ({
  synthesis:state.synthesis,
})

const mapDispatchToProps = (dispatch) => ({
  onLoad:() => dispatch({type:SYNTHESIS_PAGE_LOADED}),
  onSubmit: (payload) => dispatch({ type:SYNTHESIS_REQUESTED , payload }),
  onChangeField: (key, value) => dispatch({ type: null, key, value }),
})

class Synthesis extends Component {
  componentWillMount(){
    //
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
    this.props.onSubmit(patientsRequest.getPatientByReference());
  }

  render(){
    // const { synthesisNum } = this.props.synthesis;
    return (
      <div>
        <h1>Synthesis</h1>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <label htmlFor="patientNumber">
              Entrer le billet de salle
            </label>
            <br />
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Entrer votre billet de salle"
            />
          </fieldset>
          <br />
          <button
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Synthesis);