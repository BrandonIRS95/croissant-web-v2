<template>
	<div class="row" style="position: relative;">
		<div id="top-conference">
			<div class="ui red inverted label">
				<i class="unhide icon"></i> Viewers
				<div class="detail">1,901</div>
			</div>
		</div>
		<img class="ui fluid image" src="~src/images/slide_conference.jpg">
		<div id="info">
			<div class="ui right aligned inverted basic padded segment" style="background-color: rgba(0,0,0,0.6); height: 100%;">
				<h2 class="ui inverted header">
					<div class="content">
						Loremp Ipsum Dolor
						<div class="sub header">By Maximilian Bradtke</div>
					</div>
				</h2>
				<div class="ui divider"></div>
				<p>Morbi mauris ante...</p>
				<h5>Top Locations</h5>
				<div class="ui list">
					<div class="item">
						<div class="right aligned">
							<div class="content">
								United Kingdom
								<i class="gb flag"></i>
								<div class="ui label">
									<i class="unhide icon"></i> 290
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="right aligned">
							<div class="content">
								M&eacute;xico
								<i class="mx flag"></i>
								<div class="ui label">
									<i class="unhide icon"></i> 199
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="right aligned">
							<div class="content">
								USA
								<i class="us flag"></i>
								<div class="ui label">
									<i class="unhide icon"></i> 132
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="right aligned">
							<div class="content">
								Canada
								<i class="ca flag"></i>
								<div class="ui label">
									<i class="unhide icon"></i> 97
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="right aligned">
							<div class="content">
								France
								<i class="france flag"></i>
								<div class="ui label">
									<i class="unhide icon"></i> 60
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="join-button">
					<button class="positive ui button">JOIN</button>
				</div>
			</div>
		</div>
		<div id="like-button">
			<div class="ui labeled button" tabindex="0">
				<div class="ui red button">
					<i class="heart icon"></i> Like
				</div>
				<a class="ui basic red left pointing label">
					1,048
				</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'top-conference'
	}
</script>

<style>
	#top-conference {
		position: absolute;
		margin-top: 20px;
		margin-left: 20px;
		z-index: 10;
	}

	#info {
		position: absolute;
		top:0;
		right: 0;
		height: 100%;
	}

	#like-button, #join-button {
		position: absolute;
		left: 50%;
		bottom: 20px;
		transform: translateX(-50%);
	}
</style>