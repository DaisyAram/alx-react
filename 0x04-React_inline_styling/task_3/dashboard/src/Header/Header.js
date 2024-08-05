import React from "react";
import logo from "../assets/holberton-logo.jpg";
import {StyleSheet, css} from "aphrodite";

const styles = StyleSheet.create ({
  "App-header": {
    font-size: 1.4rem;
    color: #e0354b;
    display: flex;
    align-items: center;
    border-bottom: 3px solid #e0354b;
  },
  img: {
    width: 200px;
    height: 200px;
  },
});

function Header() {
  return (
    <>
      <div className={css(styles["App-header"])}>
        <img src={logo} className={css(styles.img)} alt="logo" />
        <h1>School dashboard</h1>
      </div>
    </>
  );
}

export default Header;
