import { createStore, combineReducers } from 'redux'; // Импортирует функцию создания хранилища и комбайн редюсеров
import { composeWithDevTools } from 'redux-devtools-extension'; // Импортирует прослойку для дев тулзов (до тулкита)

import feedbackReducer from './feedback/feedback-reducer';

// Композиция редюсеров (собирает все редюсеры в корневой редюсер)
const rootReducer = combineReducers({
  feedback: feedbackReducer,
});

// Создает хранилище + с корневым редюсером и прослойкой
const store = createStore(rootReducer, composeWithDevTools());

export default store;
