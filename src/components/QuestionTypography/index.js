import React from 'react';
import PropTypes from 'prop-types';

import './QuestionTypography.css';

const QuestionTypography = props => <h1 className="question-typography">{props.text}</h1>;

QuestionTypography.propTypes = {
  text: PropTypes.string.isRequired,
};

export default QuestionTypography;
