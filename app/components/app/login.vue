<script setup>
const email = ref("");
const password = ref("");
const error = ref("");
const { post } = useApi();
const router = useRouter();

async function handleLogin() {
	error.value = "";
	try {
		await post("/login", {
			email: email.value,
			password: password.value,
		});
		router.push("/task-manager");
	}
	catch (e) {
		error.value = "Login failed";
	}
}
</script>

<template>
	<div>
		<h2>Login</h2>
		<form @submit.prevent="handleLogin">
			<div>
				<label for="email">Email:</label>
				<input
					id="email"
					v-model="email"
					type="email"
				>
			</div>
			<div>
				<label for="password">Password:</label>
				<input
					id="password"
					v-model="password"
					type="password"
				>
			</div>
			<p v-if="error">
				{{ error }}
			</p>
			<button type="submit">
				Login
			</button>
		</form>
	</div>
</template>
