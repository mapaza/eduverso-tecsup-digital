import styled from 'styled-components';
// import Btn from 'components/Button';
// import { darken, rgba } from 'polished';

const EvaluationName = styled.div`
	font-size: 20px;
	font-weight: 600;
	opacity: 0.5;
	margin-bottom: 10px;
`;

const NextContainer = styled.div`
	margin-top: 10px;
	align-items: center;
	display: flex;
`;

const Button = styled.button`
	background: transparent;
	color: white;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
  padding: 0;

	padding-top: 10px;
	padding-bottom: 10px;
  outline: none;
  border: none;


  & + button {
    margin-left: 2vw;
  }
`;

const AlternativeCount = styled.span`
	color: white;
	width: 25px;
	height: 25px;
	border: 1px solid white;
	margin-right: 20px;
	text-align: center;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	font-weight: 500;
	/* background: ${({ active }) => (active ? 'grey' : 'transparent')}; */
	background: ${({ active }) => (active ? 'rgba(255,255,255,0.2)' : 'transparent')};
	border-radius: 5px;
	position: absolute;
	left: 16px;
	&::before {
		content: 'Opción ';
		opacity: 0;
		display: none;
		color: white;
	}
`;

const AlternativeContent = styled.div`
	font-size: 16px;
	color: white;
	padding: 16px;
	position: relative;
	font-weight: 700;
	/* opacity: 0.8; */
	min-width: 50%;
	align-self: flex-start;
	flex-shrink: 0;
	background: ${({ active }) => (active ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0)')};
	/* background: ${({ active }) => (active ? 'grey' : 'rgba(0,0,0,0)')}; */
	margin-right: 8px;
	margin-bottom: 8px;
	display: flex;
	align-items: center;
	cursor: pointer;
	user-select: none;
	border-radius: 5px;
	transition: all 0.1s;
	border: 1px solid white;
	p {
		margin: 0;
	}
	&:hover {
		border: 1px solid white;
		/* background: grey; */
		background: rgba(255,255,255,0.2);
	}

	@media screen and (max-width: 800px) {
		min-width: 80%;
	}

	@media screen and (max-width: 500px) {
		min-width: 100%;
	}

	&:hover ${AlternativeCount} {
		border: 1px solid white;
		/* background: #151719; */
		background: rgba(255,255,255,0.2);
		width: 77px;
		left: -36px;
	}
	&:hover ${AlternativeCount}::before {
		opacity: 1;
		display: unset;
	}
`;

const AlternativeContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	margin-left: 20px;
	margin-top: 20px;
`;

const AlternativeText = styled.div`
	padding: 0 50px;
	width: 100%;
`;

const Bar = styled.div`
	width: ${({ width = '100%' }) => width};
	animation-duration: 1s;
	animation-fill-mode: forwards;
	animation-iteration-count: infinite;
	animation-name: placeHolderShimmer;
	animation-timing-function: linear;
	/* background: #cccccc; */
	background: #cccccc;
	border-radius: 5px;
	opacity: 0.2;
	background: linear-gradient(to right, #ddd 8%, #cccccc 18%, #ddd 33%);
	background-size: 800px 104px;
	height: 30px;
	position: relative;
	margin-bottom: 10px;
	@keyframes placeHolderShimmer {
		0% {
			background-position: -468px 0;
		}
		100% {
			background-position: 468px 0;
		}
	}
`;

const SpanText = styled.span`
	font-size: 12px;
	margin-left: 10px;
`;

export {
  EvaluationName,
  NextContainer,
  AlternativeContent,
  AlternativeContainer,
  AlternativeCount,
  Bar,
  AlternativeText,
  SpanText,
  Button,
};
