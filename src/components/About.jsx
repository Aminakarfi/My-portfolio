// src/components/About.js
import React from 'react';
import myImage from '../assets/IMG-20241008-WA0050.jpg';
import image2 from '../assets/1728847418367.jpg';
import image3 from '../assets/1728847418387.jpg';
import image4 from '../assets/1728847418406.jpg'

const About = () => {
  return (
    <section>
    <h2>About Me</h2>
    <p>
      Hi, my name is Amina Karfi. I am a web developer. I chose IT because it is a highly sought-after profession. I also enjoy thinking about the design of various IT projects and implementing them.
    </p>
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      <img 
        src={myImage} 
        alt="Code example" 
        style={{ width: '400px', height: 'auto', margin: '10px' }} // Adjust size and spacing
      />
      <img 
        src={image2} 
        alt="Code example 2" 
        style={{ width: '300px', height: 'auto', margin: '10px' }} 
      />
      <img 
        src={image3} 
        alt="Code example 3" 
        style={{ width: '300px', height: 'auto', margin: '10px' }} 
      />
      <img 
        src={image4} 
        alt="Code example 4" 
        style={{ width: '300px', height: 'auto', margin: '10px' }} 
      />
    </div>
  </section>
);
};
export default About;