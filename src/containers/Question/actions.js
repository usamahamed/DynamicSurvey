import { SUBMIT_ANSWER, RESET_STORE } from './constants';
import Questions from './data';

export function submitAnswer(id, answer) {
  return {
    type: SUBMIT_ANSWER,
    answer,
    id,
  };
}

export function resetStore() {
  return {
    type: RESET_STORE,
    store: Questions,
  };
}
