interface ImportMetaEnv {
  /** Web3Forms access key (public by design; tied to the client's inbox) */
  readonly PUBLIC_WEB3FORMS_KEY?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
