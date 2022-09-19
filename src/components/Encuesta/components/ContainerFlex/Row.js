import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Row = styled.div.attrs(
  ({
    flex = 'inherit',
    flexGrow = 'inherit',
    flexBasis = 'auto',
    flexShrink = 'inherit',
    display = 'flex',
    flexDirection = 'row',
    justifyContent = 'inherit',
    alignItems = 'inherit',
    overflow = 'visible',
    flexWrap = 'inherit',
    margin = 0,
    padding = 0,
  }) => ({
    display,
    flexGrow,
    flexBasis,
    flexShrink,
    flex,
    flexDirection,
    justifyContent,
    alignItems,
    overflow,
    flexWrap,
    padding,
    margin,
  }),
)`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: ${({ display }) => display};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex: ${({ flex }) => flex};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  overflow: ${({ overflow }) => overflow};
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  max-height: 100%;
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  overflow: ${({ overflow }) => overflow};
`;

function RowC({ children, overflow = 'visible', ...props }) {
  return (
    <Row {...props}>
      <Inner overflow={overflow}>{children}</Inner>
    </Row>
  );
}

RowC.propTypes = {
  children: PropTypes.any,
};

export default RowC;
