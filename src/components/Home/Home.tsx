import React from 'react';
import ImageCarousel from '../ImageCarrousel/ImageCarousel';
import './Home.scss'

const Home: React.FC = () => {
  return (
    <div className='home-container'>
      <h1>Entendendo sobre o impacto de desperdícios de alimentos e fomentação de agricultura local</h1>
      <ImageCarousel />
    </div>
  );
};

export default Home;

