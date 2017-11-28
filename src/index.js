import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducers from './reducers';
import ItemDetail from './components/item_detail';
import './style/style.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
    <div className="first">
    <Switch>
        <Route path="/item/:id" component={ItemDetail}/>
        <Route path="/" component={App}/>
      </Switch>
    </div>
  </BrowserRouter>  
  </Provider>, 
document.getElementById('root'));
registerServiceWorker();
