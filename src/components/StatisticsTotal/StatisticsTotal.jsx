import PropTypes from 'prop-types';
import styles from './StatisticsTotal.module.scss';

const StatisticsTotal = ({ total, percent }) => {
  return (
    <div>
      <p className={styles.item}>
        Total: <span className={styles.value}>{total}</span>
      </p>
      <p className={styles.item}>
        Positive feedback: <span className={styles.value}>{percent}%</span>
      </p>
    </div>
  );
};

StatisticsTotal.propTypes = {
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};

export default StatisticsTotal;
