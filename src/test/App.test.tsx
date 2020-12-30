import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('test TestedComponent components', () => {
  it('renders App component', () => {
    render(<App />);
  });
});

