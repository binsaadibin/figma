import React, { useState, useEffect } from 'react';
import Card from './Card';
import styles from './card.module.scss';

const CardList = () => {
  const [cardsToShow, setCardsToShow] = useState(3); // Number of cards to show initially

  useEffect(() => {
    const handleResize = () => {
      // Set number of cards to show based on screen size
      setCardsToShow(window.innerWidth <= 768 ? 3 : 8);
    };

    handleResize(); // Set initial number of cards to show based on window width
    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup the event listener
    };
  }, []);

  const handleViewMore = () => {
    setCardsToShow(8); // Show all cards when "View More" button is clicked
  };

  const cardsData = [
    { 
        title: 'Web Development', 
        content: 'By immersing ourselves wholeheartedly into your goals.By immersing ourselves wholeheartedly into your goals.',
        id: 1
    },
    { 
        title: 'Web Development', 
        content: 'By immersing ourselves wholeheartedly into your goals.By immersing ourselves wholeheartedly into your goals.',
        id: 2
    },
    { 
        title: 'Web Development', 
        content: 'By immersing ourselves wholeheartedly into your goals.By immersing ourselves wholeheartedly into your goals.',
        id: 3
    },
    { 
        title: 'Web Development', 
        content: 'By immersing ourselves wholeheartedly into your goals.By immersing ourselves wholeheartedly into your goals.',
        id: 4
    },
    { 
        title: 'Web Development', 
        content: 'By immersing ourselves wholeheartedly into your goals.By immersing ourselves wholeheartedly into your goals.',
        id: 5
    },
    { 
        title: 'Web Development', 
        content: 'By immersing ourselves wholeheartedly into your goals.By immersing ourselves wholeheartedly into your goals.',
        id: 6
    },
    { 
        title: 'Web Development', 
        content: 'By immersing ourselves wholeheartedly into your goals.By immersing ourselves wholeheartedly into your goals.',
        id: 7
    },
    { 
        title: 'Web Development', 
        content: 'By immersing ourselves wholeheartedly into your goals.By immersing ourselves wholeheartedly into your goals.',
        id: 8
    },
  ];

  return (
    <div className="container-fluid px-0">
      <div className="row mx-0">
        {/* Render cards based on the number to show */}
        {cardsData.slice(0, cardsToShow).map((card) => (
          <div className="col-12 col-md-6 mb-3 mb-md-3 px-0 px-md-2" key={card.id}>
            <Card title={card.title} content={card.content} />
          </div>
        ))}
        {/* Show "View More" button only if there are more cards to show */}
        {cardsToShow === 3 && (
          <div className="col-12 px-0">
            <div className="mb-3 mb-md-3 px-0 px-md-2">
              <button className={`btn ${styles.viewButton}`} onClick={handleViewMore}>View All</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardList;

