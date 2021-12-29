import React from 'react'
import Common from './Common';
import web from "./images/picture.jpg"


const About = () => {
    return (
        <>
          <Common btnName="Contact Now" visit="/contact" name="Welcome to About page" imgsrc={web} />
        </>
    )
}

export default About;
