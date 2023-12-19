import React from "react";
import Navbar from "./Navbar";
import JumpBotron from "./JumpBotron";
import Footer from "./Footer";
import Card from "./Card";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div class="container">
        <JumpBotron />
        <div className="d-flex row mx-auto mt-4 gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
