import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import CabinClassAndPassenger from './CabinClassAndPassenger';

const GradeButton = styled.button`
  padding: 0 30px 0 12px;
  text-align: left;
  cursor: pointer;
  border-radius: 0 0.4rem 0.4rem 0;
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
  position: relative;
`;

function ClassGradeButton() {
  const [visible, setVisible] = useState(false);
  const [passengerInfo, setPassengerInfo] = useState({
    adults: 1,
    children: [],
    cabinClass: 'economy',
  });

  const displayModal = () => {
    setVisible(true);
  };

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

  return (
    <GradeWrapper>
      <ButtonLabel>좌석 등급 및 승객</ButtonLabel>
      <GradeButton onClick={displayModal}>
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
      {visible && (
        <CabinClassAndPassenger
          passengerInfo={passengerInfo}
          setVisible={setVisible}
          setPassengerInfo={setPassengerInfo}
        />
      )}
    </GradeWrapper>
  );
}
export default ClassGradeButton;
