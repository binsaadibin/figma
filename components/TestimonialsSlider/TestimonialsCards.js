import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './TestimonialsCards.module.scss'; 
import Image from 'next/image';

const TestimonialsCards = () => {
  useEffect(() => {
    const handleResize = () => {
      const slides = document.querySelectorAll(`.${styles.carousel} .slick-slide`);
      if (slides) {
        slides.forEach((slide) => {
          slide.style.marginRight = '0px'; // Adjust the margin as needed
        });
      }
    };
    // Add event listener to adjust margin on window resize
    window.addEventListener('resize', handleResize);

    // Call the function to apply margin initially
    handleResize();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const slides = [
    {
         image: '/svg_files/Frame 1000002504.svg',
         heading:'Perry Brill',
          text: 'CEO SpexBot'
         },
    { 
        image: '/svg_files/Ellipse 440 (1).svg', 
        heading:'Perry Brill',
        text: 'CEO SpexBot' 
    },
    { 
        image: '/svg_files/Frame 1000002506.svg',
        heading:'Perry Brill',
        text: 'CEO SpexBot'
         },
         { 
            image: '/svg_files/Frame 1000002506.svg',
            heading:'Perry Brill',
            text: 'CEO SpexBot'
             },    
             { 
                image: '/svg_files/Frame 1000002506.svg',
                heading:'Perry Brill',
                text: 'CEO SpexBot'
                 },
                 { 
                    image: '/svg_files/Frame 1000002506.svg',
                    heading:'Perry Brill',
                    text: 'CEO SpexBot'
                     },
                     { 
                        image: '/svg_files/Frame 1000002506.svg',
                        heading:'Perry Brill',
                        text: 'CEO SpexBot'
                         },
                         { 
                            image: '/svg_files/Frame 1000002506.svg',
                            heading:'Perry Brill',
                            text: 'CEO SpexBot'
                             },

    // Add more objects for additional slides
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 9000,
    slidesToShow: 4, // Show 3 cards in large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0.1,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 992, // Tablet breakpoint
        settings: {
          slidesToShow: 3, // Show 2 cards in tablets
        },
      },
      {
        breakpoint: 576, // Mobile breakpoint
        settings: {
          slidesToShow: 2, // Show 1 card in mobile
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings} className={` ${styles.carousel}`}>
        {slides.map((slide, index) => (
          <div key={index} className={`${styles.slide}`}>
            <div className={styles.flexBox}> {/* Apply display: flex */}
              <div className={styles.boxOne}>
                <Image src={slide.image} alt={`Slide ${index + 1}`} width={50} height={50} className={styles.stackLogo} />
              </div>
              <div className={styles.boxTwo}>
                <h2>{slide.heading}</h2>
                <p>{slide.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
  
};

export default TestimonialsCards;
