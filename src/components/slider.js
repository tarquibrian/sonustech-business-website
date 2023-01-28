import Image from "next/image"
import React from "react"
import styled from "styled-components"
import img1 from "../assets/images/web1.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Pagination, Navigation } from "swiper"
import Arrow from "./icons/arrow"
import ArrowRight from "./icons/hero/arrow"
import ArrowLeft from "./icons/arrow-left"

const Slider__Container = styled.div`
  /* background-color: rgba(0, 0, 0, 0.2); */
  /* min-height: 300px; */

  .swiper {
    width: 100%;
    height: 100%;
    padding: 0 7rem;
  }
  .swiper-slide {
    text-align: center;
    /* font-size: 18px; */
    background: red;
    cursor: grab;

    /* Center slide text vertically */
    /* display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center; */
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: lightcoral;
  }
  .arrows-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    gap: 2rem;
    button {
      background-color: initial;
    }
    svg {
      width: auto;
      height: 20px;
    }
    .prev {
    }
    .next {
    }
  }
`

const Slider = () => {
  return (
    <Slider__Container>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          1
          <Image src={img1} alt="slider images" title="First image slider" />
        </SwiperSlide>
        <SwiperSlide>
          2
          <Image src={img1} alt="slider images" title="First image slider" />
        </SwiperSlide>
        <SwiperSlide>
          3
          <Image src={img1} alt="slider images" title="First image slider" />
        </SwiperSlide>
        <SwiperSlide>
          4
          <Image src={img1} alt="slider images" title="First image slider" />
        </SwiperSlide>
        <SwiperSlide>
          5
          <Image src={img1} alt="slider images" title="First image slider" />
        </SwiperSlide>
        <SwiperSlide>
          6
          <Image src={img1} alt="slider images" title="First image slider" />
        </SwiperSlide>
        <div className="arrows-button">
          <button className="prev">
            <ArrowLeft />
          </button>
          <button className="next">
            <ArrowRight />
          </button>
        </div>
      </Swiper>
      {/* <div className="content">
        <div className="card">
          <div className="card-content">
            <div className="image">
              <Image src={img1} alt="img slider" title="slider first image" />
            </div>
          </div>
        </div>
      </div> */}
    </Slider__Container>
  )
}

export default Slider
