"use client";
import React from "react";

const Login = () => {
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <main className="signupmain">
        <section className="headingSignUP">
          <center>QuackDocs</center>
        </section>
        <form action="post">
          <input type="text" name="" placeholder="Enter your name" id="name" />
          <br />
          <input
            type="password"
            name=""
            id="password"
            placeholder="Enter your password"
          />{" "}
          <br />
          <button type="button" onSubmit={submit}>
            Submit
          </button>
          <a href="/signup">
            <button type="button">Signup</button>
          </a>
        </form>
      </main>
    </div>
  );
};

export default Login;
