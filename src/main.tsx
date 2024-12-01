import {createRoot} from 'react-dom/client'
import {GetGoogleAuthCode} from "./google/GetGoogleAuthCode.tsx";
import {SendGoogleAuthCode} from "./google/SendGoogleAuthCode.tsx";

createRoot(document.getElementById('root')!).render(
    <>
        <GetGoogleAuthCode/>
        <SendGoogleAuthCode/>
    </>
)
