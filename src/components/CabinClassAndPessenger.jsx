import React, { useState } from 'react';
import styled from 'styled-components';

const CabinSection = styled.section`
  display: block;
  border: 1px solid #dddde5;
  border-radius: 0.6rem;
  box-shadow: 0 4px 14px 0 rgba(37, 32, 31, 25);
  width: 36.6rem;
  height: 41.8rem;
`;

const LabelTitle = styled.label`
  padding-top: 1.2rem;
  padding-bottom: 0.8rem;
  font-size: 1.6rem;
  font-weight: 700;
  display: block;
`;

const CabinClass = styled.select`
  padding: 0.6rem 3rem 0.6rem 1.2rem;
  border: 1px solid #b2b2bf;
  background: #fff;
  line-height: 2.2rem;
  height: 3.6rem;
  width: 100%;
  font-size: 1.6rem;
`;
const CainContentWrapper = styled.div`
  display: block;
  padding: 12px;
  width: 100%;
  height: 38.2rem;
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
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);

  const a = () => {
    if (child === 0) return;
    if (child === 1)
      return (
        <>
          <LabelTitle>유/소아</LabelTitle>
          <CabinClass>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
          </CabinClass>
        </>
      );
    if (child === 3)
      return {
        ...child,
      };
    //0 return null
    // 1 retyrn add
    // 2
  };

  return (
    <CabinSection>
      <CainContentWrapper>
        <div>
          <LabelTitle>좌석 등급</LabelTitle>
          <CabinClass>
            <option>일반석</option>
            <option>프리미엄 일반석</option>
            <option>비즈니스석</option>
            <option>일등석</option>
          </CabinClass>
          <LabelTitle>성인</LabelTitle>
          <ButtonWrapper>
            <MinusNumberButton
              onClick={() => setAdult(adult - 1)}
              disabled={adult === 1}
            >
              <span>
                <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19 10a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4h14z"></path>
                </SvgIcon>
              </span>
            </MinusNumberButton>
            <PeopleNumber type="text" value={adult} />
            <PlusNumberButton
              onClick={() => setAdult(adult + 1)}
              disabled={adult === 8}
            >
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
            <MinusNumberButton
              onClick={() => setChild(child - 1)}
              disabled={child === 0}
            >
              <span>
                <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19 10a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4h14z"></path>
                </SvgIcon>
              </span>
            </MinusNumberButton>
            <PeopleNumber type="text" value={child} />
            <PlusNumberButton
              onClick={() => setChild(child + 1)}
              disabled={child === 8}
            >
              <span>
                <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M10 10V5a2 2 0 1 1 4 0v5h5a2 2 0 1 1 0 4h-5v5a2 2 0 1 1-4 0v-5H5a2 2 0 1 1 0-4h5z"></path>
                </SvgIcon>
              </span>
            </PlusNumberButton>
          </ButtonWrapper>
          <PessengerBoundary>만 0 - 15세</PessengerBoundary>
        </div>
        {a()}
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
        <button>완료</button>
      </CompleteButton>
    </CabinSection>
  );
}
export default CabinClassAndPessenger;
