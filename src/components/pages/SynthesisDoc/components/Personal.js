import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
  synthesis: state.synthesis.synthesisDoc || null,
});

const Personal = (props) => {
  const { age , nom , prenom , updatedAt , currentStatus} = props.synthesis.data;
  return (
    <div>
      <h3>Informations personnelles :</h3>
      <hr/>
      <div className="row">
        <div className="col-6">
                  <p><strong>Nom : </strong> {nom}</p>
                  <p><strong>Prenom : </strong> {prenom}</p>
                </div>
                <div className="col-6">
                  <p><strong>Age : </strong> {age}</p>
                  <p><strong>Mise a jour : { new Date(updatedAt).toDateString()}</strong></p>
                  <p><strong>Status Covid :</strong> {currentStatus.status}</p>
                </div>
        </div>
      </div>
  )
}

export default connect(mapStateToProps , {})(Personal);