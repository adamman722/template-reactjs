import React from "react";

function Form() {
  return (
    <div>
      <form action="post">
        <div>
          <label htmlFor="user_first_name">First Name: </label>
          <br />
          <input type="text" id="user_first_name" name="user_first_name" />
        </div>
        <div>
          <label htmlFor="user_last_name">Last Name: </label>
          <br />
          <input type="text" id="user_last_name" name="user_last_name" />
        </div>
        <div>
          <label htmlFor="user_email">Email: </label>
          <br />
          <input type="email" name="user_email" id="user_email" />
        </div>
        <div>
          <label htmlFor="user_password">Password: </label>
          <br />
          <input type="password" name="user_password" id="user_password" />
        </div>
        <div>
          <label htmlFor="user_confirm_password">Confirm password: </label>
          <br />
          <input
            type="password"
            name="user_confirm_password"
            id="user_confirm_password"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
