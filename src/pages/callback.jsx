import { useEffect } from "react";
import { useRouter } from "next/router";

const Callback = () => {
  const router = useRouter();

  useEffect(() => {
    const getAccessToken = async () => {
      const code = new URLSearchParams(window.location.search).get("code");
      if (!code) return;

      const codeVerifier = localStorage.getItem("code_verifier");

      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: "43360e6c088849989509efdad67f7f2e",
          grant_type: "authorization_code",
          code,
          redirect_uri: "http://localhost:5173/results",
          code_verifier: codeVerifier,
        }),
      });

      const data = await response.json();
      localStorage.setItem("spotify_access_token", data.access_token);
      router.push("/"); // Redirect to homepage
    };

    getAccessToken();
  }, []);

  return <p>Authenticating...</p>;
};

export default Callback;
