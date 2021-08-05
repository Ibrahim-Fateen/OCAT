import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {

  // create a form that utilizes the "onSubmit" function to send data to OCAT/client/services/AssessmentService.js and
  // then onto the OCAT/server/routes/AssessmentAPI express API

  const { handleSubmit, register } = useForm();
  const onSubmit = async (data) => {
    await AssessmentService.submit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="form-group row">
        <label htmlFor="cat" class="col-sm-2 col-form-label">
          Cat Name
        </label>
        <div class="col-sm-10">
          <input class="form-control" type="text" {...register(`cat`)} placeholder="Cat Name..." />
        </div>
      </div>
      <div class="form-group row">
        <label htmlFor="birth" class="col-sm-2 col-form-label">
          Date of birth
        </label>
        <div class="col-sm-10">
          <input class="form-control" type="date" {...register(`birth`)} />
        </div>
      </div>
      <div class="form-group row">
        <label htmlFor="assessment" class="col-sm-2">
          Assessment:
        </label>
        <ol name="assessment" class="col-sm-10">
          <div class="col-sm-10">
            <li>
              Previous contact with the Cat Judicial System
              <div class="form-group">
                <input type="radio" class="form-check-input" id="previousYes" {...register(`previous`)} value="1" />
                <label class="form-check-label" htmlFor="previousYes"> Yes </label>
              </div>
              <div class="form-group">
                <input type="radio" class="form-check-input" id="previousNo" {...register(`previous`)} value="0" />
                <label class="form-check-label" htmlFor="previousNo"> No </label>
              </div>
            </li>
          </div>
          <div class="col-sm-10">
            <li>
              Physical altercations with other cats
              <div class="form-group">
                <input
                  type="radio" class="form-check-input"
                  id="lowCatAlteractions"
                  {...register(`catAlteractions`)}
                  value="0"
                />
                <label class="form-check-label" htmlFor="lowCatAlteractions"> 0 - 3 alteractions </label>
              </div>
              <div class="form-group">
                <input
                  type="radio" class="form-check-input"
                  id="highCatAlteractions"
                  {...register(`catAlteractions`)}
                  value="1"
                />
                <label class="form-check-label" htmlFor="highCatAlteractions"> 3+ alteractions</label>
              </div>
            </li>
          </div>
          <div class="col-sm-10">
            <li>
              Physical altercations with owner (scratching, biting, etc...)
              <div class="form-group">
                <input
                  type="radio" class="form-check-input"
                  id="lowOwnerAlteracions"
                  {...register(`ownerAlteractions`)}
                  value="0"
                />
                <label class="form-check-label" htmlFor="lowOwnerAlteractions"> 0 - 10 alteractions </label>
              </div>
              <div class="form-group">
                <input
                  type="radio" class="form-check-input"
                  id="highOwnerAlteractions"
                  {...register(`ownerAlteractions`)}
                  value="1"
                />
                <label class="form-check-label" htmlFor="highOwnerAlteractions"> 10+ alteractions </label>
              </div>
            </li>
          </div>
          <div class="col-sm-10">
            <li>
              Plays well with dogs
              <div class="form-group">
                <input type="radio" class="form-check-input" id="yesDogs" {...register(`dogs`)} value="0" />
                <label class="form-check-label" htmlFor="yesDogs"> Yes </label>
              </div>
              <div class="form-group">
                <input type="radio" class="form-check-input" id="noDogs" {...register(`dogs`)} value="1" />
                <label class="form-check-label" htmlFor="noDogs"> No </label>
              </div>
            </li>
          </div>
          <div class="col-sm-10">
            <li>
              Hisses at strangers
              <div class="form-group">
                <input type="radio" class="form-check-input" id="yesHiss" {...register(`hisses`)} value="1" />
                <label class="form-check-label" htmlFor="yesHiss"> Yes </label>
              </div>
              <div class="form-group">
                <input type="radio" class="form-check-input" id="noHiss" {...register(`hisses`)} value="0" />
                <label class="form-check-label" htmlFor="noHiss"> No </label>
              </div>
            </li>
          </div>
        </ol>
      </div>
      <Button variant="primary" type="submit">Submit</Button>
    </form>
  );
};
