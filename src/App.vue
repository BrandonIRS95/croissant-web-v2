<template>
	<router-view></router-view>
</template>

<script>
	import './semantic/dist/semantic.css'
	import Login from './components/Login'

	export default {
		name: 'app',
		components: {
			Login
		}
	}
</script>
