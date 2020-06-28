import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { spaces } from '../../styles/settings/settings';

const onHasMargin = css`
  * + * {
    margin-left: ${spaces.s2}px;
  }
`;

const Wrapper = styled.div`
  ${({ hasMargin }) => (hasMargin ? onHasMargin : null)}
`;

Wrapper.propTypes = {
  hasMargin: PropTypes.bool,
};
Wrapper.defaultProps = {
  hasMargin: true,
};

export default Wrapper;
