const { ResponseHandler } = require(`../../utils`);
const { UserService } = require(`../../microservices`);

const BASE_URL = `/user`;

module.exports = server => {
  server.post(
    `${BASE_URL}/login`,
    async (req, res, next) => {
      try {
        const { credentials } = req.body;

        // verify that your data is making it here to the API by using console.log(credentials);
        // call the UserService.login function from the API/src/microservices/UserService/ and
        // supply the correct parameters

        const token = await UserService.login(credentials);

        ResponseHandler(
          res,
          `Credentials Submitted`,
          { token },
          next,
        );
      }
      catch (err) {
        next(err);
      }
    },
  );
};
