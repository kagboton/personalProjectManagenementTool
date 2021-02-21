import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import AddProject from './components/project/AddProject'
import { Provider } from 'react-redux'
import store from './store'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () =>  {
  
  return (  
    <Provider store={store}>
      <Router>     
        <Header />      
        <Switch>
          <Route path="/addProject"><AddProject /></Route>
          <Route path="/dashboard"><Dashboard /></Route>             
        </Switch>
      </Router>
    </Provider> 
    
  );
}

export default App;
