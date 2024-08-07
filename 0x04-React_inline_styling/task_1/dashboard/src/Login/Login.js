import React from "react";
import {StyleSheet, css} from "aphrodite";

const styles = StleSheet.create({
  App-body: {
    font-size: 1rem;
    padding: 2em;
    border-bottom: 3px solid #e0354b;
    height: 45%;
  },

  input: {
    margin: 10px;
  },
});

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
	  <input className={css(stles.input)} type="email" name="email"></input>
          <label htmlFor="password">Password:</label>
          <input className={css(stles.input)} type="password" name="password"></input>
          <button>OK</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
