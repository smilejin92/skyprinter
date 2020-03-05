import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../images/skyprinter-logo.png';

const Logo = styled.img.attrs(({ src, alt }) => ({
  src,
  alt,
}))`
  width: 17.6rem;
`;

const MainLogo = () => (
  <h1>
    <Link to="/">
      <Logo src={logo} alt="스카이프린터 로고" />
    </Link>
  </h1>
);

export default MainLogo;
