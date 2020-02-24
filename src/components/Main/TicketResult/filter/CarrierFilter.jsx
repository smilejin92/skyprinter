import React, { useState } from 'react';
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

const CarrierFilter = props => {
  const [drop, setDrop] = useState(true);
  const [carrierLists, setCarrierLists] = useState([
    { id: '대한항공 (KAL)', checked: true, price: '₩ 117,780' },
    { id: '아시아나', checked: true, price: '₩ 117,780' },
    { id: '이스타항공', checked: true, price: '₩ 117,780' },
  ]);

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
                  {carrierList.id}
                </StyleCheckBox>
                <OptionContent> {carrierList.price} </OptionContent>
              </OptionHeader>
            ))}
          </FilterDropDiv>
        </FilterWrapperDd>
      </div>
    </FilterWrapperDl>
  );
};

export default CarrierFilter;
