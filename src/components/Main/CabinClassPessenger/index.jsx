import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CabinClassAndPessenger from './subCabinClass1';

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
  /* line-height: 1.5; */
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
function ClassGradeButton() {
  const [visible, setVisible] = useState(false);
  const [detail, setDetail] = useState({
    pessenger: 1,
    class: '일반석',
  });

  const selectPeople = res => {
    if (res.grade === 'economy') {
      setDetail({
        pessenger: res.adult + res.children + res.infant,
        class: '일반석',
      });
    } else if (res.grade === 'premiumeconomy') {
      setDetail({
        pessenger: res.adult + res.children + res.infant,
        class: '프리미엄 일반석',
      });
    } else if (res.grade === 'business') {
      setDetail({
        pessenger: res.adult + res.children + res.infant,
        class: '비즈니스',
      });
    } else {
      setDetail({
        pessenger: res.adult + res.children + res.infant,
        class: '일등석',
      });
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <div style={{ width: '50%', position: 'relative' }}>
        <ButtonLabel>좌석 등급 및 승객</ButtonLabel>
        <GradeButton onClick={() => setVisible(true)}>
          <GradePessenger>
            {detail.pessenger > 1
              ? `${detail.pessenger} 승객, ${detail.class}`
              : `${detail.pessenger} 성인, ${detail.class}`}
          </GradePessenger>
        </GradeButton>
        {visible && (
          <CabinClassAndPessenger
            setVisible={setVisible}
            selectPeople={selectPeople}
          />
        )}
      </div>
    </>
  );
}
export default ClassGradeButton;
