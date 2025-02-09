import { NextResponse } from 'next/server';

export async function GET() { 
    const clientId = process.env.SPOTIFY_CLIENT_ID; 
    const redirectUri = 'http://localhost:5137/api/spotify/exchange-token'; // Callback URL after login 
    const scope = 'user-library-read playlist-modify-public'; // Adjust your scopes as needed 
    const responseType = 'code'; 
    const authUrl = `https://accounts.spotify.com/authorize?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`; 
    return NextResponse.redirect(authUrl); // Redirects the user to Spotify for login 
}