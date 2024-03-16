import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const InlineStyleSlider = () => {
  const slideStyle = {
    backgroundColor: 'lightblue',
    border: '2px solid blue',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center'
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div style={slideStyle}>
        <h3>Slide 1</h3>
      </div>
      <div style={slideStyle}>
        <h3>Slide 2</h3>
      </div>
      <div style={slideStyle}>
        <h3>Slide 3</h3>
      </div>
    </Slider>
  );
};

export default InlineStyleSlider;
