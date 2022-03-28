import React from 'react'
import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import styled from "styled-components";

interface Props extends LinkProps {
    text: string
}

export const NavLink = ({ text, ...props }: Props) => {
    const { pathname } = useRouter()
    return (
        <Link {...props} passHref>
            <StyledLink $active={props.href === pathname}>{text}</StyledLink>
        </Link>
    )
}

const StyledLink = styled.a<{$active: boolean}>`
  font-family: 'Ubuntu';
  margin-right: 20px;
  font-weight: bold;
  font-size: 28px;
  color: white;
  line-height: 32px;
  opacity: ${({$active }) => ($active ? 1 : 0.5)};
`

