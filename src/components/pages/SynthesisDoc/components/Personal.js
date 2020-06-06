import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';

const mapStateToProps = (state) => ({
  synthesis: state.synthesis.synthesisDoc || null,
});

const Personal = (props) => {
  const { age, nom, prenom, updatedAt, currentStatus } = props.synthesis.data;
  return (
    <>
      <Container>
        <Row>
          <Col>
            <p>
              <strong>Nom et Prénom : </strong> {nom} {prenom}
            </p>
          </Col>
          <Col>
            <p>
              <strong>Age :</strong> {age}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <strong>Date d’admission :</strong>{' '}
              {new Date(updatedAt).toLocaleString('fr-FR')}
            </p>
          </Col>
          <Col>
            <p>
              <strong>Status Covid :</strong> {currentStatus.status}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default connect(mapStateToProps, null)(Personal);
