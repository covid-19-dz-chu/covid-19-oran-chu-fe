import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
  synthesisDoc: state.synthesis.synthesisDoc || null,
})

const Biologics = ( props ) => {
  const synthesis = props.synthesisDoc? props.synthesisDoc.data : null;
  return (
    <div>
      <div>
        <h3>Biologiques :</h3>
        
        {synthesis && synthesis.biologics.map((biologic) => {
          return (
            <div className="row">
              <div className="col-6">
                <p><strong>Date: </strong>{new Date(biologic.date).toDateString()}</p>
              </div>
              <div className="col-6">
                <p><strong>Ajouté par: </strong> - </p>
              </div>
              <div className="col-12">
                <p><strong>Observation: </strong>{biologic.observation}</p>
              </div>
              <div className="col-12">
                <p><strong>Observation: </strong>{biologic.pcr}</p>
              </div>
              <div className="col-3">
              <p><strong>NFS: </strong></p>
              </div>
              <div className="col-3">
              <p><strong>GB: </strong>{biologic.nfs.gb}</p>
              <p><strong>Hb: </strong>{biologic.nfs.hemoglobin.hb}</p>
              <p><strong>Plt: </strong>{biologic.nfs.plt}</p>
              </div>
              <div className="col-3">
              <p><strong>PNN: </strong>{biologic.nfs.pnn}</p>
              <p><strong>VGM: </strong>{biologic.nfs.hemoglobin.vgm}</p>
              <p><strong>Hte: </strong>{biologic.nfs.hte}</p>
              </div>
              <div className="col-3">
              <p><strong>Lym: </strong>{biologic.nfs.lym}</p>
              <p><strong>CCMH: </strong>{biologic.nfs.hemoglobin.ccmh}</p>
             
              </div>
              <div className="col-3">
                <p><strong>Glycemie: </strong>{biologic.glycemie}</p>     
              </div>
              <div className="col-2">
                <p><strong>Urée: </strong>{biologic.uree}</p>     
              </div>
              <div className="col-2">
                <p><strong>Creatinine: </strong>{biologic.creatinine}</p>     
              </div>
              <div className="col-2">
                <p><strong>TGO: </strong>{biologic.lym}</p>     
              </div>
              <div className="col-3">
                <p><strong>TGP: </strong>{biologic.tgp}</p>     
              </div>
              <div className="col-3">
                <p><strong>Ionogramme sanguin: </strong></p>
              </div>
              <div className="col-3">
                <p><strong>Na: </strong>{biologic.ionogrammeSanguin.sodium}</p>
                <p><strong>Ca++: </strong>{biologic.ionogrammeSanguin.calcium}</p>
              </div>
              <div className="col-3">
                <p><strong>K+: </strong>{biologic.ionogrammeSanguin.potassium}</p>
              
              </div>
              <div className="col-3">
                <p><strong>Cl-: </strong>{biologic.ionogrammeSanguin.chlore}</p>
              </div>
              </div>
          )}
          )}
      </div>
    </div>
  )
}

export default connect(mapStateToProps , {})(Biologics);