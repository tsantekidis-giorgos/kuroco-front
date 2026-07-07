export const useApi = () => {
  const config = useRuntimeConfig()

  const post = (endpoint: string, body: unknown) =>
    $fetch(`${config.public.apiBase}${endpoint}`, {
      method: "POST",
      body,
      credentials: "include",
    });

  return { post };
};