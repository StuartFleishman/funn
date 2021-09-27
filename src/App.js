import { lazy, Suspense } from 'react';
import './App.css';
import ReactLoader from './components/loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './pages/Products' 
import ProductShow from './pages/ProductShow'
import Header from './pages/Header'
import ProductItems from './pages/ProductItems'
import SignUp from './pages/SignUp'


const Login = lazy(() => import('./pages/Login'));


function App() {
  
  return (
    <Router>
    <Suspense fallback={<ReactLoader />}>
      <Switch>
        <Route path={'/login'} component={Login} />
        <Route path='/products/show'> 
        <Header />
        <ProductShow/>
        </Route>
        <Route path={'/products'} component={Products} />
        <Route path={'/signup'} component={SignUp} />
        <Route path={'/p'} component={ProductItems} />
      </Switch>
    </Suspense>
  </Router>
  );
}

export default App;
