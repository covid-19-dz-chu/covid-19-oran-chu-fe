import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

const mapStateToProps = (state) => ({
  synthesisDoc: state.synthesis.synthesisDoc || null,
});

const Ecgs = (props) => {
  const synthesis = props.synthesisDoc.data;

  return (
    <>
    <h3>Ecg :</h3>
    <hr/>
    <Container>
    {synthesis && synthesis.ecgs && synthesis.ecgs.map((ecg) => {
      return (
        <div>
        <Row> 
          <Col>
              <p><strong>Date:</strong> {new Date(ecg.date).toDateString()}</p>
          </Col>
          <Col>
              <p><strong>Ajouté par: </strong> - </p>
          </Col>
          <Col>
              <p><strong>QTC: </strong>{ecg.qtc}</p>
          </Col>
        </Row>
        <Row>
          <Col>
          <p><strong>Observation: </strong>{ecg.observation}</p>  
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


export default connect(mapStateToProps, null)(Ecgs);
