<template>
	<div class="ui container">
		<MenuBar v-if="$route.name !== 'login'"></MenuBar>
		<router-view></router-view>
	</div>
</template>
<script>
	import MenuBar from './includes/Menu'
	export default {
		name: 'root',
		components: {
			MenuBar
		}
	}
</script>
<style>
	body { 
	  background: url('../images/background.jpg') no-repeat center center fixed; 
	  -webkit-background-size: cover;
	  -moz-background-size: cover;
	  -o-background-size: cover;
	  background-size: cover;
	}

	.no-margin-left {
		margin-left: 0!important;
	}
	.no-margin-right {
		margin-right: 0!important;
	}

	.no-margin-top {
		margin-top: 0!important;
	}
	.no-margin-bottom {
		margin-bottom: 0!important;
	}

	.no-margin-y {
		margin-top: 0!important;
		margin-bottom: 0!important;
	}

	.no-padding-left {
		padding-left: 0!important;
	}

	.no-padding-right {
		padding-right: 0!important;
	}

	.no-padding-top {
		padding-top: 0!important;
	}

	.no-padding-bottom {
		padding-bottom: 0!important;
	}

</style>