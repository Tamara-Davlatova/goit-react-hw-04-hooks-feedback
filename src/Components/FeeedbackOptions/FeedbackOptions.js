import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <>
      {options.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          className={s.btn}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
