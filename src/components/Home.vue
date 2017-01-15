<template>
	<div>
		<TopConference></TopConference>
		<Trends></Trends>
	</div>
</template>
<script>
	import TopConference from './includes/TopConference'
	import Trends from './includes/Trends'

	export default {
		name: 'home',
		components: {
			TopConference,
			Trends
		}
	}
</script>

<style></style>