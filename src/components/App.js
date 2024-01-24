import '../styles/App.css';
import Navbar from './Navbar';
import ContactList from './ContactList';
import CreateContacts from './CreateContacts';
import Calculator from './Calculator';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <Router>
      <div className="App">
      <div className="container">
        <Navbar />
        <Calculator/>

        <Switch>
          <Route path='/contactList'>
            <ContactList/>
          </Route>
          <Route path='/create'>
            <CreateContacts/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
