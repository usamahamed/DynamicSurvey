import { SUBMIT_ANSWER, RESET_STORE } from './constants';
import Questions from '../Question/data';

const initialState = Questions;

function updateQuestions(questions, action) {
  const updatedQuestions = questions.map((question) => {
    if (action.id === question.id) {
      return {
        ...question,
        answer: action.answer,
      };
    }
    return question;
  });
  return updatedQuestions;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_ANSWER:
      return {
        ...state,
        questionData: {
          questions: updateQuestions(state.questionData.questions, action),
        },
      };
    case RESET_STORE:
      return {
        ...action.store,
      };
    default:
      return state;
  }
};
