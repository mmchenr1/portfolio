import React, { useState, useEffect } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Carousel = ({ items }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex); // Show the first slide when the component mounts
  }, []); // Empty dependency array ensures it only runs once after the initial render

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) n = 1; // Wrap to first slide
    if (n < 1) n = slides.length; // Wrap to last slide
    setSlideIndex(n);
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n - 1].style.display = "flex";
    dots[n - 1].className += " active";
  };

  return (
    <div className="slideshow-container">
      {items.map((slide, index) => (
        <Slide key={index} {...slide} />
      ))}

      <KeyboardArrowLeftIcon className="prev" onClick={() => plusSlides(-1)}/>
      <KeyboardArrowRightIcon className="next" onClick={() => plusSlides(1)}/>

      <div style={{ textAlign: 'center', marginTop: 20}}>
        {items.map((_, index) => (
          <span key={index} className="dot" onClick={() => currentSlide(index + 1)}></span>
        ))}
      </div>
    </div>
  );
};

function Slide(props) {
  if(props.video){
    return(
      <div className="mySlides fade">
      <video controls autoPlay muted>
        <source src={props.video} type="video/mp4" />
      </video>
    </div>
    )
  } else if(props.image){
    return(
      <div className="mySlides fade">
        <img className="slideImg" src={props.image} />
      </div>
    )
  } else {
    console.log("Unsupported format of carousel a element(s)")
  }
}

export default Carousel;
