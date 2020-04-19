import requests from './request';

export default {
  healthCheck: () => {
    return requests.get('health');
  },
}


