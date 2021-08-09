import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import { loginService } from '../../services/LoginService';

export const Login = () => {

  const { handleSubmit, register } = useForm();
  const history = useHistory();
  const onSubmit = async (data) => {
    const response = await loginService.submit(data);
    if (response == `wrong password`) {
      // change passwordHelpBlock to display wrong password
      document.getElementById(`passwordHelpBlock`).innerHTML = `Wrong Password`;
    } else if (response == `user not found`) {
      // change usernameHelpBlock to display username not found
      document.getElementById(`usernameHelpBlock`).innerHTML = `Username not found`;
    } else if (response == 1) {
      history.push(`/assessment/list`);
      window.location.reload(true);
    }

  };

  return (
    <div className="login-wrapper">
      <h1>
        Login
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" placeholder="Username" {...register(`username`)} />
          <small id="usernameHelpBlock" className="form-text text-muted" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            {...register(`password`)}
          />
          <small id="passwordHelpBlock" className="form-text text-muted" />
        </div>
        <Button variant="primary" type="submit">Login</Button>
      </form>
    </div>
  );
};

export const Logout = () => {
  localStorage.token = 0;
  const history = useHistory();
  history.push(`/login`);
  window.location.reload(true);
};
