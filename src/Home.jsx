import React from 'react';
import Common from './Common';
import img from "../src/Images/img1.jpg";


const Home = () => {
  return (
    <>
      <Common name={"Grow your Business with"} imgsrc ={img} visit={"/service"} btnName = {"Get Started"} />
    </>
  );
}

export default Home
