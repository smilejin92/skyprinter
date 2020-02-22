import React from 'react';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import styled from 'styled-components';
import errorImg from '../images/error-image.svg';
import logo from '../images/skyprinter-logo.png';

const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 65rem;
  height: 100rem;
  margin: 0 auto;
  padding: 2.4rem;
`;

const Header = styled.header`
  width: 50%;
  img {
    width: 100%;
  }
`;

const ErrorImg = styled.div`
  width: 100%;
  height: 40rem;
  background-image: url(${errorImg});
`;

const Heading = styled.h2`
  font-size: 4.2rem;
  font-weight: 700;
`;

const ErrorMessage = styled.p`
  padding: 1.2rem;
  font-size: 1.6rem;
  line-height: 2rem;
  margin: 0 auto;
  text-align: center;
`;

const StyledButton = styled.button`
  background: #00a698;
  border: none;
  border-radius: 0.4rem;
  padding: 1rem 1.5rem;
  span {
    color: white;
    font-size: 2rem;
    font-weight: 600;
  }
`;

const NotFound = () => (
  <>
    <div className="container">
      <NotFoundContent>
        <Header>
          <img src={logo} alt="스카이프린터 로고" />
        </Header>
        <Heading>페이지를 찾을 수 없습니다.</Heading>
        <ErrorMessage>
          스카이스캐너와 함께라면 어디든지 가실 수 있어요. 하지만 먼저
          홈페이지로 돌아가셔야 해요.
        </ErrorMessage>
        <StyledButton>
          <span>뒤로 가기</span>
        </StyledButton>
        <ErrorImg />
      </NotFoundContent>
    </div>
    <Footer />
    <Copyright />
  </>
);

export default NotFound;
