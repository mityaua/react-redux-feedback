import PropTypes from 'prop-types';

import { connect } from 'react-redux'
import * as actions from '../../redux/actions';

import styles from './FeedbackOptions.module.scss';

const FeedbackOptions = ({ feedback, onLeaveFeedback }) => {
  return (
    <ul className={styles.list}>
      {Object.keys(feedback).map(btnName => {
        return (
          <li className={styles.item} key={btnName}>
            <button
              className={styles.button}
              type="button"
              onClick={onLeaveFeedback}
            >
              {btnName}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  feedback: state.feedback,
});

const mapDispatchToProps = dispatch => ({
  onLeaveFeedback: event => dispatch(actions.onLeaveFeedback(event.target.textContent)),
});


export default connect(mapStateToProps, mapDispatchToProps)(FeedbackOptions);
