<template>
	<router-view></router-view>
</template>

<script>
	import './semantic/dist/semantic.min.css'
	import MenuBar from './components/includes/Menu'

	export default {
		name: 'app',
		components: {
			MenuBar
		}
	}
</script>
