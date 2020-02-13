import React, { useState } from 'react';
import styled from 'styled-components';

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

function InfantandChild({ child }) {
  // const [state, setState] = useState(0);
  // const hello = e => {
  //   console.log(e);
  // };
  const selectAge = e => {
    console.log(e.target.value);
    if (e.target.value === '나이를 선택하세요')
      return alert('모든 유/소아의 나이를 입력하세요');
  };
  return (
    <div onChange={selectAge}>
      <LabelTitle htmlFor="childage">유/소아 {child + 1} 나이 </LabelTitle>
      <CabinClass id="childage">
        <option selected value="나이를 입력해주세요">
          나이를 선택하세요
        </option>
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
export default InfantandChild;
