import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import InfantandChild, { LabelTitle, CabinClass } from './InfantandChild';
import uuid from 'uuid';

const CabinSection = styled.section`
  display: block;
  border: 1px solid #dddde5;
  border-radius: 0.6rem;
  box-shadow: 0 4px 14px 0 rgba(37, 32, 31, 25);
  width: 36.6rem;
  /* height: 41.8rem; */
  height: 100%;
`;

// export const LabelTitle = styled.label`
//   padding-top: 1.2rem;
//   padding-bottom: 0.8rem;
//   font-size: 1.6rem;
//   font-weight: 700;
//   display: block;
// `;

// export const CabinClass = styled.select`
//   padding: 0.6rem 3rem 0.6rem 1.2rem;
//   border: 1px solid #b2b2bf;
//   background: #fff;
//   line-height: 2.2rem;
//   height: 3.6rem;
//   width: 100%;
//   font-size: 1.6rem;
// `;
const CainContentWrapper = styled.div`
  display: block;
  padding: 12px;
  width: 100%;
  /* height: 38.2rem; */
  height: 100%;
  border-bottom: 1px solid #dddef5;
`;

const MinusNumberButton = styled.button`
  border-radius: 50%;
  background-color: ${({ disabled }) => (disabled ? '#ddddef' : 'transparent')};
  span {
    line-height: 1.8rem;
    display: inline-block;
    margin-top: 0.3rem;
    vertical-align: top;
  }

  &:hover {
    border: ${({ disabled }) =>
      disabled ? '1px solid #ddddef' : '1px solid #0770e3'};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }

  svg {
    width: 1.8rem;
    fill: ${({ disabled }) => (disabled ? '#68697f' : '#0770e3')};
  }
`;

const PlusNumberButton = styled.button`
  border-radius: 50%;
  background-color: ${({ disabled }) => (disabled ? '#ddddef' : 'transparent')};
  span {
    line-height: 1.8rem;
    display: inline-block;
    margin-top: 0.3rem;
    vertical-align: top;
  }
  &:hover {
    border: ${({ disabled }) =>
      disabled ? '1px solid #ddddef' : '1px solid #0770e3'};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
  svg {
    width: 1.8rem;
    fill: ${({ disabled }) => (disabled ? '#68697f' : '#0770e3')};
  }
`;
const ButtonWrapper = styled.div`
  display: inline-block;
  line-height: 2.4rem;
`;

const SvgIcon = styled.svg`
  width: 1.8rem;
  height: 1.8rem;
`;

const PessengerBoundary = styled.span`
  font-size: 1.6rem;
  padding-left: 1.2rem;
  line-height: 2.4rem;
  vertical-align: middle;
`;
const WarningDetail = styled.div`
  padding-top: 2.4rem;
  p {
    padding-bottom: 1.8rem;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: #81768f;
  }
`;

const CompleteButton = styled.div`
  padding: 0.6rem 1.2rem 0.6rem 1.2rem;
  text-align: right;

  button {
    font-size: 1.6rem;
    color: #0770e3;
    border: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const PeopleNumber = styled.input`
  cursor: text;
  width: 3.2rem;
  height: 2.9rem;
  display: inline-block;
  padding-top: 6px;
  padding-bottom: 6px;
  font-weight: 400;
  vertical-align: middle;
  text-align: center;
  line-height: 2.4rem;
  font-size: 2.4rem;
  border: none;
  margin: 0 0.5rem 0 0.5rem;
`;

function CabinClassAndPessenger() {
  const [completeInput, setCompletedInput] = useState(true);
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [infant, setInfant] = useState(0);
  const [array, setArray] = useState([]);
  const [result, setResult] = useState({
    class: 'economy',
    adult: 1,
    children: 0,
    infant: 0,
  });

  const selectClass = ({ target }) => {
    setResult(current => ({
      ...current,
      class: target.value,
    }));
  };

  const reduceAdult = () => {
    if (adult === 1) return;
    setAdult(adult - 1);
  };

  const increaseAdult = () => {
    if (adult === 8) return;
    setAdult(adult + 1);
  };

  const reduceChild = () => {
    if (!array.length) return;
    setArray(current => {
      const newArray = [];
      for (let i = 0; i < array.length - 1; i++) {
        newArray.push(current[i]);
      }
      return newArray;
    });
  };

  const getMaxId = () => Math.max(0, ...array.map(c => c.id)) + 1;

  const addChild = () => {
    if (array.length === 8) return;
    setArray(current => [
      ...current,
      {
        id: getMaxId(),
        type: undefined,
      },
    ]);
  };

  return (
    <CabinSection>
      <CainContentWrapper>
        <div>
          <LabelTitle htmlFor="classGrade">좌석 등급</LabelTitle>
          <CabinClass onChange={selectClass} key={uuid.v4()} id="classGrade">
            <option value="economy">일반석</option>
            <option value="premiumeconomy">프리미엄 일반석</option>
            <option value="business">비즈니스석</option>
            <option value="first">일등석</option>
          </CabinClass>
        </div>
        <LabelTitle>성인</LabelTitle>
        <ButtonWrapper>
          <MinusNumberButton onClick={reduceAdult} disabled={adult === 1}>
            <span>
              <SvgIcon viewBox="0 0 24 24">
                <path d="M19 10a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4h14z"></path>
              </SvgIcon>
            </span>
          </MinusNumberButton>
          <PeopleNumber type="text" value={adult} />
          <PlusNumberButton onClick={increaseAdult} disabled={adult === 8}>
            <span>
              <SvgIcon viewBox="0 0 24 24">
                <path d="M10 10V5a2 2 0 1 1 4 0v5h5a2 2 0 1 1 0 4h-5v5a2 2 0 1 1-4 0v-5H5a2 2 0 1 1 0-4h5z"></path>
              </SvgIcon>
            </span>
          </PlusNumberButton>
        </ButtonWrapper>
        <PessengerBoundary>만 16세 이상</PessengerBoundary>

        <LabelTitle>유/소아</LabelTitle>
        <ButtonWrapper>
          <MinusNumberButton onClick={reduceChild} disabled={!array.length}>
            <span>
              <SvgIcon viewBox="0 0 24 24">
                <path d="M19 10a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4h14z"></path>
              </SvgIcon>
            </span>
          </MinusNumberButton>
          <PeopleNumber type="text" value={array.length} />
          <PlusNumberButton
            onClick={addChild}
            // onClick={() => addChild(child + 1)}
            disabled={array.length === 8}
          >
            <span>
              <SvgIcon viewBox="0 0 24 24">
                <path d="M10 10V5a2 2 0 1 1 4 0v5h5a2 2 0 1 1 0 4h-5v5a2 2 0 1 1-4 0v-5H5a2 2 0 1 1 0-4h5z"></path>
              </SvgIcon>
            </span>
          </PlusNumberButton>
        </ButtonWrapper>
        <PessengerBoundary>만 0 - 15세</PessengerBoundary>

        <WarningDetail>
          <p>
            여행 시 탑승객의 나이는 예약된 연령 범주에 부합해야 합니다. 항공사는
            만 18세 미만의 단독 여행 탐승객에 대한 제한이 있습니다.
          </p>
          <p>
            유/소아 동반 여행 시 연령제한과 정책은 항공사 별로 다를 수 있으니
            예약하기 전에 해당 항공사롸 확인하시기 바랍니다.
          </p>
        </WarningDetail>
      </CainContentWrapper>
      <CompleteButton>
        <button onClick={() => setCompletedInput(!completeInput)}>완료</button>
      </CompleteButton>
    </CabinSection>
  );
}
export default CabinClassAndPessenger;
