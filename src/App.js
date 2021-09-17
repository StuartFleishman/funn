import { lazy, Suspense } from 'react';
import './App.css';
import ReactLoader from './components/loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Login = lazy(() => import('./pages/Login'));


function App() {
  
  return (
    <Router>
    <Suspense fallback={<ReactLoader />}>
      <Switch>
        <Route path={'/login'} component={Login} />
      </Switch>
    </Suspense>
  </Router>
  );
}

export default App;
