import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import styled, { css } from "styled-components"

import imgMenu from "../assets/images/menu.png"
import useScrollDirection from "../hooks/useScrollDirection"
import Arrow from "./icons/arrow"
import MenuIcon from "./icons/menu"

export const Header__Content = styled.nav`
  position: sticky;
  overflow: hidden;
  top: 0;
  left: 0;
  min-height: 5rem;
  z-index: 999;
  transition: 0.3s ease-in;
  @media screen and (max-width: 800px) {
    display: none;
  }
`
const Container = styled.div`
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  height: 5rem;
  background-color: ${({ theme }) => theme.colors?.backgroundHeader};
  backdrop-filter: blur(15px);
  width: 100%;
  border-bottom: var(--border) solid ${({ theme }) => theme.colors?.border};
  transition: 0.3s ease-in;
  a {
    width: 100%;
    height: 100%;

    &:last-of-type {
      span {
        border: none;
      }
    }
  }
  @media (prefers-reduced-motion: no-preference) {
    ${({ scrollDirection, scrollIsTop }) =>
      scrollDirection === "up" &&
      !scrollIsTop &&
      css`
        height: 3.5rem;
        transform: translateY(0px);
      `};

    ${({ scrollDirection, scrollIsTop }) =>
      scrollDirection === "down" &&
      !scrollIsTop &&
      css`
        height: 5rem;
        transform: translateY(-120%);
      `};
  }
`

const Content__Title = styled(Link)`
  border-right: var(--border) solid ${({ theme }) => theme.colors?.border};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: 0.2s ease;
  font-weight: ${({ isActive }) => (isActive ? "800" : "inherit")};
  text-decoration: ${({ isActive }) => (isActive ? "underline" : "inherit")};

  span {
    background-color: ${({ theme }) => theme.colors?.foreground};
    /* background-color: red; */
    color: ${({ theme }) => theme.colors?.textInverse};
    display: grid;
    place-content: center;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    padding: 0.2rem;

    svg {
      width: 100%;
      height: 100%;
      margin-left: 1px;
    }
  }
  &:first-of-type {
    font-weight: 800;
  }
  &:hover {
    background: ${({ theme }) => theme.colors?.hoverBackground};
    gap: 0.5rem;
    cursor: pointer;
    span {
      svg {
        filter: drop-shadow(0px 0px 4px #41ead4);
      }
    }
  }
`

const Menu = styled.div`
  display: none;

  svg {
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    position: fixed;
    top: 0;
    right: 0;
    display: block;
    margin: 30px;
    width: 60px;
    height: 60px;
    &:hover {
      cursor: pointer;
    }
  }
`

const menu = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/",
  },
  {
    name: "Projects",
    href: "/",
  },
  {
    name: "About Us",
    href: "/",
  },
  {
    name: "Contact",
    href: "/",
  },
]

const Header = () => {
  const { pathname } = useRouter()
  const scrollDirection = useScrollDirection("down")
  const [scrollIsTop, setScrollIsTop] = useState(true)

  const handleScroll = () => {
    setScrollIsTop(window.pageYOffset < 100)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [scrollDirection])
  return (
    <>
      <Header__Content>
        <Container scrollDirection={scrollDirection} scrollIsTop={scrollIsTop}>
          {menu.map((item, i) => {
            const { name, href } = item
            return (
              <Content__Title
                href={href}
                isActive={pathname === "/" ? null : null}
                key={i}
              >
                {name === "Contact" ? (
                  <span>
                    <Arrow />
                  </span>
                ) : null}
                {name}
              </Content__Title>
            )
          })}
        </Container>
      </Header__Content>
      <Menu>
        {/* <Image src={imgMenu} alt="menu icon" height={50} width={50} /> */}
        <MenuIcon />
      </Menu>
    </>
  )
}

export default Header
