
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const images = [
    "/truk jaya laksana 1.jpg",
    "/truk jaya laksana 2.jpg",
    "/truk jaya laksana 3.jpg",
    "/truk jaya laksana 4.jpg"
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Dokumentasi</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-2">
            <img src={image} alt={`truk jaya laksana ${index + 1}`} className="w-full h-auto rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageGallery;
