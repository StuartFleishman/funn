import { lazy, Suspense } from 'react';
import './App.css';
import ReactLoader from './components/loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './pages/Products' 

const Login = lazy(() => import('./pages/Login'));


function App() {
  
  return (
    <Router>
    <Suspense fallback={<ReactLoader />}>
      <Switch>
        <Route path={'/login'} component={Login} />
        <Route path={'/products'} component={Products} />
      </Switch>
    </Suspense>
  </Router>
  );
}

export default App;
