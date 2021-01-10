import Section from './section.js';
import Notification from './notification.js';

export default function Statistics({ good, bad, neutral }) {
  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  const totalFeedbacks = countTotalFeedback();

  if (totalFeedbacks === 0) {
    return <Notification message="No feedback given" />;
  } else {
    return (
      <Section title="Statistics" className="statistics">
        <div>Neutral {neutral}</div>
        <div>Bad {bad}</div>
        <div>Good! {good}</div>
        Total: {totalFeedbacks}
        <br />
        Positive % : {countPositiveFeedbackPercentage()}
        <br />
      </Section>
    );
  }
}
