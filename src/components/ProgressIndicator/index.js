import React from 'react';
import PropTypes from 'prop-types';

import './ProgressIndicator.css';

const ProgressIndicator = props => (
  <div className="progress-indicator">
    {props.currentQuestion} / {props.totalQuestions}
    <svg viewBox="0 0 50 50" className="progress-indicator__svg-box">
      <circle
        className="progress-indicator__circle"
        cx="25"
        cy="25"
        r="22"
        style={{
          strokeDasharray: '138.2304',
          strokeDashoffset: 138.2304 * (1 - props.progressPercentage),
        }}
      />
    </svg>
  </div>
);

ProgressIndicator.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  progressPercentage: PropTypes.number.isRequired,
};

export default ProgressIndicator;
