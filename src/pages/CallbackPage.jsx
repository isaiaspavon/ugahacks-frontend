import { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const CallbackPage = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');

    if (code) {
      // Call the backend to exchange the code for an access token
      axios
        .get(`/api/spotify/exchange-token?code=${code}`)
        .then((response) => {
          const { accessToken } = response.data;
          if (accessToken) {
            localStorage.setItem('spotifyAccessToken', accessToken); // Store the token
            window.location.href = 'localhost:5173/result'; // Redirect to home or another page
          } else {
            console.error('Failed to get access token');
          }
        })
        .catch((error) => {
          console.error('Error during token exchange:', error);
        });
    }
  }, [location]);

  return <div>Loading...</div>;
};

export default CallbackPage;