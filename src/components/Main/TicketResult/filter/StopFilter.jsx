import React, { useState } from 'react';
import {
  FilterWrapperButton,
  FilterWrapperDl,
  FilterWrapperDd,
  FilterDropDiv,
  OptionContent,
  OptionHeader,
  StyleCheckBox,
} from '../../../styles/Filter.style';
import uuid from 'uuid';

const StopFilter = props => {
  const [drop, setDrop] = useState(true);
  const [stopLists, setStopLists] = useState([
    { id: '직항', checked: true, price: '₩ 117,780' },
    { id: '1회 경유', checked: true, price: '₩ 117,780' },
    { id: '2번 이상 경유', checked: true, price: '₩ 117,780' },
  ]);

  const onChange = id => {
    setStopLists(
      stopLists.map(stopList =>
        stopList.id === id
          ? { ...stopList, checked: !stopList.checked }
          : stopList,
      ),
    );
  };

  const switchDrop = () => {
    setDrop(!drop);
  };

  return (
    <FilterWrapperDl>
      <div>
        <dt>
          <FilterWrapperButton drop={drop} onClick={switchDrop}>
            <span>경유</span>
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M12 17.5l-7.2-6.4c-.6-.5-.7-1.5-.1-2.1.5-.6 1.5-.7 2.1-.1l5.2 4.6 5.2-4.6c.6-.6 1.6-.5 2.1.1s.5 1.6-.1 2.1L12 17.5z"></path>
            </svg>
          </FilterWrapperButton>
        </dt>
        <FilterWrapperDd>
          <FilterDropDiv drop={drop}>
            {stopLists.map(stopList => (
              <OptionHeader key={uuid.v4()}>
                <StyleCheckBox
                  onChange={() => onChange(stopList.id)}
                  checked={stopList.checked}
                >
                  {stopList.id}
                </StyleCheckBox>
                <OptionContent> {stopList.price} </OptionContent>
              </OptionHeader>
            ))}
          </FilterDropDiv>
        </FilterWrapperDd>
      </div>
    </FilterWrapperDl>
  );
};

export default StopFilter;
