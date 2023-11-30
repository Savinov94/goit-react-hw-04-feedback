import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import Buttons from './Buttons/Buttons';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import css from './App.module.css';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleClick = (buttonLabel) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [buttonLabel.toLowerCase()]: prevFeedback[buttonLabel.toLowerCase()] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const percentage =
      totalFeedback === 0 ? 0 : (feedback.good / totalFeedback) * 100;
    return Math.floor(percentage);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className={css.add}>
      <Section title="Please leave feedback">
        <Buttons handleClick={handleClick} options={['Good', 'Neutral', 'Bad']} />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};

export default App;