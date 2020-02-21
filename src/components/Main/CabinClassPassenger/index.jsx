import React, { useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';
import CabinClassPassengerContainer from '../../../containers/CabinClassPassengerContainer';
import { useLocation } from 'react-router-dom';

const GradeButton = styled.button`
  padding: 0 30px 0 12px;
  text-align: left;
  cursor: pointer;
  border-radius: 0 0.4rem 0.4rem 0;
  ${({ page }) =>
    page === '/transport/flights' &&
    css`
      border-radius: 0.4rem 0.4rem;
    `}
  height: 4.8rem;
  width: 100%;
  line-height: 2.2rem;
  border: 1px solid rgb(216, 216, 216);
  background: #fff
    url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4Ij48c3R5bGU+PC9zdHlsZT48cGF0aCBkPSJNMTkuNyAxMC4zTDEyIDE3LjRsLTcuNy03LjFjLS42LS42LS4yLTEuNy43LTEuN2gxNGMuOSAwIDEuMyAxLjEuNyAxLjd6IiBmaWxsPSIjNDQ0NTYwIi8+PC9zdmc+')
    no-repeat right 1.2rem center;
  -webkit-appearance: none;
  display: inline-block;
`;

const ButtonLabel = styled.label`
  color: #fff;
  display: block;
  font-size: 1.2rem;
  display: block;
  font-weight: 700;
  line-height: 1.8rem;
`;

const GradePessenger = styled.span`
  display: block;
  text-align: left;
  cursor: pointer;
  line-height: 2.2rem;
  text-transform: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 1.6rem;
`;

const GradeWrapper = styled.div`
  width: 50%;
  ${({ page }) =>
    page === '/transport/flights' &&
    css`
      width: 48%;
      margin-left: 3%;
    `}
  position: relative;
`;

function ClassGradeButton({
  visible,
  displayModal,
  passengerInfo,
  errors,
  errorOccurred,
  setError,
}) {
  const { pathname } = useLocation();
  const convertClass = useCallback(type => {
    const seatTypes = [
      { cabinClass: 'economy', name: '일반석' },
      { cabinClass: 'premiumeconomy', name: '프리미엄 일반석' },
      { cabinClass: 'business', name: '비지니스석' },
      { cabinClass: 'first', name: '일등석' },
    ];

    const [selectedSeat] = seatTypes.filter(s => type === s.cabinClass);

    return selectedSeat.name;
  }, []);

  const getTotalPassengers = () => {
    const { adults, children } = passengerInfo;
    return adults + children.length;
  };

  useEffect(() => {
    let newErrors = errors;
    if (errorOccurred) {
      if (
        passengerInfo.children.filter(child => child.type === undefined)
          .length === 0
      ) {
        newErrors = newErrors.filter(e => e.type !== 'Age not selected');
      }
      console.log('aa', passengerInfo.adults);
      console.log('bb', passengerInfo.children);
      if (
        passengerInfo.adults >=
        passengerInfo.children.filter(child => child.age < 2).length
      ) {
        newErrors = newErrors.filter(e => e.type !== 'No matching adult');
      }

      newErrors.length === 0 ? setError(null) : setError(newErrors);
    }
  }, [setError, errorOccurred, passengerInfo, errors]);

  const openModal = () => {
    if (visible) return;
    displayModal();
  };
  return (
    <GradeWrapper page={pathname}>
      <ButtonLabel>좌석 등급 및 승객</ButtonLabel>
      <GradeButton onClick={openModal} page={pathname}>
        <GradePessenger>
          {getTotalPassengers() > 1
            ? `${getTotalPassengers()} 승객, ${convertClass(
                passengerInfo.cabinClass,
              )}`
            : `${getTotalPassengers()} 성인, ${convertClass(
                passengerInfo.cabinClass,
              )}`}
        </GradePessenger>
      </GradeButton>
      {visible && <CabinClassPassengerContainer />}
    </GradeWrapper>
  );
}
export default ClassGradeButton;
