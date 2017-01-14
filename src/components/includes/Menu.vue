<template>
	<div class="ui attached stackable menu">
		<div class="item">
			<img src="~src/icons/logo-small.png">
		</div>
		<a class="item">Home</a>
		<a class="item">Suscriptions</a>
		<div class="right menu">
			<div class="ui item">
				<div class="ui icon input">
					<input type="text" placeholder="Search...">
					<i class="search link icon"></i>
				</div>
			</div>
			<div class="ui simple dropdown item">
				<i class="user icon"></i>
				Gary Cotman
				<i class="dropdown icon"></i>
				<div class="menu">
					<a class="item"><i class="edit icon"></i> Edit Profile</a>
					<a class="item"><i class="globe icon"></i> Choose Language</a>
					<a class="item"><i class="settings icon"></i> Account Settings</a>
					<a class="item"><i class="sign out icon"></i> Sign Out</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'menu'
	}
</script>