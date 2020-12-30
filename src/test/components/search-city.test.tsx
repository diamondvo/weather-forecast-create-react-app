
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import SearchCity from '../../modules/components/search-city/search-city.component';
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('Test search city component', () => {
  const setup = () => {
    const container: any = render(<Provider store={store}><SearchCity /></Provider>)
    return container
  }

  test('It should be a city search text', () => {
    const container = setup();
    const input = container.getByLabelText('search-input');
    fireEvent.change(input, { target: { value: 'London' } })
    expect(input.value).toBe('London')
  });

  test('It should be an empty search text', () => {
    const container = setup();
    const input = container.getByLabelText('search-input');
    fireEvent.change(input, { target: { value: '' } })
    expect(input.value).toBe('')
  })

  test('It should be submit search button', () => {
    const container = setup();
    const button = screen.getByRole('button', {
      name: /find-city/i
    })
    fireEvent.click(button);
  })
})

