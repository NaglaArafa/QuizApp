import Question from '../components/Question'
import { useEffect, useRef, useState} from 'react';
import { getQuestions } from '../services/API' 



function Questions(props) {

    // todo : 
    /*
    - Create Questions Json as DP
    - crete Questions component.
    - create 1 questions compoent
    - create 1 Answer componenet.
    - create a time line for the questions, and get the trigger for changing the Question from chiled

    */
    const [loading, setLoading] = useState(true)
    const [allQuestions, setAllQuestion ] = useState([]) 
    const [question, setQuestion ] = useState(undefined) 
    
    const currentQuestion = useRef(0);

    useEffect(() => {
        let mounted = true;
        getQuestions()
          .then(questions => {
            if(mounted) { 
              setAllQuestion(questions)
              setLoading(false)
            }
          })
        return () => mounted = false;
      }, [])
  
      useEffect(()=>{
        // to set the first question directly without waiting,
         if (allQuestions && allQuestions.length > 0) setQuestion(allQuestions[0])
      },[allQuestions])
  

    const changeQuestion = () => {
        if (currentQuestion.current > allQuestions.length) {
            return
        }
        
        currentQuestion.current++
        setQuestion(allQuestions[currentQuestion.current]);
    }
    return(
        <div>
            {loading && <div>Loading ...</div>}
            {question ? 
                <Question
                    key={question.id}
                    qtitle={question.qtitle}
                    qDescription={question.qDescription}
                    qAnswers = {question.qanswers}
                    changeQ = {changeQuestion}
                ></Question>
                : 
                <div>End of Quesition // shoud rout now</div>
            }
        </div>
    )
}

export default Questions;