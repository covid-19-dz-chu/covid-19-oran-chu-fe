import React from 'react';
import { connect } from 'react-redux';
import { Container, Row , Col } from 'react-bootstrap';


const mapStateToProps = (state) => ({
  synthesis: state.synthesis.synthesisDoc || null,
})

const Treatments = (props) => {
  const synthesis = props.synthesis;

  return (
    <>
    <h3>Traitements :</h3>
    <hr/>
    <Container>
    { synthesis.treatments && synthesis.treatments.data.map((treatment) => {
      return (
        <div> 
          <Row>
            <Col>
              <p><strong>Date: </strong>{new Date(treatment.date).toDateString()}</p>
            </Col>
            <Col>
              <p><strong>Ajouté par:</strong> - </p>
            </Col>
            <Col>
              <p><strong>Type radiologie: </strong>{treatment.type}</p>
            </Col>
          </Row>
          <Row>
            <Col>
            <p><strong>Observation: </strong>{treatment.observation}</p>
            </Col>
          </Row>
          <Row>
          <Col>
          <p><strong>Hydroxychloroquine: </strong>{treatment.hydroxychloroquine}</p>
          </Col>
          </Row>
          <Row>
          <Col>
          <p><strong>Chloroquine: </strong>{treatment.chloroquine}</p>
          </Col>
          </Row>
          <Row>
          <Col>
          <p><strong>Chloroquine: </strong>{treatment.azithromycine}</p>
          </Col>
          </Row>
          <Row>
          <Col>                      
          <p><strong>Chloroquine: </strong>{treatment.autre}</p>
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

export default connect(mapStateToProps, null)(Treatments);