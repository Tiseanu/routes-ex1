import { Route, Redirect, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Quotes from './pages/Quotes';
import Quote from './pages/Quote';
import AddQuote from './pages/AddQuote';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <Quotes />
          </Route>
          <Route path="/quotes/:qid">
            <Quote />
          </Route>
          <Route path="/add-quote">
            <AddQuote />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
