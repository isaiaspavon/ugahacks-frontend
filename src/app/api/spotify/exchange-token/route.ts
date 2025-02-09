import { NextResponse } from 'next/server';
import axios from 'axios';
import qs from 'qs';

export async function GET(request: Request) {
      const url = new URL(request.url);
      const code = url.searchParams.get('code'); // Extract the code from the query parameter
      if (!code) {
        return NextResponse.json({ error: 'Authorization code not found' }, { status: 400 });
      }
    
      const clientId = process.env.SPOTIFY_CLIENT_ID;
      const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
      const redirectUri = 'http://localhost:5173/api/spotify/exchange-token';
    
      const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
    
      try {
        const response = await axios.post(
          'https://accounts.spotify.com/api/token',
          qs.stringify({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: redirectUri,
          }),
          {
            headers: {
              'Authorization': `Basic ${authHeader}`,
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );
    
        const data = response.data;
        const accessToken = data.access_token;
    
        if (!accessToken) {
          return NextResponse.json({ error: 'Failed to get access token' }, { status: 500 });
        }
    
        // You can store the access token in the session or database here if needed
        return NextResponse.json({ accessToken }); // Return the access token as a response
      } catch (error) {
        console.error('Error exchanging code for token:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
      }
    }