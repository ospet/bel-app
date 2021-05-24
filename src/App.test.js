import React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from './App';

test('renders root element', async () => {
  act(() => {
    render(<App />);
  })
  const rootElement = await screen.findByTestId('app-root');

  expect(rootElement).toBeInTheDocument();
});
