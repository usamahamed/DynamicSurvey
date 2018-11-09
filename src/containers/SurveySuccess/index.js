import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Card from '../../components/Card';
import QuestionTypography from '../../components/QuestionTypography';
import Button from '../../components/Button';

import { LOCAL_STORAGE_KEY } from '../../constants';
import { resetStore } from '../Question/actions';
import './SurveySuccess.css';

class SurveySuccess extends Component {
  static getAnswer(question) {
      return question.answer;
   }

  constructor(props) {
    super(props);
    this.navigateBack = this.navigateBack.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  navigateBack() {
    this.props.history.goBack();
  }

  resetForm() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    this.props.resetStore();
    this.props.history.go(-this.props.questions.length);

  }

  render() {
    const { questions } = this.props;
    return (
      <React.Fragment>
        <Header goBack={this.navigateBack} />
        <div className="survey-success-wrapper">
          {questions.map(question => (
            <Card className="card--survey-success" key={question.id}>
              <QuestionTypography text={question.question} />
              <div className="answer">{SurveySuccess.getAnswer(question)}</div>
            </Card>
          ))}
          <div className="text-center">
            <Button buttonClick={this.resetForm}>RESET FORM</Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.question.questionData.questions,
});

const mapDispatchToProps = dispatch => ({
  resetStore: () => dispatch(resetStore()),
});

SurveySuccess.propTypes = {
  questions: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  resetStore: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SurveySuccess));
