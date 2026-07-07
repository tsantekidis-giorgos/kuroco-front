export const useApi = () => {
  const config = useRuntimeConfig()

  const get = (endpoint: string) =>
    $fetch(`${config.public.apiBase}${endpoint}`, {
      method: "GET",
      credentials: "include",
    });

  const post = (endpoint: string, body: unknown) =>
    $fetch(`${config.public.apiBase}${endpoint}`, {
      method: "POST",
      body,
      credentials: "include",
    });

  return { get, post };
};