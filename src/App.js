import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import AboutPage from './components/AboutPage';
import LiteraturePage from './components/LiteraturePage';
import HistoryPage from './components/HistoryPage';
import FemDictPage from './components/FemDictPage';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={AboutPage} />
            
          <Route path="/literature" component={LiteraturePage} />
            
          <Route path="/history" component={HistoryPage} />
          
          <Route path="/dictionary" component={FemDictPage} />
              
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
