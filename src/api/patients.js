import requests from './request';
import { request } from 'http';

export default {
  getPatients: () => {
    return requests.get(`patient/`);
  },
  getPatientByReference: (reference) => {
    return requests.get(`patient/?billetSalle=${reference}`);
  },
};
