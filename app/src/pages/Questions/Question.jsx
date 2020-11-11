import { useEffect, useState } from 'react';
import{ useDispatch, useSelector} from 'react-redux';
import Answer from './Answer'
import * as QuizActions from '../../redux/actions/Actions'
import { getRandomNumber } from '../../services/utilities';
import {Container, Row} from "../../styled/grid";
import PropTypes from 'prop-types'

import {QuestionsTitle} from './_styles'
import Button from '../../components/Button'

function Question(props) {
    // todo
    /*
    - recive props, check them, put them to lay out.
    - create a state for every question to add 15 sec time for it.
    - make sure that we pass the answer to our parent.
    - if the user selected one of life times, make sure that you update the Store.
    - Make sure that we have a good styles if we have images.
    */

    const { qtitle, qDescription, qAnswers, changeQ } = props

    const [timer, setTimer]=useState(15);

    const [stateAnswer, setStateAnswer] = useState("unAnswered");

    const [answers, setAnswers] = useState(qAnswers);

    const {
        correct ,
        incorrect ,
        unAnswered ,
        fiftyfifty ,
        extindtime } = useSelector(state => state.QuizReducer)

    const dispatch = useDispatch()


    useEffect(()=>{
        const interval = setInterval(() => {
            setTimer(timer => timer - 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    },[])

    const changeQuestion = () => {
        // update the Store with the Right Answer then Change the question
        switch (stateAnswer) {
            case "unAnswered":
                dispatch(QuizActions.UnAnswered({unAnswered:unAnswered+1}));
                break;

            case "correct":
                dispatch(QuizActions.AnswerInCorrect({correct:correct  +1}));
                break;

            case "incorrect":
                dispatch(QuizActions.AnswerCorrect({incorrect:incorrect +1}));
                break;
        }
        changeQ();
    }

    const extendTime = () =>{
        // update the Stor and add more 10 second and disable the button
        setTimer(timer+10);
        dispatch(QuizActions.ExtendTime({extindtime:0}))
    }

    const deleteTwoAnswers = (e) =>{
        // update the Stor and delete 2 answeres and disable the button
        dispatch(QuizActions.FiftyFifty({fiftyfifty:0}))
        const incorrectAnswers = answers.filter((answer) => !answer.correct)
        const correctIndex = answers.indexOf(answers.find((answer) => answer.correct))
        const restArray = removeAnswers(incorrectAnswers)
        restArray.splice(correctIndex, 0, answers[correct] )
        setAnswers(restArray);
    }

    const removeAnswers= (removeArray) => {
        for(let i=2; i>0; i--){
            removeArray.splice(getRandomNumber(answers.length), 1);
        }
        return removeArray
    }

    const checkAnswer = ( answer ) =>{
        setStateAnswer(answer)
    }

    useEffect(()=>{
        if (timer === 0 ) changeQuestion();
    },[timer])

    return (
        <Container>
            <Row>
                <QuestionsTitle>
                    {qtitle}
                    <span style={{float:"right"}}> Time =  {timer} </span>
                </QuestionsTitle>
            </Row>
            <hr/>
            <Button disabled={!extindtime} onClick={extendTime}>Extend 10 Sec</Button>
            <Button disabled={!fiftyfifty} onClick={deleteTwoAnswers}>Fifty Fifty</Button>
            <hr/>
            {/*todo : Add more Styles here*/}
            <p>
                {qDescription}
            </p>
            {
                answers.map((answer ,index ) =>
                    <Answer
                        key = {index}
                        name={qtitle}
                        type={answer.type}
                        correct={answer.correct}
                        txt={answer.txt}
                        chose={checkAnswer}
                    />
                )
            }
            <hr/>
            <Button onClick={() => changeQuestion()}>Next</Button>
        </Container>
    )
}

export default Question;

Question.propTypes = {
  changeQ: PropTypes.func.isRequired,
  qAnswers: PropTypes.array.isRequired,
  qDescription: PropTypes.string.isRequired,
  qtitle: PropTypes.string.isRequired
}