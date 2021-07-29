
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Users from './user-profile/Users';
import ProfilePage from './user-profile/ProfilePage';

function App() {
  return (
     <Router>
         <Switch>
        <Route path="/" exact><Users/></Route>
        <Route path="/user/:userId" exact><ProfilePage/></Route>
        </Switch>
     </Router>
  );
}

export default App;
