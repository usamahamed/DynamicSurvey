import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Button from '../../components/Button';
import './Landing.css';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.startSurvey = this.startSurvey.bind(this);
  }

  startSurvey() {
    this.props.history.push(`/question/${this.props.firstQuestionID}`);
  }

  render() {
    return (
      <div className="landing-view">
        <div className="landing-view-content">
          <h1>Dynamic Survey</h1>
          <div>
            <Button buttonClick={this.startSurvey} className="button--large">START SURVEY</Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  firstQuestionID: state.question.questionData.questions[0].id,
});

LandingPage.propTypes = {
  firstQuestionID: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(withRouter(LandingPage));
