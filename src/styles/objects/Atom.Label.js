import styled from 'styled-components';
import spaces from '../settings/spaces';
import types from '../settings/types';

const Label = styled.label`
  color: ${({ theme }) => theme.label};
  margin-bottom: ${spaces.s1}px;
  font-family: ${types.fontText};
  font-size: ${types.fs1};
  display: block;
`;

export default Label;
