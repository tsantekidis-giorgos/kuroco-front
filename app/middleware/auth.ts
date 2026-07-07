export default defineNuxtRouteMiddleware(async () => {
	const { get } = useApi();

	try {
		await get("/healthz");
	}
	catch {
		return navigateTo("/");
	}
});
