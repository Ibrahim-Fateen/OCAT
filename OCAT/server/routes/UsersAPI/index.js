const router = require(`express`).Router();
const { UserService } = require(`../../libs`);

router.post(`/login`, async (req, res, next) => {
  try {
    // call the login function from the server/libs/UserService
    const token = await UserService.login(req.body);
    res
      .status(200)
      .json({ token });
  } catch (error) {
    next(error);
  }
});

exports.router = router;
exports.path = `/api/users`;
