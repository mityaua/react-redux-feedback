import PropTypes from 'prop-types';
import StatisticsTotal from '../StatisticsTotal';
import Notification from '../Notification';

import { connect } from 'react-redux'; // Импорт функции конектита к глобальному хранилищу

import styles from './Statistics.module.scss';

const Statistics = ({ feedback }) => {
  // Считает общее количество отзывов
  const total = Object.keys(feedback).reduce(
    (acc, value) => acc + feedback[value],
    0,
  );

  // Считает процент хороших отзывов
  const percent = Math.round((feedback.good / total) * 100 || null);

  return (
    <>
      {!!total ? (
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

// Из стейта в пропы
const mapStateToProps = state => ({
  feedback: state.feedback,
});

export default connect(mapStateToProps)(Statistics);
