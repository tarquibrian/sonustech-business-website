import Image from "next/image"
import Link from "next/link"
import React from "react"
import styled from "styled-components"

import imgMenu from "../assets/images/menu.png"

export const Header__Content = styled.nav`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  height: 5rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  /* border: 1px solid #000; */
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
  border-right: 1px solid #000;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }
`

const Menu = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    position: fixed;
    top: 0;
    right: 0;
    display: inline-block;
    margin: 1rem;
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
  return (
    <>
      <Header__Content>
        <Container>
          {menu.map((item) => {
            const { name, href } = item
            return (
              <Link href={href}>
                <Content__Title>{name}</Content__Title>
              </Link>
            )
          })}
        </Container>
      </Header__Content>
      <Menu>
        <Image src={imgMenu} alt="menu icon" height={50} width={50} />
      </Menu>
    </>
  )
}

export default Header
