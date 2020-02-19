import React, { useRef } from 'react';
import { LabelTitle, CabinClass } from './InfantChild';
import uuid from 'uuid';
import useOutsideRef from '../../../hooks/useOutsideRef';
import InfantChildContainer from '../../../containers/InfantChildContainer';
import {
  CabinSection,
  CainContentWrapper,
  MinusNumberButton,
  PlusNumberButton,
  ButtonWrapper,
  SvgIcon,
  PessengerBoundary,
  WarningDetail,
  CompleteButton,
  PeopleNumber,
  Triangle,
} from '../../styles/CabinClassAndPassenger.style';

function CabinClassAndPassenger({
  passengerInfo,
  hideModal,
  setCabinGrade,
  setAdult,
  setChild,
}) {
  const selectClass = ({ target }) => {
    setCabinGrade(target.value);
  };
  const addAdult = () => {
    setAdult('add');
  };

  const reduceAdult = () => {
    setAdult('subtract');
  };

  const addChild = () => {
    setChild('add');
  };

  const reduceChild = () => {
    setChild('remove');
  };
  const outsideRef = useRef(null);
  useOutsideRef(outsideRef, hideModal);

  return (
    <CabinSection ref={outsideRef}>
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
            disabled={passengerInfo.children.length === 0}
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
            disabled={passengerInfo.children.length === 8}
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
          <InfantChildContainer
            // setPassengerInfo={setPassengerInfo}
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
