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

router.get(`/list`, async (req, res, next) => {
  try {
    // call the getList function from the server/libs/AssessmentService
    // return assessments to front-end
    const assessments = await AssessmentService.getList();
    res
      .status(200)
      .json({ assessments });
  } catch (error) {
    next(error);
  }
});

// add a post request '/delete' and call delete function from server/libs/AssessmentService
router.post(`/delete`, async (req, res, next) => {
  try {
    const status = await AssessmentService.delete(req.body.ids);
    res
      .status(200)
      .json({ status });
  } catch (error) {
    next(error);
  }
});

exports.router = router;
exports.path = `/api/assessment`;
