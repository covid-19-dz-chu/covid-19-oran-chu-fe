import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPDF from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import patientRequest from '../../../api/patients';
import { SYNTHESISDOC_PAGE_LOADED } from '../../../utils/constants/actionTypes';

const mapStateToProps = (state) => ({
  synthesisDoc : state.synthesis.synthesisDoc || null,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload) => dispatch({ type: SYNTHESISDOC_PAGE_LOADED, payload : payload }),
});

class SynthesisDoc extends Component {
  constructor(props){
    super(props);
    
  }
  componentWillMount(){
    if(this.props.match.params) {
      return this.props.onLoad(patientRequest.getPatientSynthesisById(this.props.match.params.id));
    }
    return this.props.onLoad(null);    
  }

  print = () => {
    window.print();
  };

  render() {
    const synthesisDoc = this.props.synthesisDoc;

    if(synthesisDoc && synthesisDoc.data) {
      return (
        <div className="container-float">
          <div className="row">
            <div className="col-6">
              <p><strong>Nom : </strong> {synthesisDoc.data.nom}</p>
              <p><strong>Prenom : </strong> {synthesisDoc.data.prenom}</p>
              <p><strong>Age : </strong> {synthesisDoc.data.age}</p>
              <p><strong>Mise a jour : </strong> {synthesisDoc.data.updatedAt}</p>
            </div>
            <div className="col-6">
              
            </div>
          </div>
          <button className="btn btn-lg btn-primary pull-lg-right full-width" onClick={this.print}>Telecharger le document PDF</button>
        </div>
      );
    }
    return (
      <div></div>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);


export default connect(mapStateToProps, mapDispatchToProps)(SynthesisDoc);
