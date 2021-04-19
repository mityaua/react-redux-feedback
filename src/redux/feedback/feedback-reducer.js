import actionTypes from './feedback-types'; // Импорт типов

// Изначальный стейт федбеков
const feedbackInitialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

// Редюсер по фидбекам
const feedbackReducer = (state = feedbackInitialState, { type, payload }) => {
  switch (type) {
    case actionTypes.LEAVE: {
      return {
        ...state,
        [payload]: (state[payload] += 1),
      };
    }

    default:
      return state;
  }
};

export default feedbackReducer;
