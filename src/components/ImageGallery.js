import React from 'react';
import './ImageGallery.css';

const ImageGallery = () => {
  const images = [
    {
      src: "/images/agriImage2.jpg",
      alt: "Farmers planting seeds in agricultural field",
      caption: "Seed Planting & Cultivation"
    },
    {
      src: "/images/agriImage3.jpg",
      alt: "People cultivating vegetable crops",
      caption: "Vegetable Crop Cultivation"
    },
    {
      src: "/images/ariImage4.jpg",
      alt: "Farmers harvesting crops from fields",
      caption: "Active Crop Harvesting"
    },
    {
      src: "/images/agriIamge5.jpg",
      alt: "People working in maize cultivation",
      caption: "Maize Farming Activities"
    },
    {
      src: "/images/agriIamge6.jpeg",
      alt: "Women farmers cultivating crops together",
      caption: "Community Crop Cultivation"
    },
    {
      src: "/images/agriIamge7.jpg",
      alt: "Young people engaged in agricultural planting",
      caption: "Youth Agricultural Training"
    }
  ];

  return (
    <section className="image-gallery">
      <div className="container">
        <h2>Our Community in Action</h2>
        <p className="gallery-subtitle">Real farmers from our community planting, cultivating, and harvesting crops across Northern Uganda</p>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <p>{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;