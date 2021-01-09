import FeedbackOptions from './feedbackOptions';
import Section from './section';

export default function Feedback({ increaseFeedback }) {
  return (
    <div>
      <Section title="Please leave a feedback" className="feddback">
        <FeedbackOptions onLeaveFeedback={increaseFeedback} />
      </Section>
    </div>
  );
}
