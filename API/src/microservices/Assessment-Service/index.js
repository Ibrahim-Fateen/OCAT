const { Assessments } = require(`../Database`);

exports.submit = async (assessment) => {
  // use the bookshelf model Assessments from API/src/microservices/Database to save
  // the assessment data in the PostgreSQL database
  assessment.cat_data.created_at = new Date();
  const add_this = assessment.cat_data;

  Assessments.forge({
    score: add_this.score, risk_level: add_this.risk_level, cat_name: add_this.cat,
    cat_date_of_birth: add_this.birth, created_at: add_this.created_at,
  }).save();
};

exports.getList = () => {
  // use the bookshelf model Assessments from API/src/microservices/Database to fetch
  // the assessment data from the PostgreSQL database
  const assessments = [];

  return assessments;
};
