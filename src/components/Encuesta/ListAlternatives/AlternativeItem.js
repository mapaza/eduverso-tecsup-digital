import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { MdCheck } from 'react-icons/md';
import {
  AlternativeContent,
  AlternativeCount,
  AlternativeText,
} from './Styles';

function AlternativeItem({
  alternative,
  index = 0,
  onChangeAlternative,
  typeQuestion,
  alternativeSelected,
  idQuestion,
}) {
  function handleChangeAlternative() {
    onChangeAlternative(alternative.idAlternativa, idQuestion, typeQuestion);
  }

  let active = false;
  const cursorDefault = 'default';

  if (typeQuestion === 1) {
    active = alternativeSelected === alternative.idAlternativa;
  }

  if (typeQuestion === 2 && alternativeSelected) {
    active =
      alternativeSelected[alternative.idAlternativa] ===
      alternative.idAlternativa;
  }

  return (
    <AlternativeContent
      active={active}
      style={{ cursor: active && cursorDefault }}
      onClick={handleChangeAlternative}
    >
      <AlternativeCount active={active}>{index + 1}</AlternativeCount>
      <AlternativeText>{parse(alternative.contenido)}</AlternativeText>
      {active && <MdCheck />}
    </AlternativeContent>
  );
}

AlternativeItem.propTypes = {
  alternative: PropTypes.object,
  index: PropTypes.number,
  onChangeAlternative: PropTypes.func,
  alternativeSelected: PropTypes.any,
  idQuestion: PropTypes.any,
  typeQuestion: PropTypes.number,
};

export default AlternativeItem;
