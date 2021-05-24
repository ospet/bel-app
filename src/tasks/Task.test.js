import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Task from './Task';

describe('Task', () => {
  afterEach(cleanup);

  it('renders null when no title', () => {
    const {asFragment} = render(<Task />);
    expect(asFragment(<Task />)).toMatchSnapshot();
  })

  it('renders basic task elements', () => {
    const {asFragment} = render(<Task
      title="TestTask"
      description="This is a Task under unit testing"
    />);

    expect(asFragment(<Task />)).toMatchSnapshot();
  });
});

