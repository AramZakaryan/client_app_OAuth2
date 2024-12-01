// client_app_OAuth2/src/google/GetGoogleAuthCode.tsx

import styles from "./getGoogleAuthCode.module.css"
import googleIcon from "../assets/googleIcon.png"

/**
 * GetGoogleAuthCode component receives Authorization Code (Google OAuth2)
 */
export const GetGoogleAuthCode = () => {
    const login = (): void => {

        // Step 1: Request permission (Authorization Code) from Authorization Server
        const queryParams = new URLSearchParams({
            client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
            redirect_uri: `${window.location.origin}/auth/google`,
            // redirect_uri: "http://localhost:5173/auth/google",
            response_type: 'code',
            scope: 'openid email profile',
            access_type: 'offline', // Allows the refresh token to be returned
            prompt: 'consent', // Ensures the user sees the consent screen
        }).toString();
        const url: string = `https://accounts.google.com/o/oauth2/v2/auth?${queryParams}`;

        // Step 2: Receive Authorization Code from Authorization Server
        window.location.assign(url);
    }
    return <button className={styles.googleButton} onClick={login}>
        <h4>STEP 1</h4>
        <img className={styles.googleIcon} src={googleIcon} alt="github logo"/>
        <h4>Get Authorization Code</h4>
    </button>
}
