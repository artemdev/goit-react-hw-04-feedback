import './App.css';
import Feedback from './components/feedback.js';
import Statistics from './components/statistics.js';
import { useState } from 'react';

export default function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const increaseFeedback = e => {
    const { name } = e.currentTarget;
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      default:
        break;
    }
  };

  const statisticsProps = {
    good: good,
    bad: bad,
    neutral: neutral,
  };

  return (
    <div>
      <Feedback increaseFeedback={increaseFeedback} />
      <Statistics {...statisticsProps} />
    </div>
  );
}
