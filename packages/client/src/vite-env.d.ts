/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_PATH: string
  readonly VITE_CLIENT_PATH: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
