import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import InfantandChild, { LabelTitle, CabinClass } from './subCabinClass2';
import uuid from 'uuid';

const CabinSection = styled.section`
  z-index: 99;
  display: ${props => (props.visible ? 'block' : 'none')};
  background-color: #fff;
  position: absolute;
  bottom: 4.3rem;
  border: 1px solid #dddde5;
  border-radius: 0.6rem;
  box-shadow: 0 4px 14px 0 rgba(37, 32, 31, 25);
  width: 36.6rem;
  /* height: 41.8rem; */
`;

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
  background-color: #fff;

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
const Triangle = styled.span`
  &:before {
    position: absolute;
    bottom: 100%;
    content: ' ';
    display: block;
    margin-bottom: -0.1rem;
    border: 1.3rem solid transparent;
    border-bottom-color: #dddde5;
    pointer-events: none;
    left: 45%;
    box-sizing: inherit;
  }
  &:after {
    position: absolute;
    bottom: 100%;
    left: 49%;
    content: ' ';
    display: block;
    margin-bottom: -0.1rem;
    margin-left: -1.2rem;
    border: 1.2rem solid transparent;
    border-bottom-color: #fff;
    pointer-events: none;
  }
`;

function CabinClassAndPessenger({ visible, setVisible, selectPeople }) {
  const adultRef = useRef();
  const childRef = useRef();

  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  // const [infant, setInfant] = useState(0);
  const [array, setArray] = useState([]);

  const [result, setResult] = useState({
    grade: 'economy',
    adult: 1,
    children: 0,
    infant: 0,
  });

  const selectClass = ({ target }) => {
    setResult(current => ({
      ...current,
      grade: target.value,
    }));
    // console.log(target.value);
  };
  const reduceAdult = () => {
    if (adult === 1) return;
    setAdult(adult - 1);
    const decreaseAdultNumber = +adultRef.current.value - 1;
    setResult(current => ({
      ...current,
      adult: decreaseAdultNumber,
    }));
    // console.log(decreaseAdultNumber);
  };

  const addAdult = () => {
    if (adult === 8) return;
    setAdult(adult + 1);
    const increaseAdultNumber = +adultRef.current.value + 1;
    setResult(current => ({
      ...current,
      adult: increaseAdultNumber,
    }));
    // console.log(increaseAdultNumber);
  };

  const reduceChild = () => {
    if (!array.length) return;
    setChildren(prevchildren => prevchildren - 1);
    setArray(current => {
      const newArray = [];
      for (let i = 0; i < array.length - 1; i++) {
        newArray.push(current[i]);
      }
      return newArray;
    });
    // console.log(array.length);
  };

  const addChild = () => {
    // console.log(array.length);
    setChildren(children + 1);
    setArray(prevArray => [
      ...prevArray,
      { infantId: children, age: '나이를 선택하세요', type: undefined },
    ]);
  };

  const completeResult = () => {
    const childNumber = array.filter(arr => arr.type === 'child').length;
    const infantNumber = array.filter(arr => arr.type === 'infant').length;
    // console.log(childNumber);
    // console.log(infantNumber);
    setResult(prevResult => {
      const newResult = {
        ...prevResult,
        infant: infantNumber,
        children: childNumber,
      };
      selectPeople(newResult);
      return newResult;
    });

    setVisible(false);

    return result;
  };

  return (
    <CabinSection visible={visible}>
      <Triangle />
      <CainContentWrapper>
        <div>
          <LabelTitle htmlFor="classGrade">좌석 등급</LabelTitle>
          <CabinClass
            value={result.grade}
            onChange={selectClass}
            key={uuid.v4()}
            id="classGrade"
            name="classGrade"
          >
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
              <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19 10a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4h14z"></path>
              </SvgIcon>
            </span>
          </MinusNumberButton>
          <PeopleNumber
            ref={adultRef}
            type="text"
            value={adult}
            onChange={() => {}}
          />
          <PlusNumberButton onClick={addAdult} disabled={adult === 8}>
            <span>
              <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10 10V5a2 2 0 1 1 4 0v5h5a2 2 0 1 1 0 4h-5v5a2 2 0 1 1-4 0v-5H5a2 2 0 1 1 0-4h5z"></path>
              </SvgIcon>
            </span>
          </PlusNumberButton>
        </ButtonWrapper>
        <PessengerBoundary>만 16세 이상</PessengerBoundary>

        <LabelTitle>유/소아</LabelTitle>
        <ButtonWrapper>
          <MinusNumberButton onClick={reduceChild} disabled={children === 0}>
            <span>
              <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19 10a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4h14z"></path>
              </SvgIcon>
            </span>
          </MinusNumberButton>
          <PeopleNumber
            ref={childRef}
            type="text"
            value={children}
            onChange={() => {}}
          />
          <PlusNumberButton onClick={addChild} disabled={children === 8}>
            <span>
              <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10 10V5a2 2 0 1 1 4 0v5h5a2 2 0 1 1 0 4h-5v5a2 2 0 1 1-4 0v-5H5a2 2 0 1 1 0-4h5z"></path>
              </SvgIcon>
            </span>
          </PlusNumberButton>
        </ButtonWrapper>
        <PessengerBoundary>만 0 - 15세</PessengerBoundary>

        {array.map(child => (
          <InfantandChild
            array={array}
            setArray={setArray}
            key={uuid.v4()}
            infants={child.infantId}
          />
        ))}
        {/* {state.map(child=>(<InfantandChild key={uuid.v4()} child={child}/>))} */}

        <WarningDetail>
          <p>
            여행 시 탑승객의 나이는 예약된 연령 범주에 부합해야 합니다. 항공사는
            만 18세 미만의 단독 여행 탐승객에 대한 제한이 있습니다.
          </p>
          <p>
            유/소아 동반 여행 시 연령제한과 정책은 항공사 별로 다를 수 있으니
            예약하기 전에 해당 항공사와 확인하시기 바랍니다.
          </p>
        </WarningDetail>
      </CainContentWrapper>
      <CompleteButton>
        <button onClick={() => completeResult()}>완료</button>
      </CompleteButton>
    </CabinSection>
  );
}
export default CabinClassAndPessenger;
