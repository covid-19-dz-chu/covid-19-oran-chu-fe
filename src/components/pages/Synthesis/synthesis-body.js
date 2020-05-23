import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles/synthesis.css';


const mapStateToProps = (state) => ({
  synthesisList: state.synthesis.synthesisList || null,
});

const SynthesisBody = (props) => {
  const synthesis = props.synthesisList;
    if(synthesis && synthesis.data.length === 0) {
      return (
        <div>
          <small>Aucun patient trouvé.</small>
        </div>
      )
    }
    else if(synthesis && synthesis.data ) {
      return (
        <div>
        {
          synthesis && synthesis.data.map((synthesis , key) => {
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
    return (
      <div>
        <small>Veuillez entrer billet de salle du patient.</small>
      </div>
    )
    
  }


export default connect(mapStateToProps,{})(SynthesisBody);