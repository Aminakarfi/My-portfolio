import React, { useEffect, useState } from 'react';
import './Header.css'

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className={`header ${showHeader ? 'show' : ''}`}>
      <h1>Portfolio De Amina Karfi</h1>
    </header>
  );
};

export default Header;
