import actionTypes from './feedback-types'; // Импорт типов

// Экшн-криейтор это функция, возвращает обьект (действие), со свойством type (уникальная строка) и свойством value (payload)
export const onLeaveFeedback = value => ({
  type: actionTypes.LEAVE,
  payload: value,
});
