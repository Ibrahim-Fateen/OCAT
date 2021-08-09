const { Assessments } = require(`../Database`);

exports.submit = async (assessment) => {
  // use the bookshelf model Assessments from API/src/microservices/Database to save
  // the assessment.assessment data in the PostgreSQL database
  assessment.assessment.created_at = new Date();
  const add_this = assessment.assessment;
  add_this.score = parseInt(assessment.assessment.previous, 10);
  add_this.score += parseInt(assessment.assessment.hisses, 10) + parseInt(assessment.assessment.dogs, 10);
  add_this.score += parseInt(assessment.assessment.ownerAlteractions, 10);
  add_this.score += parseInt(assessment.assessment.catAlteractions, 10);

  if (add_this.score == 0 || add_this.score == 1) {
    add_this.risk_level = `Low`;
  } else if (add_this.score == 2 || add_this.score == 3) {
    add_this.risk_level = `Medium`;
  } else if (add_this.score == 4 || add_this.score == 5) {
    add_this.risk_level = `High`;
  }

  Assessments.forge({
    cat_date_of_birth: add_this.birth,
    cat_name: add_this.cat,
    created_at: add_this.created_at,
    risk_level: add_this.risk_level,
    score: add_this.score,
  }).save();

  return 1;
};

exports.getList = () =>
  // use the bookshelf model Assessments from API/src/microservices/Database to fetch
  // the assessment.assessment data from the PostgreSQL database
  Assessments.where({ deleted_at: null }).orderBy(`id`, `ASC`).fetchAll().then((resData) => resData.serialize());

// export a delete function and soft-delete the assessment.assessment that matches the id sent.
exports.delete = (ids) => {
  // soft delete assessments that match the ids.
  const now = new Date();
  const dlt = ids.Selected;
  for (const id of dlt) {
    Assessments.where({ id }).save({ deleted_at: now }, { patch: true });
    console.log(`Deleted!`, id);
  }
  return 1;
};
