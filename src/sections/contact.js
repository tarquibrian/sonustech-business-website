import React from "react"
import FacebookIcon from "src/components/icons/social/facebook"
import TiktokIcon from "src/components/icons/social/tiktok"
import styled from "styled-components"

const Contact__Section = styled.section`
  /* min-height: 20em; */
  padding: 6rem 0;
  border-bottom: var(--border) solid ${({ theme }) => theme.colors?.border};
  /* display: grid; */
  /* place-content: center; */
`

const Contact__Content = styled.div`
  display: flex;
  width: 90%;
  align-items: start;
  justify-content: center;
  max-width: 1200px;
  margin-inline: auto;
  /* background-color: lightblue; */
  gap: 4rem;
  .contact__content-title {
    /* background-color: lightcoral; */
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    /* width: 100%; */
    /* width: fit-content; */
    max-width: 500px;
    min-width: 300px;
    h1 {
      font-size: var(--title);
      font-weight: normal;
      .title__word-first {
        /* color: #41ead4; */
        font-weight: 800;
        /* font-style: italic; */
        text-decoration: underline;
      }
      .title__word-second {
        font-style: italic;
      }
    }
    p {
      font-size: var(--title-content);
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    ul {
      display: flex;
      gap: 0.7rem;
    }
  }
  .contact__content-form {
    width: 100%;
    max-width: 400px;
    /* background-color: red; */
    form {
      display: grid;
      gap: 1.5rem;
      .field {
        legend {
          margin-bottom: 0.4rem;
        }
      }
      .name {
        max-width: 250px;
      }
      input {
        width: 100%;
        height: 3rem;
        padding: 0 0.8rem;
        font-size: var(--description);
      }
      input,
      textarea {
        background-color: transparent;
        border: 1px solid black;
        border-radius: 10px;
      }

      textarea {
        /* resize: none; */
        padding: 0.8rem;
        width: 100%;
      }
      button {
        width: fit-content;
        font-size: var(--title-content);
        padding: 0.6rem 1.3rem;
        background-color: rgba(65, 234, 212, 1);
        border: var(--border) solid ${({ theme }) => theme.colors?.border};
        border-radius: 10px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
          rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        transition: 0.2s ease;
        span {
          font-size: 1.6rem;
        }
        &:hover {
          box-shadow: rgba(14, 30, 37, 0.15) 0px 2px 4px 0px,
            rgba(14, 30, 37, 0.35) 0px 2px 16px 0px;
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: start;
  }
`

const Contact = () => {
  return (
    <Contact__Section>
      <Contact__Content>
        <div className="contact__content-title">
          <h1>
            Drop <span className="title__word-first">us</span> a{" "}
            <span className="title__word-second">line</span>
          </h1>
          <p>
            <strong>
              ✦ Email →{" "}
              <a
                aria-label="Chat on Email"
                href={`mailto:sonustech@gmail.com`}
                // target="_blank"
              >
                sonustech@gmail.com
              </a>
            </strong>
            <strong>
              ✦ Phone →{" "}
              <a
                aria-label="Chat on WhatsApp"
                href="https://wa.me/63909428"
                target="_blank"
              >
                (+591)63909428
              </a>
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
          <form>
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
                // cols="auto"
                rows="6"
              ></textarea>
            </div>
            <button>
              Send <span>→</span>
            </button>
          </form>
        </div>
      </Contact__Content>
    </Contact__Section>
  )
}

export default Contact
