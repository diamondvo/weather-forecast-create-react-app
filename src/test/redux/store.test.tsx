// import React from "react";
// import { Provider } from "react-redux";
// import { Header } from "./Header";
// import { createStore } from "redux";
// import reducer from '../../modules/redux/reducers';
// import { render } from "@testing-library/react";

// function renderWithProviders(ui: any, { reduxState: any } = {}) {
//   const store = createStore(reducer, reduxState || {});
//   return render(<Provider store={store}>{ui}</Provider>);
// }

// test("header not logged in", () => {
//   const { getByText } = renderWithProviders(<Header />, {
//     store: { user: null }
//   });
//   getByText("login");
//   getByText("register");
// });

// test("header logged in", () => {
//   const { getByText } = renderWithProviders(<Header />, {
//     reduxState: {
//       user: {
//         name: "bob"
//       }
//     }
//   });

//   getByText("bob");
// });

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  forecast: {
    pending: false,
    forecasts: []
  }
});

describe('test TestedComponent components', () => {
  const setup = () => {
    const container: any = render(<Provider store={store}></Provider>)
    return container
  }

  const renderTestedComponent = () => {
    return render(
      <Provider store={store}>
      </Provider>
    );
  };

  it('should be render the component correctly', () => {
    // const container = setup();
    // expect(container.asFragment(<Provider store={store}></Provider>)).toMatchSnapshot()
  });

});