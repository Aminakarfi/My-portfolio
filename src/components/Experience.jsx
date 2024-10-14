import React, { useEffect, useState, useRef } from 'react';
import './Experience.css'; 

const Experience = () => {
  const [showContent, setShowContent] = useState(false);
  const experienceRef = useRef(null); 

  const handleScroll = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
       
        setShowContent(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll);
    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <section ref={experienceRef} className={`experience ${showContent ? 'show' : ''}`}>
      <h2>Contact</h2>
      <p>Name: Amina Karfi</p>
      <p>Age: 22</p>
      <h3>Experience</h3>
      <ul>
        <li>Diplome in Digital Development (2021/2023)</li>
        <li>Internship in IT Services (2023/2024)</li>
      </ul>
      <p>Phone Number: 0628649038</p>
    </section>
  );
};

export default Experience;
