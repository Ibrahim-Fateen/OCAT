const { client, config } = require(`../../utils`);
const { InternalServerError } = require(`restify-errors`);

exports.submit = (assessment) => new Promise((resolve, reject) => {
  // this function sends a request to the API
  // finish the logic to handle the response when returned from the API
  client.post(`/assessment/submit`, { assessment },
    (err, req, res, body) => {
      if (err) {
        return reject(err);
      }

      if (res.statusCode !== 200) {
        return reject(new InternalServerError(`Request Error`));
      }

      resolve(body.data.returned);
    });
});

exports.getList = () => new Promise((resolve, reject) => {
  // this function sends a request to the API
  // finish the logic to handle the response when returned from the API
  client.get(`/assessment/list`,
    (err, req, res, body) => {
      if (err) {
        return reject(err);
      }

      if (res.statusCode !== 200) {
        return reject(new InternalServerError(`Request Error`));
      }

      resolve(body.data.assessments);
    });
});

// export delete function and send a request to the api '/assessment/delete'
exports.delete = (ids) => new Promise((resolve, reject) => {
  client.post(`/assessment/delete`, { ids },
    (err, req, res, body) => {
      if (err) {
        return reject(err);
      }

      if (res.statusCode !== 200) {
        return reject(new InternalServerError(`Request Error`));
      }

      resolve(body.data);
    });
});
