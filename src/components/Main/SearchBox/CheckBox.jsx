import React, { useState } from 'react';
import { Checkbox } from 'antd';
import styled from 'styled-components';

const StyledCheckbox = styled(Checkbox)`
  margin-top: 1.2rem;
  width: 15rem;

  label {
    margin: 0;
    line-height: 1.8rem;
    font-weight: 400;
    letter-spacing: normal;
    cursor: pointer;
    width: 150px;
  }
  span {
    font-size: 1.2rem;
    color: #fff;
  }
`;

const CheckBox = props => {
  const [checkbox, setCheckbox] = useState({
    checked: false,
    disabled: false || props.disabled,
  });

  const onChange = e => {
    console.log('checked = ', e.target.checked);
    setCheckbox({
      checked: e.target.checked,
      disabled: checkbox.disabled,
    });
  };

  return (
    <StyledCheckbox
      checked={checkbox.checked}
      disabled={checkbox.disabled}
      onChange={onChange}
    >
      {props.children}
    </StyledCheckbox>
  );
};

export default CheckBox;
