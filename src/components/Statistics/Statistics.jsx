import PropTypes from 'prop-types';
import StatisticsTotal from '../StatisticsTotal';
import Notification from '../Notification';

import { connect } from 'react-redux'; // Импорт функции конектита к глобальному хранилищу

import styles from './Statistics.module.scss';

const Statistics = ({ feedback, total, percent }) => {
  return (
    <>
      {total ? (
        <>
          <ul className={styles.list}>
            <li className={styles.item}>
              <p>
                Good: <span className={styles.value}>{feedback.good}</span>
              </p>
            </li>
            <li className={styles.item}>
              <p>
                Neutral:{' '}
                <span className={styles.value}>{feedback.neutral}</span>
              </p>
            </li>
            <li className={styles.item}>
              <p>
                Bad: <span className={styles.value}>{feedback.bad}</span>
              </p>
            </li>
          </ul>
          <StatisticsTotal total={total} percent={percent} />
        </>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </>
  );
};

Statistics.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};

// Считает общее количество отзывов
const getTotalFeedback = state =>
  Object.keys(state).reduce((acc, value) => acc + state[value], 0);

// Считает процент хороших отзывов
const getPositivePercent = (goodFeedback, totalFeedback) =>
  Math.round((goodFeedback / totalFeedback) * 100 || null);

// Из стейта в пропы
const mapStateToProps = state => ({
  feedback: state.feedback,
  total: getTotalFeedback(state.feedback),
  percent: getPositivePercent(
    state.feedback.good,
    getTotalFeedback(state.feedback),
  ),
});

export default connect(mapStateToProps)(Statistics);
