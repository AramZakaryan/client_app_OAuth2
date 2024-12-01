// src/env.d.ts

interface ImportMetaEnv {
    VITE_SOME_VARIABLE: string;

    VITE_CLIENT_SERVER_URL: string;
    VITE_GITHUB_CLIENT_ID: string;
    VITE_GOOGLE_CLIENT_ID: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
