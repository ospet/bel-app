import { useAuth0 } from '@auth0/auth0-react';
import { cleanup, render } from '@testing-library/react';
import Home from './Home';
jest.mock('@auth0/auth0-react');

describe('Home', () => {
  afterEach(cleanup);

  describe('When authenticated' , () => {
    beforeEach(() => {
      useAuth0.mockReturnValue({
        isAuthenticated: true
      });
    })

    it('shows home page when authenticated', () => {
      const { getByTestId } = render(<Home/>);
      expect(getByTestId('home-contents')).toBeInTheDocument();
    });
  });

  describe('When not authenticated' , () => {
    beforeEach(() => {
      useAuth0.mockReturnValue({
        isAuthenticated: false
      });
    })

    it('shows login button when not authenticated', () => {
      const { getByTestId } = render(<Home />);
      expect(getByTestId('login-button')).toBeInTheDocument();
    });
  });
});
