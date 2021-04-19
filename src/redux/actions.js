// Экшнкриейтор это функция, возвращает обьект (действие), со свойством type (уникальная строка) и свойством value (payload)

export const onLeaveFeedback = value => ({
  type: 'counter/onLeaveFeedback',
  payload: value,
});