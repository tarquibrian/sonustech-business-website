import React from "react"
import styled from "styled-components"

const Author__Section = styled.section`
  border: inital;
`

const Author__Content = styled.div`
  display: flex;
  justify-content: center;
  h1 {
    padding: 0.5rem;
    font-size: var(--description);
  }
`

const Author = () => {
  return (
    <Author__Section>
      <Author__Content>
        <h1>Powered by Darvy.</h1>
      </Author__Content>
    </Author__Section>
  )
}

export default Author
