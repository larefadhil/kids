<template>
	<div>
		<v-col class="d-flex justify-center align-end" style="height:200px">
			<h1 class="indigo--text  align-self: self-end;"> فەرموو هەڵبژێرە</h1>
		</v-col>
		<v-col class="text-center">
			<router-link to="/AnimalSounds">
				<v-btn class="indigo lighten-1 white--text large--text" x-large height="20vh" width="30vh">
					<h3>دەنگی ئاژەڵەکان</h3>
				</v-btn>
			</router-link>
		</v-col>
		<v-col class="text-center">
			<router-link to="/AnimalNames">
				<v-btn class="indigo lighten-1 white--text large--text" x-large height="20vh" width="30vh">
					<h3>ناوی ئاژەڵەکان</h3>
				</v-btn>
			</router-link>
		</v-col>
		<v-col class="d-flex justify-center align-center">
			<!-- <v-img src="../photos/start.png" max-height="150" max-width="450"></v-img> -->
		</v-col>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>
	a {
		text-decoration: none;
	}
</style>