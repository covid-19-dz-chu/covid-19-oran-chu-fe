import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

const mapStateToProps = (state) => ({
  synthesisDoc: state.synthesis.synthesisDoc || null,
});

const Ecgs = (props) => {
  const synthesis = props.synthesisDoc.data;

  return (
    <section>
      <h3>Ecg :</h3>
      <Container>
        {synthesis &&
          synthesis.ecgs &&
          synthesis.ecgs.map((ecg, key) => {
            return (
              <div className="section-item" key={key}>
                <Row>
                  <Col>
                    <p>
                      <strong>Date:</strong>{' '}
                      {new Date(ecg.date).toLocaleString('fr-FR')}
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <strong>Ajouté par: </strong> {ecg.addedBy}
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <strong>QTC: </strong>
                      {ecg.qtc}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      <strong>Observation: </strong>
                      {ecg.observation}
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

export default connect(mapStateToProps, null)(Ecgs);
