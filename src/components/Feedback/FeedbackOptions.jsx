import styles from './Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={() => onLeaveFeedback(options[0])}
      >
        {options[0]}
      </button>
      <button
        className={styles.button}
        onClick={() => onLeaveFeedback(options[1])}
      >
        {options[1]}
      </button>
      <button
        className={styles.button}
        onClick={() => onLeaveFeedback(options[2])}
      >
        {options[2]}
      </button>
    </div>
  );
};
