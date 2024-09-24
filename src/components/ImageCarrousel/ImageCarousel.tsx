import React, { useState } from 'react';
import './ImageCarrousel.scss';

interface Slide {
  image: string;
  text: string;
}

const slides: Slide[] = [
  {
    image: '/image1.jpeg',
    text: 'Sustainability is vital for our planet. Protecting the environment helps preserve natural resources for future generations. Small actions, like reducing waste, have a big impact on our health and the world.',
  },
  {
    image: '/image2.jpeg',
    text: 'Using fruits completely reduces waste. Every part of the fruit, from peel to pulp, can be used in some way, saving food and resources.',
  },
  {
    image: '/image3.jpeg',
    text: 'Food waste harms the environment. By using only what we need and preserving the rest, we can minimize our environmental impact.',
  }
];


const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel__arrow left" onClick={goToPrevious}>
        &#10094;
      </button>

      <div className="carousel__slide">
        <img src={slides[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
        <div className="carousel__text">{slides[currentIndex].text}</div>
      </div>

      <button className="carousel__arrow right" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageCarousel;
