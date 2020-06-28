import styled from 'styled-components';
import spaces from '../settings/spaces';
import radius from '../settings/radius';

const Box = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
  padding: ${spaces.s4}px;
  border-radius: ${radius.r2}px;
`;

export default Box;
