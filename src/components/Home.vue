<template>
	<div class="ui stackable grid">
		<div class="stretched row">
		<div class="thirteen wide column no-padding-right">
			<div id="top-conference">
				<div class="ui labeled button" tabindex="0">
					<div class="ui red button">
						<i class="unhide icon"></i> Viewers
					</div>
					<a class="ui basic red left pointing label">
						1,048
					</a>
				</div>
			</div>
			<img class="ui fluid image" src="~src/images/slide_conference.jpg">
		</div>
		<div class="three wide column no-padding-left">
	      <div class="ui red inverted attached segment"></div>
	      <div class="ui red inverted attached segment"></div>
	      <div class="ui red inverted attached segment"></div>
		</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'home'
	}
</script>

<style>
	#top-conference {
		position: absolute;
		top: 15px;
		left: 30px;
		z-index: 10;
	}

	#info {
		display: flex;
		flex-direction: column; 
		justify-content: space-between;
	}
</style>