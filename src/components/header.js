import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import styled from "styled-components"

import imgMenu from "../assets/images/menu.png"
import Arrow from "./icons/arrow"
import MenuIcon from "./icons/menu"

export const Header__Content = styled.nav`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  height: 5rem;
  width: 100%;
  z-index: 99999;
  border-bottom: 1px solid ${({ theme }) => theme.colors?.border};
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
  a {
    width: 100%;
    height: 100%;
    &:last-of-type {
      span {
        border: none;
      }
    }
  }
`

const Content__Title = styled.span`
  border-right: 1px solid ${({ theme }) => theme.colors?.border};
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
    color: ${({ theme }) => theme.colors?.background};
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
      /* fill: #fff; */
    }
  }
  &:hover {
    background: ${({ theme }) => theme.colors?.hoverBackground};
    gap: 0.5rem;
    cursor: pointer;
    span {
      /* background-color: ${({ theme }) => theme.colors?.hoverBackground}; */
    }
  }
`

const Menu = styled.div`
  display: none;
  /* background-color: red; */

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
    href: "/services",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
]

const Header = () => {
  const { pathname } = useRouter()
  return (
    <>
      <Header__Content>
        <Container>
          {menu.map((item, i) => {
            const { name, href } = item
            return (
              <Link href={href} key={i}>
                <Content__Title isActive={pathname === href ? true : null}>
                  {name === "Contact" ? (
                    <span>
                      <Arrow />
                    </span>
                  ) : null}
                  {name}
                </Content__Title>
              </Link>
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
