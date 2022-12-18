import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import img1 from '../assets/images/hero.jpg'

const Carousel__Container = styled.div``
const Card = styled.div``

const Carousel = () => {
  return (
    <Carousel__Container>
      <Card>
        <Image src={img1} alt='card image' width={500} height='auto'/>
        <Image src={img1} alt='card image' width={500} height='auto'/>
      </Card>
    </Carousel__Container>
  )
}

export default Carousel