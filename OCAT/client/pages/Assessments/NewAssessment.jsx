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
    <form onSubmit={handleSubmit(onSubmit)} method="post" action="/assessment/new">
      <div>
        Instrument Name
        <input type="text" {...register(`instrument`)} placeholder="eg: Cat Behavioral Instrument" />
      </div>
      <div>
        Cat Name
        <input type="text" {...register(`cat`)} placeholder="Cat Name..." />
      </div>
      <div>s
        Date of birth
        <input type="date" {...register(`birth`)} />
      </div>
      <ol>
        <li>
          Previous contact with the Cat Judicial System
          <div>
            <input type="radio" id="previousYes" {...register(`previous`)} value=1 />
            <label htmlFor="previousYes"> Yes </label>
          </div>
          <div>
            <input type="radio" id="previousNo" {...register(`previous`)} value=0 />
            <label htmlFor="previousNo"> No </label>
          </div>
        </li>
        <li>
          Physical alteractions with other cats
          <div>
            <input type="radio" id="lowCatAlteractions" {...register(`catAlteractions`)} value=0 />
            <label htmlFor="lowCatAlteractions"> 0 - 3 alteractions </label>
          </div>
          <div>
            <input type="radio" id="highCatAlteractions" {...register(`catAlteractions`)} value=1 />
            <label htmlFor="highCatAlteractions"> 3+ alteractions</label>
          </div>
        </li>
        <li>
          Physical altercations with owner (scratching, biting, etc...)
          <div>
            <input type="radio" id="lowOwnerAlteracions" {...register(`ownerAlteractions`)} value=0 />
            <label htmlFor="lowOwnerAlteractions"> 0 - 10 alteractions </label>
          </div>
          <div>
            <input type="radio" id="highOwnerAlteractions" {...register(`ownerAlteractions`)} value=1 />
            <label htmlFor="highOwnerAlteractions"> 10+ alteractions </label>
          </div>
        </li>
        <li>
          Plays well with dogs
          <div>
            <input type="radio" id="yesDogs" {...register(`dogs`)} value=0 />
            <label htmlFor="yesDogs"> Yes </label>
          </div>
          <div>
            <input type="radio" id="noDogs" {...register(`dogs`)} value=1 />
            <label htmlFor="noDogs"> No </label>
          </div>
        </li>
        <li>
          Hisses at strangers
          <div>
            <input type="radio" id="yesHiss" {...register(`hisses`)} value=1 />
            <label htmlFor="yesHiss"> Yes </label>
          </div>
          <div>
            <input type="radio" id="noHiss" {...register(`hisses`)} value=0 />
            <label htmlFor="noHiss"> No </label>
          </div>
        </li>
      </ol>
      <Button variant="primary" type="submit">Submit</Button>
    </form>
  );
};
