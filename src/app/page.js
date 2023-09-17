import react from "react";

const Home = () => {
  return (
    <>
      <main>
        <section className="veryTopComponent">
          <section className="topHeading">
            <center>
              <h1>QuackDocs</h1>
            </center>
          </section>
          <a href="/signup">
            <button className="signUp">Signup</button>
          </a>
        </section>
        <section className="subHeading">
          <h3>Why us ?</h3>
        </section>
      </main>
    </>
  );
};

export default Home;
