import React from "react"
import styled from "styled-components"

const Slider__Container = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  min-height: 300px;
`

const Slider = () => {
  return (
    <Slider__Container>
      <div className="content">
        <div className="card">
          <div className="card-content">
            <div className="image">
              <img src="" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </Slider__Container>
  )
}

export default Slider
