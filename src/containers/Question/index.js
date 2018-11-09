import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../../components/Header';
import QuestionCard from '../../components/QuestionCard';
import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionTypography from '../../components/QuestionTypography';
import AnswerField from '../../components/AnswerField';
import CardFooter from '../../components/CardFooter';
import { submitAnswer } from './actions';
import './Question.css';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      hasError: false,
    };
    this.navigateBack = this.navigateBack.bind(this);
    this.getCurrentQuestionPosition = this.getCurrentQuestionPosition.bind(this);
    this.getCurrentQuestion = this.getCurrentQuestion.bind(this);
    this.submitResponse = this.submitResponse.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
    this.completedPercent = this.completedPercent.bind(this);
    this.populateAnswer = this.populateAnswer.bind(this);
  }

  componentWillMount() {
    this.populateAnswer(this.getCurrentQuestion().answer);
  }

  componentWillReceiveProps(nextProps) {
    const currentPosition = this.getCurrentQuestionPosition(
      nextProps.questionData.questions,
      nextProps.match.params.id,
    );
    this.populateAnswer(nextProps.questionData.questions[currentPosition].answer);
  }

  getCurrentQuestionPosition(questions, id) {
    let currentPosition = 0;
    const currentQuestions = questions || this.props.questionData.questions;
    for (let i = 0; i < currentQuestions.length; i += 1) {
      if (
        currentQuestions[i].id === parseInt(id || this.props.match.params.id, 10)
      ) {
        currentPosition = i;
        break;
      }
    }
    return currentPosition;
  }

  getCurrentQuestion() {
    const currentQuestion = this.props.questionData.questions[
      this.getCurrentQuestionPosition()
    ];
    return currentQuestion;
  }

  submitResponse(question) {
    this.props.submitAnswer(question.id, this.state.answer);
    if (
      this.getCurrentQuestionPosition() + 1 <
      this.props.questionData.questions.length
    ) {
      this.props.history.push(`/question/${
        this.props.questionData.questions[
          this.getCurrentQuestionPosition() + 1
        ].id
      }`);
    } else {
      this.props.history.push('/survey-success');
    }
    this.setState({ answer: '' });
  }

  updateAnswer(event) {
    this.setState({ answer: event.target.value });
  }

  completedPercent() {
    return (this.getCurrentQuestionPosition() + 1) /
    this.props.questionData.questions.length;
  }

  navigateBack() {
    this.props.history.goBack();
  }

  populateAnswer(answer) {
    this.setState({ answer });
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const currentQuestion = this.getCurrentQuestion();
    return (
      <div className="question-view">
        {this.state.hasError ? (
          <h1 className="text-center error">Oops! Something went wrong!</h1>
        ) : (
          <div>
            <Header goBack={this.navigateBack} />
            <div className="question-card-wrapper">
              <QuestionCard>
                <ProgressIndicator
                  progressPercentage={this.completedPercent()}
                  currentQuestion={this.getCurrentQuestionPosition() + 1}
                  totalQuestions={this.props.questionData.questions.length}
                />
                <QuestionTypography text={currentQuestion.question} />
                <AnswerField
                  currentQuestion={{
                    ...currentQuestion,
                    answer: this.state.answer,
                  }}
                  updateAnswer={this.updateAnswer}
                />
                <CardFooter
                  fieldValue={this.state.answer}
                  clickSubmit={() => this.submitResponse(currentQuestion)}
                  clickBack={this.navigateBack}
                />
              </QuestionCard>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questionData: state.question.questionData,
});

const mapDispatchToProps = dispatch => ({
  submitAnswer: (id, answer) => dispatch(submitAnswer(id, answer)),
});

Question.propTypes = {
  questionData: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  submitAnswer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Question));
