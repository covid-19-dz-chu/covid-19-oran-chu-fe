import React from 'react';
import { connect } from 'react-redux';
import { Row , Col, Container } from 'react-bootstrap';


const mapStateToProps = (state) => ({
  synthesis: state.synthesis.synthesisDoc,
});

const Radiologics = (props) => {
  const synthesis = props.synthesis.data;
  return (
    <>
    <h3>Radiologies :</h3>
    <hr/>
    <Container>
    { synthesis && synthesis.radiologics && synthesis.radiologics.map((radiologic , key) => {
      return (
          <div key={key}>
            <Row> 
                    <Col>
                      <p><strong>Date: </strong>{new Date(radiologic.date).toLocaleString()}</p>
                    </Col>
                    <Col>
                      <p><strong>Ajouté par: </strong>{radiologic.addedBy}</p>
                    </Col>
                    <Col>
                      <p><strong>Type radiologie: </strong>{radiologic.type}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p><strong>Observation: </strong>{radiologic.observation}</p>
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


export default connect(mapStateToProps, null)(Radiologics);
