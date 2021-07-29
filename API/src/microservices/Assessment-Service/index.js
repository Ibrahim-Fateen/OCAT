const { Assessments } = require(`../Database`);

exports.submit = async (assessment) => {
  // use the bookshelf model Assessments from API/src/microservices/Database to save
  // the assessment data in the PostgreSQL database
  assessment.cat_data.created_at = new Date();
  const add_this = assessment.cat_data;
  add_this.score = parseInt(assessment.cat_data.previous, 10);
  add_this.score += parseInt(assessment.cat_data.hisses, 10) + parseInt(assessment.cat_data.dogs, 10);
  add_this.score += parseInt(assessment.cat_data.ownerAlteractions, 10);
  add_this.score += parseInt(assessment.cat_data.catAlteractions, 10);

  if (add_this.score == 0 || add_this.score == 1) {
    add_this.risk_level = `low`;
  } else if (add_this.score == 2 || add_this.score == 3) {
    add_this.risk_level = `medium`;
  } else if (add_this.score == 4 || add_this.score == 5) {
    add_this.risk_level = `high`;
  }

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
