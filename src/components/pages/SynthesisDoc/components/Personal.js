import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';

const mapStateToProps = (state) => ({
  synthesis: state.synthesis.synthesisDoc || null,
});

const Personal = (props) => {
  const { age , nom , prenom , updatedAt , currentStatus} = props.synthesis.data;
  return (
    <>
      <Container>
      <Row>
        <Col>
            <p><strong>Nom : </strong> {nom}</p>
        </Col>
        <Col>
            <p><strong>Prenom : </strong> {prenom}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p><strong>Age : </strong> {age}</p>
          <p><strong>Mise a jour : { new Date(updatedAt).toLocaleString()}</strong></p>
          <p><strong>Status Covid :</strong> {currentStatus.status}</p>
        </Col>
      </Row>
      </Container>
      </>
  )
}

export default connect(mapStateToProps, null)(Personal);