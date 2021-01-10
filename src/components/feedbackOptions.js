export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div>
      <button name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button name="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
      <button name="good" onClick={onLeaveFeedback}>
        Good!
      </button>
    </div>
  );
}
