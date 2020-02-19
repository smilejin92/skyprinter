import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import { FlexWrapper } from '../../styles';
import useOutsideRef from '../../hooks/useOutsideRef';

const ModalWrapper = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.5);
  z-index: 1;
`;

const Modal = styled.article`
  position: absolute;
  top: 27%;
  left: 50%;
  transform: translateX(-50%);
  width: 38.4rem;
  border-radius: 0.5rem;
  background: white;
  z-index: 2;
`;

const ModalHeader = styled(FlexWrapper)`
  padding: 15px;
  border-bottom: 0.1rem solid #ccc;
`;

const ModalTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.8rem;
`;

const ExitButton = styled.button`
  font-size: 1.8rem;
  background: white;
  border: none;
`;

const ModalBody = styled(FlexWrapper)`
  padding: 12px;
`;

const Category = styled(FlexWrapper)`
  text-align: left;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryLabel = styled.label.attrs(({ htmlFor }) => ({
  htmlFor,
}))`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  padding-bottom: 1rem;
`;

const SvgIcon = styled.svg`
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 0.3px;
  fill: #444560;
`;

const Options = styled.select.attrs(({ id }) => ({ id }))`
  height: 3.6rem;
  padding-left: 0.8rem;
  font-size: 1.5rem;
  border-radius: 0.4rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
`;

const CancelButton = styled.button`
  height: 3.6rem;
  padding: 0.6rem 1.8rem;
  font-size: 1.9rem;
  font-weight: 700;
  border-radius: 0.4rem;
  border: 0.2rem solid #dddde5;
  background: none;
  color: #0770e3;
`;

const SaveButton = styled(CancelButton)`
  margin-bottom: 1.1rem;
  color: white;
  border: none;
  background: #00a698;
