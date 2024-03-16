// StackCardsSlider.jsx
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './stackCards.module.scss';
import Image from 'next/image';

const StackCardsSlider = () => {
  useEffect(() => {
    const handleResize = () => {
      const slides = document.querySelectorAll(`.${styles.carousel} .slick-slide`);
      if (slides) {
        slides.forEach((slide) => {
          slide.style.marginRight = '30px'; // Adjust the margin as needed
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 9000, // Adjust the speed of slide transition
    slidesToShow: 3, // Show 3 cards in large screens
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0.1, // Set autoplay speed to 0 for continuous sliding
    cssEase: 'linear',
    arrows:false, // Set linear easing for continuous sliding
    responsive: [
      {
        breakpoint: 992, // Tablet breakpoint
        settings: {
          slidesToShow: 1.8, // Show 2 cards in tablets
          slidesToScroll: 1, // Adjust the number of slides to scroll
        },
      },
      {
        breakpoint: 576, // Mobile breakpoint
        settings: {
          slidesToShow: 1, // Show 1 card in mobile
          slidesToScroll: 1, // Adjust the number of slides to scroll
        },
      },
    ],
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings} className={` ${styles.carousel}`}>
  {[...Array(8)].map((_, index) => (
    <div key={index} className={`me-5 ${styles.card}`}>
      <Image src="/svg_files/stackLogo.svg" alt="stackLogo.svg" width={50} height={50} className={styles.stackLogo} />
      <p>Finalists Webflow Partner Awards 2021 & 2022</p>
    </div>
  ))}
</Slider>

    </div>
  );
};

export default StackCardsSlider;
