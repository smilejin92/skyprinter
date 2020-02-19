import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';

export const LabelTitle = styled.label`
  padding-top: 1.2rem;
  padding-bottom: 0.8rem;
  font-size: 1.6rem;
  font-weight: 700;
  display: block;
`;

export const CabinClass = styled.select`
  background: #fff
    url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4Ij48c3R5bGU+PC9zdHlsZT48cGF0aCBkPSJNMTkuNyAxMC4zTDEyIDE3LjRsLTcuNy03LjFjLS42LS42LS4yLTEuNy43LTEuN2gxNGMuOSAwIDEuMyAxLjEuNyAxLjd6IiBmaWxsPSIjNDQ0NTYwIi8+PC9zdmc+')
    no-repeat right 1.2rem center;
  -webkit-appearance: none;
  padding: 0.6rem 3rem 0.6rem 1.2rem;
  border: 1px solid #b2b2bf;
  line-height: 2.2rem;
  height: 3.6rem;
  width: 100%;
  font-size: 1.6rem;
`;

function InfantChild({ child, setAge }) {
  const selectAge = ({ target }) => {
    setAge(child.id, target.value);

    if (target.value === '나이를 선택하세요')
      return alert('모든 유/소아의 나이를 입력하세요');
  };
  return (
    <div>
      <LabelTitle htmlFor={`childage-${child.id}`}>
        유/소아 {child.id} 나이
      </LabelTitle>
      <CabinClass
        value={child.age}
        onChange={selectAge}
        id={`childage-${child.id}`}
        key={uuid.v4()}
      >
        <option value="나이를 선택하세요">나이를 선택하세요</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
      </CabinClass>
    </div>
  );
}
export default InfantChild;
