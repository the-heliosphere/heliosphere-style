import styled from 'styled-components';
import spaces from '../settings/spaces';

const FormGroup = styled.div`
  &:not(:last-child) {
    margin-bottom: ${spaces.s3}px;
  }
`;

export default FormGroup;
