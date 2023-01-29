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
import { Pagination, Navigation, Autoplay } from "swiper"
import Arrow from "./icons/arrow"
import ArrowRight from "./icons/hero/arrow"
import ArrowLeft from "./icons/arrow-left"

const Slider__Container = styled.div`
  width: 170%;
  transform: translateX(-20.7%);

  .swiper {
    width: 100%;
    height: 100%;
    padding: 0 7%;
  }
  .swiper-slide {
    width: 100%;
    height: 400px;
    margin-top: 2px;
    /* background-color: blue; */
    outline: var(--border) solid ${({ theme }) => theme.colors?.border};
    /* overflow: hidden; */
    text-align: center;
    /* font-size: 18px; */
    cursor: grab;

    /* Center slide text vertically */
    display: -webkit-box;
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
    align-items: center;
    /* padding: 1rem; */
    /* background-color: red; */
    .card {
    }
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
      fill: ${({ theme }) => theme.colors?.border};
    }
    .prev {
    }
    .next {
    }
  }
`

const Slider = ({ items }) => {
  return (
    <Slider__Container>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          300: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {items.map((item, i) => {
          const { title, description, svg } = item
          return (
            <SwiperSlide>
              <div className="card">
                <div className="card__image">{svg}</div>
                <div className="card__title">{title}</div>
                <div className="card__description">{description}</div>
              </div>
              {/* <Image src={img1} alt="slider images" title="First image slider" /> */}
            </SwiperSlide>
          )
        })}

        <div className="arrows-button">
          <button className="prev">
            <ArrowLeft />
          </button>
          <button className="next">
            <ArrowRight />
          </button>
        </div>
      </Swiper>
    </Slider__Container>
  )
}

export default Slider
