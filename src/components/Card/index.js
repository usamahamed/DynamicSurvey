import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const Card = props => (
  <div className={`card ${props.className}`}>{props.children}</div>
);

Card.defaultProps = {
  className: '',
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};

export default Card;
