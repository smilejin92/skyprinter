import React, { useState } from 'react';
import { Checkbox } from 'antd';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toggleDirect } from '../../redux/modules/session';

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

const CheckBox = ({ disabled, toggleDirect, children, isDirect }) => {
  // const [checkbox, setCheckbox] = useState({
  //   checked: false,
  //   disabled: false || disabled,
  // });

  // const onChange = e => {
  //   setCheckbox({
  //     checked: isDirect,
  //     disabled: checkbox.disabled,
  //   });
  //   toggleDirect();
  // };

  return (
    <StyledCheckbox
      checked={disabled ? false : isDirect}
      disabled={disabled}
      onChange={toggleDirect}
    >
      {children}
    </StyledCheckbox>
  );
};

const mapStateToProps = ({ session }) => ({
  isDirect: session.isDirect
});

const mapDispatchToProps = dispatch => ({
  toggleDirect: () => {
    dispatch(toggleDirect());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);
