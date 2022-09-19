import styled from 'styled-components';
// import Btn from 'components/Button';
// import { darken } from 'polished';

const EvaluationName = styled.div`
	font-size: 16px;
	font-weight: 600;
	opacity: 0.5;
	margin-bottom: 10px;
`;

const Button = styled.button`
	background: #28a745;
	border: none;
	height: auto;
	transition: background 0.3s;
	padding: 5px;
	&:hover {
		background: #28a745;
	}
	svg {
		margin: 0;
		font-size: 30px;
		color: white;
	}
`;

const ButtonsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 20px;
	margin-bottom: 20px;
	padding: 0 20px;
	justify-content: flex-end;
	align-items: center;
`;

const EvaluationSystemContainer = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	position: relative;
`;

const ContainerWrap = styled.div`
	display: flex;
	overflow-x: hidden;
	height: 80vh;
	flex-shrink: 0;
	transition: opacity 1s ease-in-out;
	opacity: ${({ isActive }) => (isActive ? 1 : 0)};
	overflow-y: auto;
`;

const QuestionsWrapper = styled.div`
	overflow: hidden;
	height: 80vh;
`;

const QuestionsInnerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	transition: transform 0.6s ease-in-out;
`;

const Body = styled.div`
	flex-grow: 1;
	/* display: flex; */
	flex-direction: column;
	/* justify-content: center; */
	padding: 0px 0;
`;

const Bottom = styled.div`
	flex-shrink: 0;
	flex-basis: 100px;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
`;

export {
  EvaluationName,
  Button,
  ButtonsContainer,
  EvaluationSystemContainer,
  Body,
  Bottom,
  ContainerWrap,
  QuestionsWrapper,
  QuestionsInnerWrapper,
};
