import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
import {Provider} from 'react-redux'

import Welcome from './pages/Welcome'
import Questions from './pages/Questions'
import Result from './pages/Result'


import configureStore from "./redux/configureStore";

const store = configureStore()

function App() {

//  const [seconds, setSeconds] = useState(0);
  //get random question from array
    // useEffect(() => {
    //    function fetchData() {
    //     fetch('http://localhost:4000/questions')
    //     .then(res => res.json())
    //     .then((response)=>console.log(response[0]))
    //     .then((response) => setAllQuestion(response))
    //     .then((response) => setQuestion(response[0]))
    //     .then(()=>console.log(allQuestions, question))
    //   }
    //   fetchData();
    // }, []);


  
  // Set interval to get a new question from the Array
  // we should be able to chage the Quesiton from the Question it Self, 
  // 
  


//  function Timer() {
//   const intervalRef = useRef();

  // useEffect(() => {
  //   let i=0;
  //   const id = setInterval(() => {
  //     if(i < allQuestions.length -1) {
  //       i++
  //     setQuestion(allQuestions[i])
  //     }
  //   },5000);
  //   intervalRef.current = id;
  //   return () => {
  //     clearInterval(intervalRef.current);
  //   };
  // })();

//   // ...
// }
// let i = 0
//  useEffect(()=>{
  
//   let interval = setInterval(() => {
//     console.log(allQuestions)   
//     // setSeconds(seconds => seconds+1)
//     if(i < allQuestions.length -1) {
//       setQuestion(allQuestions[i]);
//       i++;
//     } //else (
//     //     clearInterval(interval)
//     //     //todo: change rout to statistics
//     //   )
//     return () => clearInterval(interval);
//     }, 3000);
//   },[]);

  return ( 
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
              <Route exact path="/">
                <Welcome/>
              </Route>
              <Route exact path="/questions">
                <Questions/>
              </Route> 
              <Route exact path="/result">
                <Result/>
              </Route>
          </Switch> 
        </Router>
      </Provider>
    </div> 
  );
}

export default App;
