import { useEffect, useState } from 'react'; 
import{useDispatch, useSelector} from 'react-redux';
import Answer from './Answer'
import * as QuizActions from '../redux/actions/Actions'
import { getRandomNumber } from '../services/utilities';

function Question(props) {

    const { qtitle, qDescription, qAnswers, changeQ } = props 
    const [timer, setTimer]=useState(3);

    const [stateAnswer, setStateAnswer] = useState("unAnswered");

    const {
        correct ,
        incorrect ,
        unAnswered ,
        fiftyfifty ,
        extindtime } = useSelector(state => state.QuizReducer)
 
    const dispatch = useDispatch()
    // todo
    /*
    - recive props, check them, put them to lay out.
    - create a state for every question to add 15 sec time for it.
    - make sure that we pass the answer to our parent.
    - if the user selected one of life times, make sure that you update the Store.
    - Make sure that we have a good styles if we have images.
    */

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

    const extendTime = (e) =>{
        // update the Stor and add more 10 second and disable the button
        setTimer(timer+10); 
        dispatch(QuizActions.ExtendTime({extindtime:0}))
    }

    const deleteTwoAnswers = (e) =>{
        // update the Stor and delete 2 answeres and disable the button
        dispatch(QuizActions.FiftyFifty({fiftyfifty:0}))

        // todo Delete from Answers Array 2 random wrong Answers 
        const index = getRandomNumber(1,qAnswers.length);
        console.log( index ); 
    }

    const checkAnswer = ( answer ) =>{
        console.log("answer", answer)
        setStateAnswer(answer)
    }

    useEffect(()=>{
        if (timer === 0 ) changeQuestion();
    },[timer])
   
    //console.log(qAnswers)
    return (
        <div>
            <h3>
              {qtitle} 
              <span style={{float:"right"}}> Time =  {timer} </span> 
            </h3>
            <hr/>
            <button disabled={!extindtime} onClick={extendTime}>Extend 10 Sec</button>
            <button disabled={!fiftyfifty} onClick={deleteTwoAnswers}>Fifty Fifty</button>
            <hr/>
            <p>
              {qDescription}
            </p>
            {
                qAnswers.map((answer ,index ) => 
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
            <button onClick={() => changeQuestion()}>Next</button>   
        </div>
    )
}

export default Question;