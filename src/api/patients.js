import requests from './request';

export default {
  getPatients: () => {
    return requests.get(`patient/`);
  },
  getPatientByReference: (reference) => {
    return requests.get(`api/v1/patient/?billetSalle=${reference}`);
  },
  getPatientSynthesisById: (id) => {
    return requests.get(`api/v1/patient/synthesis/${id}`);
  },
};
