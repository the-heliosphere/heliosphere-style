import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  colors, spaces, types, radius, height,
} from '../settings/settings';

const Input = styled.input`
  border: none;
  color: ${colors.gray};
  font-family: ${types.fontText};
  font-size: ${types.fs2};
  width: 100%;
  
  &:placeholder {
    color: ${colors.grayLight}
  }
`;

const InputWrapper = styled.div`
  padding: 0 ${spaces.s2}px;
  background-color: #FFF;
  opacity: .5;
  border-radius: ${radius.r2}px;
  overflow: hidden;
  display: flex;
  align-items: center;
  height: ${height.inputHeight};
  
  svg + input {
    margin-left: ${spaces.s1}px;
  }
`;

const InputContainer = ({ icon, ...otherProps }) => (
  <InputWrapper>
    {icon || null}
    <Input {...otherProps} />
  </InputWrapper>
);

InputContainer.propTypes = {
  icon: PropTypes.instanceOf(Object),
};

InputContainer.defaultProps = {
  icon: null,
};

export default InputContainer;
