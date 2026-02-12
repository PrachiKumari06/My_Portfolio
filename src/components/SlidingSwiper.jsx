import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";

function SlidingSwiper({ images }) {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div style={{ width: "100%", marginBottom: "20px", position: "relative" }}>

      {/* Custom Left Arrow */}
      <div ref={prevRef} className="custom-swiper-btn left">
        ‹
      </div>

      {/* Custom Right Arrow */}
      <div ref={nextRef} className="custom-swiper-btn right">
        ›
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt="project"
              style={{
                width: "100%",
                height: "180px",
                borderRadius: "12px",
                padding: "12px"
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SlidingSwiper;
