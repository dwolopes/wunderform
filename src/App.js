import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { init } from '@rematch/core';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ToastContainer } from 'react-toastify';

// import { loading, persistPlugin } from './utils/config-state';
import Routes from './routes';
import models from './state';


const store = init({
	models
});

console.log('Store', store);

// const persistor = getPersistor();

const App = () => (
  <>
  <Provider store={store}>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    <ToastContainer/>
  </Provider>
  </>
);

export default memo(App);
