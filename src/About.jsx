import React from 'react';
import Common from './Common';
import img7 from "../src/Images/img7.jpg";


const About = () => {
  return (
    <>
      <Common name={"Welcome to About Page"} imgsrc ={img7} visit={"/contact"} btnName = {"Contact Now"} />
    </>
  );
}

export default About
