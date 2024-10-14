import React, { useEffect, useState } from 'react';
import './Projects.css'; 


import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import image9 from '../assets/image9.jpg';

const projectsData = [
    {
      title: 'Project 1',
      description: 'A web page  for sharing and managing quotes . Users can create posts (quotes) and view all existing posts. It also allow users to create author profiles', // Add your description here
      images: [image1, image2, image3],
    },
    {
      title: 'Project 2',
      description: ' This is the homepage of an online store sells a variety of products, including watches .Visitors can use the search bar to find specific items.', // Add your description here
      images: [image4, image5, image6],
    },
    {
      title: 'Project 3',
      description: 'This is the homepage of a restaurant called "Delicious." The restaurant offers a modern dining experience with a focus on refined cuisine. Visitors can view the menu, book a table, and learn more about the restaurant on this page.', // Add your description here
      images: [image7, image8, image9],
    },
  ];
  
const Projects = () => {
    return (
      <section style={{ padding: '20px', backgroundColor: '#d2b48c' }}>
        <h2 style={{ color: '#8b4513' }}>My Projects</h2>
        {projectsData.map((project, index) => (
          <div key={index} style={{ marginBottom: '40px', padding: '15px', border: '1px solid #8b4513', borderRadius: '8px', backgroundColor: '#f5f5f5' }}>
            <h3 style={{ color: '#5c3a29' }}>{project.title}</h3>
            <p style={{ color: '#4b3d30', fontSize: '1.1rem', margin: '10px 0' }}>{project.description}</p>
            <Carousel images={project.images} />
          </div>
        ))}
      </section>
    );
  };

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
            <img
              src={image}
              alt={`Project image ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
