import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Container } from './styles';

function ShowMore({ children, to, ...props }) {


  const button = <>
    <span>{children}</span>
    <div className="circle">
      <MdKeyboardArrowRight />
    </div>
  </>

  return (
    <Container {...props}>
      {to && (
        <Link className="wrapper" to={to}>
          {button}
        </Link>
      )}
      {!to && <div className="wrapper">
        {button}
      </div>}
    </Container>

  );
}

export default ShowMore;
