import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const style = {
  container: css`
    background: #851e3e;
    margin-bottom: 1.45rem;
  `,
  wrapper: css`
    display: grid;
    grid-template-columns: auto 10rem;
    grid-template-rows: auto;
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  `,
  title: css`
    margin: 0;
    display: inline-block;
  `
}

const TitleLink = styled(Link)`
  color: #fff;

  &:active,
  &:hover {
    color: #fff;
  }
`

interface HeaderProps {
  readonly title: string
  readonly menuLinks: Array<object>
}

export const Header = ({ title, menuLinks }: HeaderProps) => (
  <div css={style.container}>
    <div css={style.wrapper}>
      <h1 css={style.title}>
        <TitleLink to="/">{title}</TitleLink>
      </h1>
    </div>
    <div>
      <nav>
        <ul style={{ display: 'flex', flex: 1, margin: 0 }}>
          {menuLinks.map(link => (
            <li
              key={link.name}
              style={{
                listStyleType: `none`,
                padding: `1rem`,
              }}
            >
              <Link style={{ color: `white` }} to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
)
