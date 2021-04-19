import PropTypes from 'prop-types';
import Notification from '../Notification';

import { connect } from 'react-redux';

import styles from './Statistics.module.scss';

const Statistics = ({ feedback }) => {
  // Вынести метод из компонента
  const total = Object.keys(feedback).reduce(
    (acc, value) => acc + feedback[value],
    0,
  );

  // Вынести метод из компонента
  const percent = Math.round((feedback.good * 100) / total || null);

  return (
    <div>
      {!!total ? (
        <ul>
          <li className={styles.item}>
            <p>
              Good: <span className={styles.value}>{feedback.good}</span>
            </p>
          </li>
          <li className={styles.item}>
            <p>
              Neutral: <span className={styles.value}>{feedback.neutral}</span>
            </p>
          </li>
          <li className={styles.item}>
            <p>
              Bad: <span className={styles.value}>{feedback.bad}</span>
            </p>
          </li>
          <li className={styles.item}>
            <p>
              Total: <span className={styles.value}>{total}</span>
            </p>
          </li>
          <li className={styles.item}>
            <p>
              Positive feedback:{' '}
              <span className={styles.value}>{percent}%</span>
            </p>
          </li>
        </ul>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </div>
  );
};

Statistics.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};

const mapStateToProps = state => ({
  feedback: state.feedback,
});

export default connect(mapStateToProps)(Statistics);
