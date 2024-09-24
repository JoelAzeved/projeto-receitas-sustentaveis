import React, { useState } from 'react';
import './ImageCarrousel.scss';

interface Slide {
  image?: string;
  text: string;
  isVideo?: boolean;
}

const slides: Slide[] = [
  {
    image: '/image1.jpeg',
    text: 'O desperdício de alimentos, especialmente frutas, gera um grande impacto no meio ambiente e na sociedade. Ao descartarmos frutas, não estamos apenas desperdiçando comida, mas também todos os recursos empregados em sua produção, como água, energia e solo. Calcula-se que cerca de um terço dos alimentos produzidos globalmente é desperdiçado, e esse descarte contribui para o aumento de gases de efeito estufa, pois os alimentos em decomposição liberam metano, um gás altamente nocivo ao clima.'
  },
  {
    image: '/image2.jpeg',
    text: 'Além do impacto ambiental, o desperdício de frutas agrava questões sociais, como a fome e a insegurança alimentar, já que alimentos que poderiam nutrir pessoas acabam sendo jogados fora. Reduzir o desperdício é crucial para preservar os recursos naturais, diminuir o impacto climático e promover uma distribuição mais equitativa dos alimentos. Aproveitar frutas ao máximo, reutilizando cascas e sementes, é uma forma eficiente de mitigar esses problemas.',
  },
  {
    image: '/image3.jpeg',
    text: 'A agricultura local é fundamental para a diminuição das emissões de CO2, especialmente no transporte de frutas. Quando as frutas são cultivadas e consumidas na mesma área, a distância para o consumidor é reduzida, resultando em menor uso de combustíveis fósseis e, consequentemente, menos emissões de gases poluentes.Além disso, práticas agrícolas sustentáveis, como o cultivo orgânico e a rotação de culturas, contribuem para a captura de carbono e melhoram a qualidade do solo.',
  },
  {
    isVideo: true,
    text: 'Aqui abaixo você pode encontrar uma receita para frutas que se encontra no estabelecimento com isso facilitar os bons hábitos e evitar desperdícios',
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
        {slides[currentIndex].isVideo ? (
          <iframe
            width="580"
            height="415"
            src="https://www.youtube.com/embed/JCbUZJoqAMg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
          />
        )}
        <div className="carousel__text">{slides[currentIndex].text}</div>
      </div>

      <button className="carousel__arrow right" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageCarousel;
