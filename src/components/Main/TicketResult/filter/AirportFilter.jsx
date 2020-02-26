import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  FilterWrapperButton,
  FilterWrapperDl,
  FilterWrapperDd,
  FilterDropDiv,
  OptionContent,
  OptionHeader,
  StyleCheckBox,
  AirportSubTitle,
} from '../../../styles/Filter.style';
import uuid from 'uuid';

const AirportFilter = ({ session }) => {
  const [drop, setDrop] = useState(true);

  const [airportLists, setAirportLists] = useState([
    { id: 'LCY', checked: true, name: '런던시티' },
    { id: 'LGW', checked: true, name: '런던 개트윅' },
    { id: 'LHR', checked: true, name: '런던 히드로' },
    { id: 'STN', checked: true, name: '런던스탠스테드' },
  ]);

  const switchDrop = () => {
    setDrop(!drop);
  };

  const onChange = id => {
    setAirportLists(
      airportLists.map(airportList =>
        airportList.id === id
          ? { ...airportList, checked: !airportList.checked }
          : airportList,
      ),
    );
  };

  return (
    <FilterWrapperDl>
      <div>
        <dt>
          <FilterWrapperButton drop={drop} onClick={switchDrop}>
            <span>공항</span>
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M12 17.5l-7.2-6.4c-.6-.5-.7-1.5-.1-2.1.5-.6 1.5-.7 2.1-.1l5.2 4.6 5.2-4.6c.6-.6 1.6-.5 2.1.1s.5 1.6-.1 2.1L12 17.5z"></path>
            </svg>
          </FilterWrapperButton>
        </dt>
        <FilterWrapperDd>
          <FilterDropDiv drop={drop} allView={true}>
            <OptionHeader>
              <StyleCheckBox>
                출국 및 입국 시 <b>같은 공항</b>이용
              </StyleCheckBox>
            </OptionHeader>
            <AirportSubTitle>도착지</AirportSubTitle>
            {airportLists.map(airportList => (
              <OptionHeader key={uuid.v4()}>
                <StyleCheckBox
                  onChange={() => onChange(airportList.id)}
                  checked={airportList.checked}
                >
                  {airportList.id}
                </StyleCheckBox>
                <OptionContent> {airportList.name} </OptionContent>
              </OptionHeader>
            ))}
          </FilterDropDiv>
        </FilterWrapperDd>
      </div>
    </FilterWrapperDl>
  );
};

const mapStateToProps = state => ({
  session: state.session,
});

const mapDispatchToProps = dispatch => ({
  createSession: allInfo => {
    console.log('세션생성');
    // dispatch(clearError());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AirportFilter);
