import React from 'react';
import styled from 'styled-components';
import InfantChild, { LabelTitle, CabinClass } from './InfantChild';
import uuid from 'uuid';

const CabinSection = styled.section`
  z-index: 99;
  display: block;
  background-color: #fff;
  position: absolute;
  top: 7.8rem;
  border: 1px solid #dddde5;
  border-radius: 0.6rem;
  box-shadow: 0 4px 14px 0 rgba(37, 32, 31, 25);
  width: 36.6rem;
`;

const CainContentWrapper = styled.div`
  display: block;
  padding: 12px;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #dddef5;
`;

const MinusNumberButton = styled.button`
  line-height: 1;
  width: 3.4rem;
  height: 3.4rem;
  border: 1px solid #ddd;
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
  line-height: 1;
  width: 3.4rem;
  height: 3.4rem;
  border: 1px solid #ddddef;
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

function CabinClassAndPassenger({
  setVisible,
  setPassengerInfo,
  passengerInfo,
}) {
  const selectClass = ({ target }) => {
    setPassengerInfo(cur => ({
      ...cur,
      cabinClass: target.value,
    }));
  };

  const reduceAdult = () => {
    setPassengerInfo(cur => ({
      ...cur,
      adults: cur.adults - 1,
    }));
  };

  const addAdult = () => {
    setPassengerInfo(cur => ({
      ...cur,
      adults: cur.adults + 1,
    }));
  };

  const getNextId = () =>
    Math.max(0, ...passengerInfo.children.map(c => c.id)) + 1;

  const addChild = () => {
    setPassengerInfo(cur => ({
      ...cur,
      children: [
        ...cur.children,
        { id: getNextId(), age: '나이를 선택하세요', type: undefined },
      ],
    }));
  };

  const reduceChild = () => {
    setPassengerInfo(cur => {
      const newChildren = [...cur.children];
      newChildren.pop();

      return {
        ...cur,
        children: newChildren,
      };
    });
  };

  const hideModal = () => {
    console.log(passengerInfo);
    setVisible(false);
  };

  return (
    <CabinSection>
      <Triangle />
      <CainContentWrapper>
        <div>
          <LabelTitle htmlFor="classGrade">좌석 등급</LabelTitle>
          <CabinClass
            value={passengerInfo.cabinClass}
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
          <MinusNumberButton
            onClick={reduceAdult}
            disabled={passengerInfo.adults === 1}
          >
            <span>
              <SvgIcon viewBox="0 0 24 24">
                <path d="M19 10a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4h14z"></path>
              </SvgIcon>
            </span>
          </MinusNumberButton>
          <PeopleNumber
            type="text"
            value={passengerInfo.adults}
            onChange={() => {}}
          />
          <PlusNumberButton
            onClick={addAdult}
            disabled={passengerInfo.adults === 8}
          >
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
          <MinusNumberButton
            onClick={reduceChild}
            disabled={passengerInfo.children === 0}
          >
            <span>
              <SvgIcon viewBox="0 0 24 24">
                <path d="M19 10a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4h14z"></path>
              </SvgIcon>
            </span>
          </MinusNumberButton>
          <PeopleNumber
            type="text"
            value={passengerInfo.children.length}
            onChange={() => {}}
          />
          <PlusNumberButton
            onClick={addChild}
            disabled={passengerInfo.children === 8}
          >
            <span>
              <SvgIcon viewBox="0 0 24 24">
                <path d="M10 10V5a2 2 0 1 1 4 0v5h5a2 2 0 1 1 0 4h-5v5a2 2 0 1 1-4 0v-5H5a2 2 0 1 1 0-4h5z"></path>
              </SvgIcon>
            </span>
          </PlusNumberButton>
        </ButtonWrapper>
        <PessengerBoundary>만 0 - 15세</PessengerBoundary>

        {passengerInfo.children.map(child => (
          <InfantChild
            setPassengerInfo={setPassengerInfo}
            key={uuid.v4()}
            child={child}
          />
        ))}
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
        <button onClick={hideModal}>완료</button>
      </CompleteButton>
    </CabinSection>
  );
}
export default CabinClassAndPassenger;
