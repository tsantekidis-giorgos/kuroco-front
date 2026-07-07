<script setup>
definePageMeta({
	middleware: "auth",
});

const data = ref([]);
const error = ref("");

async function getTasks() {
	error.value = "";
	const { get } = useApi();

	try {
		data.value = await get("/tasks");
		console.log("Fetched tasks:", data.value);
	}
	catch {
		error.value = "Failed to fetch tasks";
	}
}
</script>

<template>
	<h1> Checkout your Tasks</h1>

	<section class="container">
		<h2>Existing Tasks</h2>
		<p>
			Welcome to the task manager page. You are successfully logged in.
		</p>

		<p v-if="error">
			{{ error }}
		</p>
		<button @click="getTasks">
			Refresh Tasks
		</button>
	</section>
</template>
