import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';

const mapStateToProps = (state) => ({
  synthesisDoc: state.synthesis.synthesisDoc,
});

const Evolutions = ( props ) => {
  const synthesis = props.synthesisDoc.data;
  
  return (
    <>
    <h3>Evolutions :</h3>
    <hr/>
    <Container>
    { synthesis && synthesis.evolutions && synthesis.evolutions.map((evolution) => {
      return (
          <div>
          <Row> 
                      <Col>
                        <p><strong>Date:</strong>{new Date(evolution.date).toDateString()}</p>
                      </Col>
                      <Col>
                        <p><strong>Ajouté par:</strong> - </p>
                      </Col>
                      <Col>
                        <p><strong>Type radiologie:</strong> {evolution.type}</p>
                      </Col>
          </Row>
          <Row>
            <Col>
              <p><strong>Observation:</strong> {evolution.observation}</p>
            </Col>
          </Row>
          <Row>
            <Col>
            <p><strong>Temperature:</strong> {evolution.temperature}</p>
            </Col>
            <Col>
            <p><strong>Tension arterielle:</strong> {evolution.tensionArterielle}</p>
            </Col>
            <Col>
            <p><strong>Frequence cardiaque:</strong> {evolution.frequenceCardiaque}</p>
            </Col>
          </Row>
          <Row>
            <Col>
            <p><strong>Frequence respiratoire:</strong> {evolution.frequenceRespiratoire}</p> 
            </Col>
          </Row>            
          <Row>
            <Col>
            <p><strong>SpO2 à l’air ambiant :</strong> {evolution.spO2AirAmbiant}</p>
            </Col>
          </Row>            
          <Row>
            <Col>
            <p><strong>SSpO2 sous O2 :</strong> {evolution.spO2AirAmbiant}</p>
            </Col>
          </Row>
          <Row>
            <Col>
            <p><strong>Dose d’O2 :</strong> {evolution.spO2AirAmbiant}</p>
            </Col>
          </Row>
          <Row>
            <Col>
            <p><strong>Bilan de contrôle :</strong> {evolution.bilanControle}</p>
            </Col>
          </Row>
          <hr/>
        </div>
        )
      })}
    </Container>
    </>
  )
}


export default connect(mapStateToProps, null)(Evolutions);
