// src/lib/config.ts
// Supports both Vite (browser) and Node.js (scripts)
type EnvValue = string | undefined;

function getEnv(key: string, fallback: string = ''): string {
  // @ts-ignore - process might not exist in the browser
  const nodeEnv: EnvValue = typeof process !== 'undefined' ? process.env?.[key] : undefined;
  const viteEnv: EnvValue = typeof import.meta !== 'undefined' ? (import.meta.env?.[key] as string | undefined) : undefined;

  return viteEnv ?? nodeEnv ?? fallback;
}

export const SUPABASE_CONFIG = {
  projectUrl: getEnv('VITE_SUPABASE_PROJECT_URL'),
  anonKey: getEnv('VITE_SUPABASE_ANON_KEY'),
  serviceRoleKey: getEnv('VITE_SUPABASE_SERVICE_ROLE_KEY'),
};

export const OPEN_ROUTER_CONFIG = {
  apiUrl: getEnv('VITE_OPEN_ROUTER_URL', 'https://openrouter.ai/api/v1'),
  apiKey: getEnv('VITE_OPEN_ROUTER_API_KEY'),
  sourceUrl: getEnv('VITE_SOURCE_URL', 'http://localhost:8081'),
};

export const JINA_CONFIG = {
  apiUrl: getEnv('VITE_JINA_API_URL', 'https://api.jina.ai/v1/embeddings'),
  apiKey: getEnv('VITE_JINA_API_KEY'),
};
