
 import Navbar from './Navbar';
 import Home from './Home';
 import { BrowserRouter as Router,Route,route,Switch } from "react-router-dom"
import Create from './Create';
import Blogdetail from './Blogdetail';
import Notfound from './Notfound';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path='/'><Home/></Route>
          <Route path='/create'><Create/></Route>
          <Route path='/blogs/:id'><Blogdetail/></Route>
          <Route path='*'><Notfound/></Route>

        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
