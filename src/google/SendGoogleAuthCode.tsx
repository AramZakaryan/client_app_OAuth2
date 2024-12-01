// client_app_OAuth2/src/google/SendGoogleAuthCode.tsx

import styles from "./sendGoogleAuthCode.module.css"
import googleIcon from "../assets/googleIcon.png"

/**
 * SendGoogleAuthCode component sends Authorization Code to client_server
 */
export const SendGoogleAuthCode = () => {

    const sendAuthCode = async () => {

        // Step 3: Send Authorization Code to Client (client_server)
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code')
        const url: string = import.meta.env.VITE_CLIENT_SERVER_URL

        const response = await fetch(`${url}/auth/google?code=${code}`);
        const data = await response.json();
        console.log(data)

    }

    return <button className={styles.googleButton} onClick={sendAuthCode}>
        <h4>STEP 2</h4>
        <img className={styles.googleIcon} src={googleIcon} alt="github logo"/>
        <h4>Send Authorization Code to client_server</h4>
    </button>
}
