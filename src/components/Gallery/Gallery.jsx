import React from "react";
import "./Gallery.css";

import Img1 from "../../imagesGallery/photo1.png";
import Img2 from "../../imagesGallery/photo2.png";
import Img3 from "../../imagesGallery/photo3.png";
import Img4 from "../../imagesGallery/photo4.png";
import Img5 from "../../imagesGallery/photo5.png";
import Img6 from "../../imagesGallery/photo6.png";
// import Img1 from "../../imagesGallery/photo1.png";
// import Img2 from "../../imagesGallery/photo2.png";
// import Img3 from "../../imagesGallery/photo3.png";
// import Img4 from "../../imagesGallery/photo4.png";
// import Img5 from "../../imagesGallery/photo5.png";
// import Img6 from "../../imagesGallery/photo6.png";
// import Img1 from "../../imagesGallery/photo1.png";
// import Img2 from "../../imagesGallery/photo2.png";
// import Img3 from "../../imagesGallery/photo3.png";
// import Img4 from "../../imagesGallery/photo4.png";
// import Img5 from "../../imagesGallery/photo5.png";
// import Img6 from "../../imagesGallery/photo6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";

const images = [
  [Img1, Img2, Img3, Img4, Img5, Img6],
  [Img1, Img2, Img3, Img4, Img5, Img6],
  [Img1, Img2, Img3, Img4, Img5, Img6],
  [Img1, Img2, Img3, Img4, Img5, Img6],
];

const Gallery = () => {
  return (
    <div id = "gallery" className="gallery">
      <div className="container">
        <h1 className="gallery__heading">Галерея</h1>
        <div>
          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return (
                  '<span class="' + className + '">' + (index + 1) + "</span>"
                );
              },
            }}
            modules={[Grid, Pagination]}
          >
            {images.map((pageImages, index) => {
              return (
                <SwiperSlide key={index}>
                  {pageImages.map((src) => {
                    return <img src={src} key={src}></img>;
                  })}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="link__bar"></div>
      </div>
    </div>
  );
};
export default Gallery;
