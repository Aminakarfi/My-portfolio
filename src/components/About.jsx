import React, { useEffect, useState, useRef } from 'react';
import myImage from '../assets/IMG-20241008-WA0050.jpg';
import image2 from '../assets/1728847418367.jpg';
import image3 from '../assets/1728847418387.jpg';
import image4 from '../assets/1728847418406.jpg';
import './About.css'; 

const About = () => {
  const [showImages, setShowImages] = useState([false, false, false, false]);
  const aboutRef = useRef(null); 

  const handleScroll = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
       
        setShowImages([false, false, false, false]);
        setTimeout(() => {
          setShowImages([true, true, false, false]);
        }, 1000); 
        setTimeout(() => {
          setShowImages([true, true, true, true]);
        }, 2000);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll);
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section ref={aboutRef}>
      <h2>About Me</h2>
      <p>
        Hi, my name is Amina Karfi. Full Stack Developer ..
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <img 
          src={myImage} 
          alt="Code example" 
          className={`image-slide left ${showImages[0] ? 'show' : ''}`}
          style={{ width: '400px', height: 'auto', margin: '10px' }} 
        />
        <img 
          src={image2} 
          alt="Code example 2" 
          className={`image-slide left ${showImages[1] ? 'show' : ''}`}
          style={{ width: '300px', height: 'auto', margin: '10px' }} 
        />
        <img 
          src={image3} 
          alt="Code example 3" 
          className={`image-slide right ${showImages[2] ? 'show' : ''}`}
          style={{ width: '300px', height: 'auto', margin: '10px' }} 
        />
        <img 
          src={image4} 
          alt="Code example 4" 
          className={`image-slide right ${showImages[3] ? 'show' : ''}`}
          style={{ width: '300px', height: 'auto', margin: '10px' }} 
        />
      </div>
    </section>
  );
};

export default About;
