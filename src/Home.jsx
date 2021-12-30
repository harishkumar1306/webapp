import React from "react";
import Common from "./Common";
import web from "./images/picture.jpg";

const Home = () => {
  return (
    <>
      <Common btnName="Get Started" visit="/service" name="10 Famous Apps Using ReactJS Nowadays" imgsrc={web} />
    </>
  );
};

export default Home;
