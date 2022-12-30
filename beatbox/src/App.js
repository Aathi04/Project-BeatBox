import './App.css';
import MainContent from './Component/Main';
import { BrowserRouter as Routers, Switch, Route } from 'react-router-dom';
import Home  from './Component/home';
import Search from './Component/Search';
import Settings from './Component/Settings';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/homepage/search" component={Search} />
        <Route path="/homepage/settings" component={Settings} />
        <Route path="/homepage/main" component={MainContent} />        
        <Route path="/homepage/signin"><SignIn /></Route> 
        <Route path="/homepage/signup" component={SignUp} /> 
      </Switch>
    </>
  );
}
export default App;
