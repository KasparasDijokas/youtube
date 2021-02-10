import './app.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Videos from './components/Videos/Videos';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Trending from './pages/Trending';
import Home from './pages/Home';

function App() {
  return (
    <div className="app">
      <Router>
          <Header />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/trending" component={Trending} />

          <Sidebar />
          <Videos />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
