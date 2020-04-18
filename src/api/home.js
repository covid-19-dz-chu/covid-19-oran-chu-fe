import requests from './index';

export default {
  healthCheck: () => {
    return requests.get('health');
  },
}


