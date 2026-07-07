<script setup>
definePageMeta({
	middleware: "auth",
});

const data = ref([]);
const error = ref("");

function normalizeTasks(payload) {
	if (Array.isArray(payload?.list)) {
		return payload.list;
	}
	return [];
}

async function getTasks() {
	error.value = "";
	const { get } = useApi();

	try {
		const response = await get("/tasks");
		data.value = normalizeTasks(response);
	}
	catch {
		error.value = "Failed to fetch tasks";
	}
}

onMounted(() => {
	void getTasks();
});
</script>

<template>
	<h1>Checkout your Tasks</h1>

	<section class="container">
		<h2>Existing Tasks</h2>
		<p>
			Welcome to the task manager page. You are successfully logged in.
		</p>


		<section v-if="data.length > 0">
			<h1>Tasks List</h1>
			<ul>
				<li v-for="(task, index) in data" :key="task.topics_id ?? task.id ?? task.title ?? task.name ?? task.task ?? index">
					{{ task.subject ?? task.title ?? task.name ?? task.task ?? task.topics_id ?? task.id }}
				</li>
			</ul>
		</section>

		<section v-else>
			<p>No tasks available.</p>
		</section>

		<p v-if="error">
			{{ error }}
		</p>
	</section>
</template>
