import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import './QuestionCard.css';

const QuestionCard = props => (
  <Card className="question-card">{props.children}</Card>
);

QuestionCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
};

export default QuestionCard;
