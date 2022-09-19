import React from 'react';
import PropTypes from 'prop-types';
import { AlternativeContainer, NextContainer, Button } from './Styles';
import AlternativeItem from './AlternativeItem';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io'
function ListAlternatives({
  alternatives,
  onChangeAlternative,
  alternativeSelected,
  typeQuestion,
  onMoveNextQuestion,
  onMoveBackQuestion,
  haveAnswered,
  questionsCount,
  step,
  onFinishEvaluation,
  ...props
}) {

  return (
    <AlternativeContainer>
      {alternatives.map((alt, idx) => (
        <AlternativeItem
          key={alt.idAlternativa}
          index={idx}
          {...props}
          typeQuestion={typeQuestion}
          alternativeSelected={alternativeSelected}
          onChangeAlternative={onChangeAlternative}
          alternative={alt}
        />
      ))}
      {haveAnswered && (
        <NextContainer>
          <div style={{ display: "flex" }}>

            {0 < step && (
              <Button
                // style={{ width: 140 }}
                onClick={onMoveBackQuestion}
              >
                <IoIosArrowDropleft style={{ marginRight: 10 }} />
                  Anterior
              </Button>
            )}




            {questionsCount - 1 !== step ? (
              <Button
                // style={{ width: 140 }}
                onClick={onMoveNextQuestion}
              >

                Siguiente
                <IoIosArrowDropright style={{ marginLeft: 10 }} />
              </Button>
            ) : (
                <Button
                  onClick={onFinishEvaluation}
                >

                  Finalizar
                  <IoIosArrowDropright style={{ marginLeft: 10 }} />
                </Button>
              )}

          </div>
        </NextContainer>
      )}
    </AlternativeContainer>
  );
}

ListAlternatives.propTypes = {
  alternatives: PropTypes.array,
  onChangeAlternative: PropTypes.func,
  alternativeSelected: PropTypes.any,
  typeQuestion: PropTypes.number,
  haveAnswered: PropTypes.bool,
  onMoveNextQuestion: PropTypes.func,
  questionsCount: PropTypes.number,
  step: PropTypes.number,
  onFinishEvaluation: PropTypes.func,
};

export default ListAlternatives;
