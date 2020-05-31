import React from 'react';
import { connect } from 'react-redux';
import {Container, Row, Col } from 'react-bootstrap';

const mapStateToProps = (state) => ({
  synthesisDoc: state.synthesis.synthesisDoc,
})

const Biologics = (props) => {
  const synthesis = props.synthesisDoc.data;
  return (
    <>
        <h3>Biologiques :</h3>
        <hr/>
      <Container>
        {synthesis && synthesis.biologics && synthesis.biologics.map((biologic ,key) => {
          return (
            <div key={key}>
            <Row>
            <Col>
              <p><strong>Date: </strong>{new Date(biologic.date).toLocaleString()}</p>
            </Col>
            <Col>
              <p><strong>Ajouté par: </strong> {biologic.addedBy}</p>
            </Col>
          </Row>
          <Row>
            <Col>
            <p><strong>Observation: </strong>{biologic.observation}</p>
            </Col>
            </Row>
          <Row>
          <Col>
          <p><strong>PCR: </strong>{biologic.pcr}</p>
          </Col>
          </Row>
          <Row>
            <Col>
              <p><strong>NFS: </strong></p>
            </Col>
            <Col>
              <p><strong>GB: </strong>{biologic.nfs.gb} 10 3 /mm 3</p>
              <p><strong>Hb: </strong>{biologic.nfs.hemoglobin.hb} g/dl</p>
              <p><strong>Plt: </strong>{biologic.nfs.plt} 10 3 /mm 3</p>
            </Col>
            <Col>
            <p><strong>PNN: </strong>{biologic.nfs.pnn} 10 3 /mm 3</p>
            <p><strong>VGM: </strong>{biologic.nfs.hemoglobin.vgm} μ 3</p>
            <p><strong>Hte: </strong>{biologic.nfs.hte} %</p>
            </Col>
            <Col>
            <p><strong>Lym: </strong>{biologic.nfs.lym} 10 3 /mm 3</p>
            <p><strong>CCMH: </strong>{biologic.nfs.hemoglobin.ccmh} g/dl</p>
            </Col>
          </Row>
          <Row>
            <Col><p><strong>Glycemie: </strong>{biologic.glycemie} g/l</p></Col>
            <Col><p><strong>Urée: </strong>{biologic.uree} g/l</p>  </Col>
            <Col><p><strong>Creatinine: </strong>{biologic.creatinine} g/l</p>  </Col>
            <Col><p><strong>TGO: </strong>{biologic.lym}Ui/l</p>  </Col>
            <Col><p><strong>TGP: </strong>{biologic.tgp}Ui/l</p> </Col>
          </Row>
          <Row>
          <Col><p><strong>Ionogramme sanguin: </strong> mmol/l</p></Col>
          <Col>
          <p><strong>Na: </strong>{biologic.ionogrammeSanguin.sodium} mmol/l</p>
          <p><strong>Ca++: </strong>{biologic.ionogrammeSanguin.calcium} mmol/l</p>
          </Col>
          <Col>
          <p><strong>K+: </strong>{biologic.ionogrammeSanguin.potassium} mmol/l</p>
          </Col>
          <Col>              
          <p><strong>Cl- :</strong>{biologic.ionogrammeSanguin.chlore} mmol/l</p>
          </Col>
          </Row> 
          <hr/>
            </div>
          
          )}
          )}
      </Container>
    </>
  )
}

export default connect(mapStateToProps, null)(Biologics);