import { createStore } from 'redux';

const initialState = {
  feedback: {
    good: 0,
    neutral: 0,
    bad: 0,
  },
};

// Редюсер с пустым стейтом (пустой обьект) и экшеном (пропускает через себя все экшены). Возвращает стейт.
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'counter/onLeaveFeedback':
      return {
        ...state,
        feedback: {
          ...state.feedback,
          [payload]: (state.feedback[payload] += 1),
        },
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
