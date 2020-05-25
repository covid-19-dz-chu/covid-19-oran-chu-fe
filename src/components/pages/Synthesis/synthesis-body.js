import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import './styles/synthesis.css';


const mapStateToProps = (state) => ({
  synthesis: state.synthesis,
});

const SynthesisBody = (props) => {
  const { synthesisList , loading } = props.synthesis;
    if(synthesisList && synthesisList.data.length === 0) {
      return (
        <div>
          <small>Aucun patient trouvé.</small>
        </div>
      )
    }
    else if(synthesisList && synthesisList.data ) {
      return (
        <div>
        {
          synthesisList && synthesisList.data.map((synthesis , key) => {
            return (
              <div className="synthesis-body" key={key}>
                <h1>{ synthesis.syntheseuniteHospitalisation }</h1>
                <h2>{ synthesis.dateAdmission }</h2>
                <h4>{ synthesis.age }</h4>
                <Link to={`/dashbord/document/${synthesis.uuid}`}>Generer la synthese du patient</Link>
              </div>
              )
            }
          )
          
        }
      </div>
      )  
    }
    else if(loading) {
      return (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )
    }
    return (
      <div>
        <small>Veuillez entrer billet de salle du patient.</small>
      </div>
    )
    
  }


export default connect(mapStateToProps,{})(SynthesisBody);