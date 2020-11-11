import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
import {Provider} from 'react-redux'
import { ThemeProvider } from "styled-components";
 

import{ GlobalStyle} from './styled/globals'
import{ theme } from './styled/theme'
import Welcome from './pages/Welcome/Welcome'
import Questions from './pages/Questions/'
import Result from './pages/Result/Result'


import configureStore from "./redux/configureStore";

const store = configureStore()

function App() {

  return ( 
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
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
        </ThemeProvider> 
      </Provider>
    </div> 
  );
}

export default App;
