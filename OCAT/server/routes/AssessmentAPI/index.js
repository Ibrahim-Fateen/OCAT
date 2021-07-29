const router = require(`express`).Router();
const { AssessmentService } = require(`../../libs`);

router.post(`/submit`, (req, res, next) => {
  try {
    // call the submit function from the server/libs/AssessmentService
    AssessmentService.submit(req.body);
  } catch (error) {
    next(error);
  }
});

router.get(`/list`, (req, res, next) => {
  try {
    // call the getList function from the server/libs/AssessmentService
    // return assessments to front-end
  } catch (error) {
    next(error);
  }
});

exports.router = router;
exports.path = `/api/assessment`;
