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
        

        {synthesis && synthesis.biologics && synthesis.biologics.map((biologic) => {
          return (
            <div>
            <Row>
            <Col>
              <p><strong>Date: </strong>{new Date(biologic.date).toDateString()}</p>
            </Col>
            <Col>
              <p><strong>Ajouté par: </strong> - </p>
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
              <p><strong>GB: </strong>{biologic.nfs.gb}</p>
              <p><strong>Hb: </strong>{biologic.nfs.hemoglobin.hb}</p>
              <p><strong>Plt: </strong>{biologic.nfs.plt}</p>
            </Col>
            <Col>
            <p><strong>PNN: </strong>{biologic.nfs.pnn}</p>
            <p><strong>VGM: </strong>{biologic.nfs.hemoglobin.vgm}</p>
            <p><strong>Hte: </strong>{biologic.nfs.hte}</p>
            </Col>
            <Col>
            <p><strong>PNN: </strong>{biologic.nfs.pnn}</p>
            <p><strong>VGM: </strong>{biologic.nfs.hemoglobin.vgm}</p>
            <p><strong>Hte: </strong>{biologic.nfs.hte}</p>
            </Col>
            <Col>
            <p><strong>Lym: </strong>{biologic.nfs.lym}</p>
            <p><strong>CCMH: </strong>{biologic.nfs.hemoglobin.ccmh}</p>
            </Col>
          </Row>
          <Row>
            <Col><p><strong>Glycemie: </strong>{biologic.glycemie}</p></Col>
            <Col><p><strong>Urée: </strong>{biologic.uree}</p>  </Col>
            <Col><p><strong>Creatinine: </strong>{biologic.creatinine}</p>  </Col>
            <Col><p><strong>TGO: </strong>{biologic.lym}</p>  </Col>
            <Col><p><strong>TGP: </strong>{biologic.tgp}</p> </Col>
          </Row>
          <Row>
          <Col><p><strong>Ionogramme sanguin: </strong></p></Col>
          <Col>
          <p><strong>Na: </strong>{biologic.ionogrammeSanguin.sodium}</p>
          <p><strong>Ca++: </strong>{biologic.ionogrammeSanguin.calcium}</p>
          </Col>
          <Col>
          <p><strong>K+: </strong>{biologic.ionogrammeSanguin.potassium}</p>
          </Col>
          <Col>              
          <p><strong>Cl- :</strong>{biologic.ionogrammeSanguin.chlore}</p>
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