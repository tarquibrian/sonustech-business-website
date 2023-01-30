import React from "react"
import FacebookIcon from "src/components/icons/social/facebook"
import TiktokIcon from "src/components/icons/social/tiktok"
import styled from "styled-components"

const Contact__Section = styled.section`
  /* min-height: 20em; */
  border-bottom: var(--border) solid ${({ theme }) => theme.colors?.border};
  /* display: grid; */
  /* place-content: center; */
`

const Contact__Content = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  .contact__content-title {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: lightskyblue;
    h1 {
      font-size: var(--title);
    }
    p {
      font-size: var(--title-content);
      display: flex;
      flex-direction: column;
    }
  }
  .contact__content-form {
    background-color: lightsalmon;
    textarea {
      resize: none;
    }
  }
`

const Contact = () => {
  return (
    <Contact__Section>
      <Contact__Content>
        <div className="contact__content-title">
          <h1>Drop us a line</h1>
          <p>
            <strong>
              ✦ Email → <a href=""> sonustech@gmail.com</a>
            </strong>
            <strong>
              ✦ Phone → <a href="">(+591)63909428</a>
            </strong>
          </p>
          <p>
            378 Tumusla Street <br /> Cochabamba, Bolivia
          </p>
          <p>Or DM us ↓</p>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100088368451456"
                target="_blank"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@sonustech.atlas"
                target="_blank"
                aria-label="Facebook"
              >
                <TiktokIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className="contact__content-form">
          <form action="">
            <div className="field name">
              <legend>Name✷</legend>
              <input type="text" name="name" id="name" aria-required="true" />
            </div>
            <div className="field email">
              <legend>Email✷</legend>
              <input
                type="email"
                name="email"
                id="email"
                aria-required="true"
              />
            </div>
            <div className="field message">
              <legend>Message✷</legend>
              <textarea
                name="message"
                id="message"
                // cols="30"
                rows="5"
              ></textarea>
            </div>
            <button>Send →</button>
          </form>
        </div>
      </Contact__Content>
    </Contact__Section>
  )
}

export default Contact
