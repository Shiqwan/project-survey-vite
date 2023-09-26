import React, { useState } from 'react';
import SurveySummary from './SurveySummary';
import QuestionCelebrate from './QuestionCelebrate';
import QuestionGender from './QuestionGender';
import QuestionAge from './QuestionAge';
import QuestionLikeMost from './QuestionLikeMost';
import QuestionGift from './QuestionGift';

function Submit() {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(''); 
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });

    // Determine the index of the current question
    const currentQuestionIndex = questionOrder.indexOf(question);

    if (currentQuestionIndex === questionOrder.length - 1) {
      // If it's the last question, set submitted to true
      setSubmitted(true);
    } else {
      // Otherwise, move to the next question
      setCurrentQuestion(questionOrder[currentQuestionIndex + 1]);
    }
  };

  const handleSubmit = () => {
    // Submit the survey
    setSubmitted(true);
  };

  const questionOrder = ['celebrate', 'selectedGender', 'selectedAge', 'option', 'likedOption', 'summary'];

  return (
    <div>
      {submitted ? (
        <SurveySummary surveyAnswers={answers} />
      ) : (
        <>
          {/* Render questions based on the current question state */}
          {currentQuestion === 'celebrate' && (
            <QuestionCelebrate onAnswer={(answer) => handleAnswer('celebrate', answer)} />
          )}
          {currentQuestion === 'selectedGender' && (
            <QuestionGender onAnswer={(answer) => handleAnswer('selectedGender', answer)} />
          )}
          {currentQuestion === 'selectedAge' && (
            <QuestionAge onAnswer={(answer) => handleAnswer('selectedAge', answer)} />
          )}
          {currentQuestion === 'option' && (
            <QuestionLikeMost onAnswer={(answer) => handleAnswer('option', answer)} />
          )}
          {currentQuestion === 'likedOption' && (
            <QuestionGift onAnswer={(answer) => handleAnswer('likedOption', answer)} />
          )}

          {/* Render the submit button */}
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </div>
  );
}

export default Submit;



  


















