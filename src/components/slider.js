import React from "react"
import Slider from "react-slick"
import styled from "styled-components"

const CarouselSlider = styled(Slider)`
  display: flex;
  overflow: hidden;
`

const Wrap = styled.div`
  background-color: red;
  height: 200px;
`

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  return (
    <CarouselSlider {...settings}>
      <Wrap>
        <h3>1</h3>
      </Wrap>
      <Wrap>
        <h3>2</h3>
      </Wrap>
      <Wrap>
        <h3>3</h3>
      </Wrap>
      <Wrap>
        <h3>4</h3>
      </Wrap>
      <Wrap>
        <h3>5</h3>
      </Wrap>
      <Wrap>
        <h3>6</h3>
      </Wrap>
      <Wrap>
        <h3>7</h3>
      </Wrap>
    </CarouselSlider>
  )
}

export default SimpleSlider
