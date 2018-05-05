import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'react-router-redux';
import 'styles/global.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import getRoutes from './routes';
import store from './store';

const history = createBrowserHistory();

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HashRouter>
        <div>
          <Header />
          <div className="content">
            { getRoutes(store) }
          </div>
          <Footer />
        </div>
      </HashRouter>
    </ConnectedRouter>
  </Provider>
);

export default App;
