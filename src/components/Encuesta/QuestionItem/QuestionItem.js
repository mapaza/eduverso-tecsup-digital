import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { QuestionName, QuestionContainer } from './Styles';
// import Loader from './Loader';

function QuestionItem({ title, area, index = 0, questionsCount }) {
  // const [isMount, setMount] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setMount(true);
  //   }, 1500);
  // }, []);

  var areaNombre = '';
  if (area === 1) {
    areaNombre = 'Experiencia del Cliente';
  } else if (area === 2) {
    areaNombre = 'Datos e Información';
  } else if (area === 3) {
    areaNombre = 'Estrategia y Liderazgo';
  } else if (area === 4) {
    areaNombre = 'Tecnología';
  } else {
    areaNombre = 'Operaciones';
  }

  return (
    <QuestionContainer>
      {/* <Numeration>{index + 1} .-</Numeration> */}
      <QuestionName>
        <div
          className="indicadorPregunta"
          style={{ color: '#DBDBDB' }}
        >{`Pregunta ${index + 1} de ${questionsCount}`}</div>
        <div
          className="areaPregunta"
          style={{ color: '#DBDBDB' }}
        >{`Área de Conocimiento:  ${areaNombre}`}</div>
        <br></br>
        <div className="textoPregunta">{parse(title)}</div>
      </QuestionName>
    </QuestionContainer>
  );
}

QuestionItem.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
};

export default QuestionItem;
