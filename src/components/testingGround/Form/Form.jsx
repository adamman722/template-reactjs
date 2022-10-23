import React, { useEffect, useRef, useState } from "react";
import "./formStyles.css";

function Form() {
  const [data, setData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });
  const [pWordMatch, setPWordMatch] = useState(true);
  const fName = useRef("");
  const lName = useRef("");
  const email = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");

  function StoreData(e) {
    e.preventDefault();
    if (password === confirmPassword) {
      setData({
        fName: fName,
        lName: lName,
        email: email,
        password: password,
      });
      setPWordMatch(true);
    } else {
      setPWordMatch(!pWordMatch);
    }
  }
  const nonMatchingPWord = (
    <article>
      <h2>Your passwords do not match try again</h2>
    </article>
  );

  useEffect(() => {
    console.log(data, pWordMatch);
  }, [data, pWordMatch]);
  return (
    <div>
      <form>
        <div>
          <label htmlFor="user_first_name">First Name: </label>
          <br />
          <input
            ref={fName}
            type="text"
            id="user_first_name"
            name="user_first_name"
          />
        </div>
        <div>
          <label htmlFor="user_last_name">Last Name: </label>
          <br />
          <input
            ref={lName}
            type="text"
            id="user_last_name"
            name="user_last_name"
          />
        </div>
        <div>
          <label htmlFor="user_email">Email: </label>
          <br />
          <input ref={email} type="email" name="user_email" id="user_email" />
        </div>
        <div>
          <label htmlFor="user_password">Password: </label>
          <br />
          <input
            ref={password}
            type="password"
            name="user_password"
            id="user_password"
          />
        </div>
        <div>
          <label htmlFor="user_confirm_password">Confirm password: </label>
          <br />
          <input
            type="password"
            name="user_confirm_password"
            id="user_confirm_password"
            ref={confirmPassword}
          />
        </div>
        <div>
          <button onClick={StoreData}>Sign up</button>
        </div>
      </form>

      {pWordMatch && data.password !== "" ? true : null}
      {!pWordMatch ? nonMatchingPWord : null}
    </div>
  );
}

export default Form;
