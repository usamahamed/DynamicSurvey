import React from 'react';
import PropTypes from 'prop-types';

import './RadioButton.css';

const MaterialRadioButton = props => (
  <div className="material-radio-button">
    <input
      id={props.value}
      type="radio"
      name={props.name}
      value={props.value}
      onClick={props.buttonClick}
      defaultChecked={props.defaultChecked}
    />
    <label htmlFor={props.value}>
      {props.label}
    </label>
  </div>
);

MaterialRadioButton.defaultProps = {
  defaultChecked: false,
};

MaterialRadioButton.propTypes = {
  defaultChecked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  value: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired,
};

export default MaterialRadioButton;
