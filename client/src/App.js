import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import Main from "./views/Main";
import Create from "./views/Create";
import Edit from "./views/Edit";

function App() {

  return (
    <div className="App">
      <div className='nav'>
        <Link className='btn btn-info' to="/">Main Page</Link>
        <Link className='btn btn-primary' to="/authors/create">Add a author</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>

        <Route exact path="/authors/create">
          <Create/>
        </Route>

        <Route exact path="/authors/:_id/edit">
          <Edit/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
