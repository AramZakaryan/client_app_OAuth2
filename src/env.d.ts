// src/env.d.ts

interface ImportMetaEnv {
    VITE_SOME_VARIABLE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
