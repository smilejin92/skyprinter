import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  FilterWrapperButton,
  FilterWrapperDl,
  FilterWrapperDd,
  FilterDropDiv,
  OptionContent,
  OptionHeader,
  StyleCheckBox,
  AllSelectOrRemoveDiv,
  AllSelectBtn,
  AllRemoveBtn,
} from '../../../styles/Filter.style';
import uuid from 'uuid';

const getCarriers = Agents => {
  // 1번 airline인 타입 분류
  const Airlines = Agents.filter(agent => agent.Type === 'Airline');
  const names = Airlines.map(airline => ({
    id: airline.Id,
    checked: true,
    name: airline.Name,
  })).sort((a, b) => {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });

  const getUniqueObjectArray = array => {
    return array.filter((item, i) => {
      return (
        array.findIndex((item2, j) => {
          return item.name === item2.name;
        }) === i
      );
    });
  };

  return getUniqueObjectArray(names);
};

const CarrierFilter = ({ session }) => {
  const [drop, setDrop] = useState(true);
  const [carrierLists, setCarrierLists] = useState([]);

  useEffect(() => {
    // setAirportLists(session.pollResult.)
    setCarrierLists(() => getCarriers(session.pollResult.Agents));
  }, [session.pollResult.Agents]);

  const onChange = id => {
    setCarrierLists(
      carrierLists.map(carrierList =>
        carrierList.id === id
          ? { ...carrierList, checked: !carrierList.checked }
          : carrierList,
      ),
    );
  };

  const switchDrop = () => {
    setDrop(!drop);
  };

  const allSelect = () => {
    setCarrierLists(
      carrierLists.map(carrierList => ({ ...carrierList, checked: true })),
    );
  };

  const allRemove = () => {
    setCarrierLists(
      carrierLists.map(carrierList => ({ ...carrierList, checked: false })),
    );
  };

  return (
    <FilterWrapperDl>
      <div>
        <dt>
          <FilterWrapperButton drop={drop} onClick={switchDrop}>
            <span>항공사</span>
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M12 17.5l-7.2-6.4c-.6-.5-.7-1.5-.1-2.1.5-.6 1.5-.7 2.1-.1l5.2 4.6 5.2-4.6c.6-.6 1.6-.5 2.1.1s.5 1.6-.1 2.1L12 17.5z"></path>
            </svg>
          </FilterWrapperButton>
        </dt>
        <FilterWrapperDd>
          <FilterDropDiv drop={drop} allView={true}>
            <AllSelectOrRemoveDiv>
              <AllSelectBtn
                onClick={allSelect}
                disabled={
                  !carrierLists.some(
                    carrierList => carrierList.checked !== true,
                  )
                }
              >
                모두 선택
              </AllSelectBtn>
              |
              <AllRemoveBtn
                onClick={allRemove}
                disabled={
                  !carrierLists.some(
                    carrierList => carrierList.checked !== false,
                  )
                }
              >
                모두 지우기
              </AllRemoveBtn>
            </AllSelectOrRemoveDiv>
            {carrierLists.map(carrierList => (
              <OptionHeader key={uuid.v4()}>
                <StyleCheckBox
                  onChange={() => onChange(carrierList.id)}
                  checked={carrierList.checked}
                >
                  {carrierList.name}
                </StyleCheckBox>
                <OptionContent> ₩117,209 </OptionContent>
                {/* <OptionContent> {carrierList.price} </OptionContent> */}
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

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CarrierFilter);
