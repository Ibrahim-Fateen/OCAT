import Axios from '../utils/http.config';

export class AssessmentService {
  static submit(assessment, score, risk_level) {
    try {
      // Choose the correct method, url, and data to send
      // in a request to the express OCAT/server/routes/Assessment/index.js
      // NOTE: the http.config file automatically adds /api to the front of your url

      const cat_data = {
        birth: assessment.birth,
        cat: assessment.cat,
        risk_level,
        score,
      };

      console.log(cat_data);

      return Axios.post(`/assessment/submit`, { cat_data })
        .then(response => response.data);
    }
    catch (err) {
      console.log(err.response);
      throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
    }
  }

  static getList() {
    try {
      // Choose the correct method, url, and data to send
      // in a request to the express OCAT/server/routes/Assessment/index.js
      // NOTE: the http.config file automatically adds /api to the front of your url
      return Axios.METHOD(`/some-url`, {
        params: {
        },
      })
        .then(response => response.data.data.assessment);
    }
    catch (err) {
      throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
    }
  }
}
