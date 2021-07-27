const { Assessments } = require(`../Database`);

exports.submit = async (assessment) => {
  // use the bookshelf model Assessments from API/src/microservices/Database to save
  // the assessment data in the PostgreSQL database
  const { score } = assessment;
  const { risk_level } = assessment;
  const { cat } = assessment;
  const { birth } = assessment;

  Assessments.save({
    score, risk_level, cat_name: cat, cat_date_of_birth: birth,
    created_at: Date.now(),
  });
};

exports.getList = () => {
  // use the bookshelf model Assessments from API/src/microservices/Database to fetch
  // the assessment data from the PostgreSQL database
  const assessments = [];

  return assessments;
};