`;

// set currency, market, locale
function Culture({
  country,
  currency,
  setCulture,
  countriesDOM,
  currenciesDOM,
  hideModal,
}) {
  const [yOffSet] = useState(window.pageYOffset);
  const [selectedCountry, setSelectedCountry] = useState(country);
  const [selectedCurrency, setSelectedCurrency] = useState(currency);

  const outsideRef = useRef(null);
  useOutsideRef(outsideRef, hideModal);

  // disable mouse scroll
  useEffect(() => {
    const preventDefault = () => {
      window.scrollTo(0, yOffSet);
    };

    document.addEventListener('scroll', preventDefault);

    return () => {
      document.removeEventListener('scroll', preventDefault);
    };
  }, [yOffSet]);

  const switchCountry = useCallback(({ target }) => {
    setSelectedCountry(target.value);
  }, []);

  const switchCurrency = useCallback(({ target }) => {
    setSelectedCurrency(target.value);
  }, []);

  // set parameters for api request
  const configCulture = () => {
    setCulture(selectedCountry, selectedCurrency);
    hideModal();
  };

  return (
    <ModalWrapper top={yOffSet}>
      <Modal ref={outsideRef}>
        <ModalHeader justify="space-between">
          <ModalTitle>국가 설정</ModalTitle>
          <ExitButton onClick={hideModal}>
            <Icon type="close" />
          </ExitButton>
        </ModalHeader>
        <ModalBody direction="column" justify="space-around">
          <Category direction="column">
            <CategoryLabel htmlFor="locale">
              <SvgIcon>
                <path d="M21 5c-.2-.3-.6-.4-.6-.4-.8-.4-4.6-.6-8.5-.6s-7.7.2-8.5.6c0 0-.4.1-.6.4-.6.6-.9 3-.9 5.5s.3 4.9.9 5.5c.2.3.6.4.6.4.5.2 1.8.4 3.6.5v2.6c0 .3.3.6.7.5 1-.3 2.7-1.2 4-3h.3c3.9 0 7.7-.2 8.5-.6 0 0 .4-.1.6-.4.6-.6.9-3.1.9-5.5s-.4-4.9-1-5.5zM6.4 12c-.8 0-1.5-.7-1.5-1.5S5.6 9 6.4 9s1.5.7 1.5 1.5S7.3 12 6.4 12zm6.6-.4c-.3.3-.6.4-1.1.4-.8 0-1.5-.7-1.5-1.5 0-.6.4-1.1.9-1.3.2-.1.4-.2.6-.2.8 0 1.5.7 1.5 1.5 0 .4-.1.8-.4 1.1zm4.4.4c-.8 0-1.5-.7-1.5-1.5S16.5 9 17.4 9s1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"></path>
              </SvgIcon>
              언어
            </CategoryLabel>
            <Options id="locale">
              <option>한국어 (대한민국)</option>
            </Options>
          </Category>
          <Category direction="column">
            <CategoryLabel htmlFor="market">
              <SvgIcon>
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm6.9 5.9h-2.3c-.3-1.2-.6-2.2-1.1-3.1 1.4.7 2.6 1.8 3.4 3.1zM15 12c0 .7 0 1.4-.1 2H9.1c-.1-.6-.1-1.3-.1-2s0-1.4.1-2.1h5.8c.1.7.1 1.4.1 2.1zm-3 8c-.7 0-1.9-1.5-2.5-4h5.1c-.7 2.5-1.9 4-2.6 4zM9.5 7.9C10.1 5.4 11.3 4 12 4s1.9 1.4 2.5 3.9h-5zm-1-3.1c-.4.9-.8 1.9-1.1 3.1H5.1c.8-1.3 2-2.4 3.4-3.1zM4.3 9.9h2.8C7 10.6 7 11.3 7 12s0 1.3.1 2H4.3c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2.1zm.8 6.1h2.3c.3 1.2.6 2.3 1.1 3.2-1.4-.7-2.6-1.8-3.4-3.2zm10.4 3.2c.5-.9.8-2 1.1-3.2h2.3c-.8 1.4-2 2.5-3.4 3.2zm4.2-5.2h-2.8c.1-.6.1-1.3.1-2s0-1.4-.1-2.1h2.8c.2.7.3 1.4.3 2.1 0 .7-.1 1.4-.3 2z"></path>
              </SvgIcon>
              국가/지역
            </CategoryLabel>
            <Description>
              국가를 선택하면 지역별 특가 상품 및 정보를 받아보실 수 있습니다.
            </Description>
            <Options
              id="market"
              value={selectedCountry}
              onChange={switchCountry}
            >
              {countriesDOM}
            </Options>
          </Category>
          <Category direction="column">
            <CategoryLabel htmlFor="currency">
              <SvgIcon>
                <path d="M17 9.3v.2c0 .7-.1 1.3-.3 1.9 1.3.7 2.3 2 2.3 3.6 0 2.2-1.8 4-4 4-1.6 0-2.9-.9-3.6-2.3-.6.2-1.3.3-1.9.3h-.2c.8 2.3 3 4 5.7 4 3.3 0 6-2.7 6-6 0-2.6-1.7-4.8-4-5.7zm-1 .2C16 5.9 13.1 3 9.5 3S3 5.9 3 9.5 5.9 16 9.5 16 16 13.1 16 9.5zm-9.4 2.6l.9-1.2c.7.4 1.2.6 1.7.6.6 0 .9-.2.9-.6 0-.8-3.2-1-3.2-2.8 0-1.1.7-1.8 1.9-2V5h1.4v1.1c.8.1 1.4.4 1.9.9L11 8c-.4-.3-.8-.5-1.3-.5s-.8.1-.8.5c0 .8 3.2.8 3.2 2.7 0 1-.6 1.8-1.9 2.1V14H8.8v-1c-.7-.1-1.6-.4-2.2-.9z"></path>
              </SvgIcon>
              통화
            </CategoryLabel>
            <Options
              id="currency"
              value={selectedCurrency}
              onChange={switchCurrency}
            >
              {currenciesDOM}
            </Options>
          </Category>
          <Category direction="column">
            <SaveButton onClick={configCulture}>저장</SaveButton>
            <CancelButton onClick={hideModal}>취소</CancelButton>
          </Category>
        </ModalBody>
      </Modal>
    </ModalWrapper>
  );
}

export default Culture;
