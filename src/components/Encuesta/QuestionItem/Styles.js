import styled from 'styled-components';

const QuestionContainer = styled.div`
	display: flex;
`;

const QuestionName = styled.div`
	font-size: 20px;
	font-weight: 600;
	p {
		margin: 0;
	}
  .indicadorPregunta {
    font-weight: 300;
    font-size: 80%;
    margin-bottom: 1vw;
  }

  .areaPregunta {
    font-weight: 500;
    font-size: 90%;
    margin-bottom: 1vw;

    @media only screen and (min-width : 992px) {
      font-size:100%;
    }
  }

  .textoPregunta {
    font-weight: 500;
    font-size: 100%;
    line-height: 140%;
    margin-bottom: 2vw;

    @media only screen and (min-width : 992px) {
      font-size: 1.6vw;
      line-height: 2.6vw;
    }

  }
`;

const Numeration = styled.div`
	font-size: 20px;
	margin-top: 5px;
	font-weight: 500;
	flex-shrink: 0;
	width: 60px;
`;

const Bar = styled.div`
	width: ${({ width = '100%' }) => width};
	animation-duration: 1s;
	animation-fill-mode: forwards;
	animation-iteration-count: infinite;
	animation-name: placeHolderShimmer;
	animation-timing-function: linear;
	background: #cccccc;
	border-radius: 5px;
	opacity: 0.3;
	background: linear-gradient(to right, #ddd 8%, #cccccc 18%, #ddd 33%);
	background-size: 800px 104px;
	height: 40px;
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

export { QuestionName, Numeration, QuestionContainer, Bar };
