import {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import {useAuth0} from '@auth0/auth0-react';

const useApi = (url, options = {}) => {
  const { getAccessTokenSilently, getAccessTokenWithPopup } = useAuth0();
  const [state, setState] = useState({
    error: null,
    loading: true,
    data: null,
  });
  const [refreshIndex, setRefreshIndex] = useState(0);

  useEffect(() => {
    (async () => {
      let { audience, scope, ...fetchOptions } = options;
      audience = audience || process.env.REACT_APP_AUTH0_AUDIENCE;
      try {
        const accessToken = await getAccessTokenSilently({ audience });
        const res = await fetch(url, {
          ...fetchOptions,
          headers: {
            ...fetchOptions.headers,
            // Add the Authorization header to the existing headers
            Authorization: `Bearer ${accessToken}`,
            'x-correlation-id': uuidv4()
          },
        });
        setState({
          ...state,
          data: await res.json(),
          error: null,
          loading: false,
        });
      } catch (error) {
        if (error.message === 'Consent required') {
          await getAccessTokenWithPopup({audience});
          // TODO should update this to recall
        }
        setState({
          ...state,
          error,
          loading: false,
        });
      }
    })();
  }, [refreshIndex]);

  return {
    ...state,
    refresh: () => setRefreshIndex(refreshIndex + 1),
  };
};

export default useApi;
