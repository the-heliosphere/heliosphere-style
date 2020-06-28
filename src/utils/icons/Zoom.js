import * as React from 'react';

const Zoom = (props) => (
  <svg width={24} height={24} {...props}>
    <g
      className="zoom-2_svg__nc-icon-wrapper"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(.5 .5)"
      fill="none"
      stroke="#5c6888"
      strokeMiterlimit={10}
    >
      <path data-color="color-2" d="M22 22l-5.6-5.6" />
      <circle cx={10} cy={10} r={9} />
    </g>
  </svg>
);

Zoom.defaultProps = {};
Zoom.propTypes = {};
Zoom.displayName = 'Zoom';

export default Zoom;
