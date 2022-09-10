import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
/* eslint-disable */
import store from '../redux/store';
import App from '../App';
/* eslint-enable */

describe('Coins test', () => {
  test('snapshot for coins', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
