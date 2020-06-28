import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import {
  radius, spaces, types,
} from '../settings/settings';

const onFullWidth = css`
  display: block;
  width: 100%;
`;

const Button = styled.button`
  padding: ${({ size }) => `${spaces[`s${size}`]}px ${spaces[`s${size * 3}`]}px`};
  border-radius: ${radius.r1}px;
  border: none;
  background-color: ${({ bg, theme }) => (bg === 'default' ? theme.gray : theme[bg])};
  color: ${({ bg, theme }) => (bg === 'default' ? theme.text : theme.btnText)};
  font-family: ${types.fontText};
  cursor: pointer;
  transition: all .3s ease-in-out;
  font-size: ${({ size }) => `${types[`fs${size}`]}`};
  
  &:hover {
    background-color: ${({ bg, theme }) => (bg === 'default' ? theme.gray : `${theme[`${bg}Hover`]}`)};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.gray};
    color: ${({ theme }) => theme.grayDark};
  }
  
  ${({ fullWidth }) => (fullWidth ? onFullWidth : null)}
`;

Button.propTypes = {
  size: PropTypes.number,
  bg: PropTypes.oneOf(['primary', 'danger', 'success', 'warning', 'default']),
  fs: PropTypes.oneOf([1, 2, 3, 4]),
};

Button.defaultProps = {
  size: 1,
  bg: 'default',
  fs: 1,
};

export default Button;
