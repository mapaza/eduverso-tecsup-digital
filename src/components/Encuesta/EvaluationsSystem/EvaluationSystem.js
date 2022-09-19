import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import {
  // Button,
  EvaluationSystemContainer,
  QuestionsWrapper,
  QuestionsInnerWrapper,
} from './Styles';

import Question from './Question';

// const noop = () => { };

function EvaluationsSystem({
  questions: questionsTmp,
  onFinishEvaluation,
  onCheckAlternative,
}) {
  const [stateQuestions, setStateQuestions] = useState({
    questions: questionsTmp,
    questionActive: 0,
    questionsCount: questionsTmp.length,
    answeredQuestions: 0,
    alternativesSelected: {},
    direction: 'next',
  });


  useEffect(() => {

  }, [stateQuestions.alternativeSelected]);

  function handlePrevQuestion() {
    if (stateQuestions.questionActive > 0) {
      setStateQuestions((s) => ({
        ...s,
        questionActive: s.questionActive - 1,
      }));
    }
  }


  const {
    questionActive,
    alternativesSelected,
    questions,
    questionsCount,
  } = stateQuestions;


  function handleChangeAlternative(idAlternative, questionId, typeQuestion) {
    if (typeQuestion === 1) {
      if (alternativesSelected[questionId] === idAlternative) {
        delete alternativesSelected[questionId];
      } else {
        alternativesSelected[questionId] = idAlternative;
      }
    }

    setStateQuestions((s) => ({
      ...s,
      answeredQuestions: Object.keys(s.alternativesSelected).length,
    }));
  }


  function handleCheckAlternative() {
    const question = questions[questionActive];
    const alternative = question.alternativas.find(
      (x) => x.idAlternativa === alternativesSelected[question.idPregunta]
    );
    onCheckAlternative(alternative.valorAlternativa, question.idPregunta);
  }
  function handleFinishEvaluation() {
    handleCheckAlternative();
    onFinishEvaluation(alternativesSelected);
  }
  function handleNextQuestion() {
    if (stateQuestions.questionActive < stateQuestions.questionsCount - 1) {
      handleCheckAlternative();
      setStateQuestions((s) => ({
        ...s,
        questionActive: s.questionActive + 1,
      }));
    }
  }
  return (
    <EvaluationSystemContainer>
      <QuestionsWrapper>
        <QuestionsInnerWrapper
          style={{ transform: `translate(0,${-questionActive * 80}vh)` }}
        >
          {questions.map((q, idx) => {
            return (
              <Question
                key={q.idPregunta}
                question={q}
                index={idx}
                questionId={q.idPregunta}
                onFinishEvaluation={handleFinishEvaluation}
                isActive={questionActive === idx}
                questionsCount={questionsCount}
                alternativeSelected={alternativesSelected[q.idPregunta]}
                onChangeAlternative={handleChangeAlternative}
                onMoveNextQuestion={handleNextQuestion}
                onMoveBackQuestion={handlePrevQuestion}
              />
            )
          })}
        </QuestionsInnerWrapper>
      </QuestionsWrapper>
    </EvaluationSystemContainer>
  );
}

EvaluationsSystem.propTypes = {
  questions: PropTypes.array,
  onFinishEvaluation: PropTypes.func,
  onCheckAlternative: PropTypes.func,
};

export default EvaluationsSystem;
