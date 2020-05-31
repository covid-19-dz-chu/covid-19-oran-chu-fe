import React from 'react';
import { connect } from 'react-redux';
import { Container, Row , Col } from 'react-bootstrap';


const mapStateToProps = (state) => ({
  synthesis: state.synthesis.synthesisDoc || null,
})

const Treatments = (props) => {
  const synthesis = props.synthesis.data;

  return (
    <section>
    <h3>Traitements :</h3>
    <Container>
    { synthesis && synthesis.treatments && synthesis.treatments.map((treatment , key ) => {
      return (
        <div key={key}> 
          <Row>
            <Col>
              <p><strong>Date: </strong>{new Date(treatment.date).toLocaleString('fr-FR')}</p>
            </Col>
            <Col>
              <p><strong>Ajouté par:</strong> {treatment.addedBy}</p>
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
          <p><strong>Azithromycine: </strong>{treatment.azithromycine}</p>
          </Col>
          </Row>
          <Row>
          <Col>                      
          <p><strong>Autre: </strong>{treatment.autre}</p>
          </Col>
          </Row>
          <hr/>
        </div>
      )
  })}
    </Container>
    </section>
  )
} 

export default connect(mapStateToProps, null)(Treatments);