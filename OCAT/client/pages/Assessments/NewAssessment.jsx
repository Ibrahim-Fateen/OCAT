import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {

  // create a form that utilizes the "onSubmit" function to send data to OCAT/client/services/AssessmentService.js and
  // then onto the OCAT/server/routes/AssessmentAPI express API

  const history = useHistory();

  const { handleSubmit, register } = useForm();
  const onSubmit = async (data) => {
    AssessmentService.submit(data).then(response => {
      if (response === 1) {
        history.push(`/assessment/list`);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group row">
        <label htmlFor="cat" className="col-sm-2 col-form-label">
          Cat Name
        </label>
        <div className="col-sm-10">
          <input
            className="form-control"
            type="text"
            {...register(`cat`, { required: true })}
            placeholder="Cat Name..."
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="birth" className="col-sm-2 col-form-label">
          Date of birth
        </label>
        <div className="col-sm-10">
          <input className="form-control" type="date" {...register(`birth`, { required: true })} />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="assessment" className="col-sm-2">
          Assessment:
        </label>
        <ol name="assessment" className="col-sm-10">
          <div className="col-sm-10">
            <li>
              Previous contact with the Cat Judicial System
              <div className="form-group">
                <input type="radio"
                  className="form-check-input"
                  id="previousYes"
                  {...register(`previous`, { required: true })}
                  value="1"
                />
                <label className="form-check-label" htmlFor="previousYes"> Yes </label>
              </div>
              <div className="form-group">
                <input
                  type="radio"
                  className="form-check-input"
                  id="previousNo"
                  {...register(`previous`, { required: true })}
                  value="0"
                />
                <label className="form-check-label" htmlFor="previousNo"> No </label>
              </div>
            </li>
          </div>
          <div className="col-sm-10">
            <li>
              Physical altercations with other cats
              <div className="form-group">
                <input
                  type="radio" className="form-check-input"
                  id="lowCatAlteractions"
                  {...register(`catAlteractions`, { required: true })}
                  value="0"
                />
                <label className="form-check-label" htmlFor="lowCatAlteractions"> 0 - 3 alteractions </label>
              </div>
              <div className="form-group">
                <input
                  type="radio" className="form-check-input"
                  id="highCatAlteractions"
                  {...register(`catAlteractions`, { required: true })}
                  value="1"
                />
                <label className="form-check-label" htmlFor="highCatAlteractions"> 3+ alteractions</label>
              </div>
            </li>
          </div>
          <div className="col-sm-10">
            <li>
              Physical altercations with owner (scratching, biting, etc...)
              <div className="form-group">
                <input
                  type="radio" className="form-check-input"
                  id="lowOwnerAlteracions"
                  {...register(`ownerAlteractions`, { required: true })}
                  value="0"
                />
                <label className="form-check-label" htmlFor="lowOwnerAlteractions"> 0 - 10 alteractions </label>
              </div>
              <div className="form-group">
                <input
                  type="radio" className="form-check-input"
                  id="highOwnerAlteractions"
                  {...register(`ownerAlteractions`, { required: true })}
                  value="1"
                />
                <label className="form-check-label" htmlFor="highOwnerAlteractions"> 10+ alteractions </label>
              </div>
            </li>
          </div>
          <div className="col-sm-10">
            <li>
              Plays well with dogs
              <div className="form-group">
                <input
                  type="radio"
                  className="form-check-input"
                  id="yesDogs"
                  {...register(`dogs`, { required: true })}
                  value="0"
                />
                <label className="form-check-label" htmlFor="yesDogs"> Yes </label>
              </div>
              <div className="form-group">
                <input
                  type="radio"
                  className="form-check-input"
                  id="noDogs"
                  {...register(`dogs`, { required: true })}
                  value="1"
                />
                <label className="form-check-label" htmlFor="noDogs"> No </label>
              </div>
            </li>
          </div>
          <div className="col-sm-10">
            <li>
              Hisses at strangers
              <div className="form-group">
                <input
                  type="radio"
                  className="form-check-input"
                  id="yesHiss"
                  {...register(`hisses`, { required: true })}
                  value="1"
                />
                <label className="form-check-label" htmlFor="yesHiss"> Yes </label>
              </div>
              <div className="form-group">
                <input
                  type="radio"
                  className="form-check-input"
                  id="noHiss"
                  {...register(`hisses`, { required: true })}
                  value="0"
                />
                <label className="form-check-label" htmlFor="noHiss"> No </label>
              </div>
            </li>
          </div>
        </ol>
      </div>
      <Button variant="primary" type="submit">Submit</Button>
    </form>
  );
};
