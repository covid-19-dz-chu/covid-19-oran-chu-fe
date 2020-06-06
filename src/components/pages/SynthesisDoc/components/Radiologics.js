import React from 'react';
import { connect } from 'react-redux';
import { Row , Col, Container } from 'react-bootstrap';
import { radioTypes } from '../constants/radio-types';

const mapStateToProps = (state) => ({
  synthesis: state.synthesis.synthesisDoc,
});

const Radiologics = (props) => {
  const synthesis = props.synthesis.data;
  return (
    <section>
      <h3>Radiologiques :</h3>
      <Container>
        {synthesis &&
          synthesis.radiologics &&
          synthesis.radiologics.map((radiologic, key) => {
            return (
              <div className="section-item" key={key}>
                <Row>
                  <Col>
                    <p>
                      <strong>Date: </strong>
                      {new Date(radiologic.date).toLocaleString('fr-FR')}
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <strong>Ajouté par: </strong>
                      {radiologic.addedBy}
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <strong>Type: </strong>
                      {radioTypes[radiologic.type] || '/'}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      <strong>Observation: </strong>
                      {radiologic.observation}
                    </p>
                  </Col>
                </Row>
                <hr />
              </div>
            );
          })}
      </Container>
    </section>
  );
};

export default connect(mapStateToProps, null)(Radiologics);
