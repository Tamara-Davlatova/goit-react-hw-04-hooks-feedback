import { useState } from 'react';
import FeedbackOptions from './Components/FeeedbackOptions/FeedbackOptions';
import Section from './Components/Section/Section';
import Statistics from './Components/Statistics/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];
  const feedbacks = [good, neutral, bad];

  const countTotalFeedback = () => {
    return feedbacks.reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const handleBtnIncrement = e => {
    switch (e.currentTarget.name) {
      case 'good':
        setGood(g => g + 1);
        break;

      case 'neutral':
        setNeutral(n => n + 1);
        break;

      case 'bad':
        setBad(b => b + 1);
        break;

      default:
        return;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleBtnIncrement}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={
            countPositiveFeedbackPercentage() > 0
              ? countPositiveFeedbackPercentage()
              : 0
          }
        />
      </Section>
    </>
  );
}
