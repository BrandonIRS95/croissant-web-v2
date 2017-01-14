<template>
	<div>
		<TopConference></TopConference>
		<div class="ui attached padded clearing segment">
			<div class="ui right floated icon buttons" style="margin-left: 5px;">
			  <button class="ui button"><i class="sort content ascending icon"></i></button>
			  <button class="ui button"><i class="sort content descending icon"></i></button>
			</div>
			<div class="ui right floated icon buttons">
			  <button class="ui button"><i class="heart icon"></i></button>
			  <button class="ui button"><i class="unhide icon"></i></button>
			</div>
			<h1 class="ui left floated header">Trends</h1>
		</div>
		<div class="ui attached segment">
			<div class="ui three stackable cards">
				<div class="card">
					<div class="image">
						<img src="~src/images/wireframe_image.png">
					</div>
					<div class="content">
						<div class="header">Lorem Ipsum</div>
						<div class="meta">
							<a>By Jaylen Lang</a>
						</div>
						<div class="description">
							Aenean velit turpis, finibus eu purus non, ultricies egestas elit.
						</div>
					</div>
					<div class="extra content">
						<span class="right floated">
							<i class="unhide icon"></i>
							959
						</span>
						<span>
							<i class="heart icon"></i>
							390
						</span>
					</div>
				</div>
				<div class="card">
					<div class="image">
						<img src="~src/images/wireframe_image.png">
					</div>
					<div class="content">
						<div class="header">Lorem Ipsum</div>
						<div class="meta">
							<a>By Jaylen Lang</a>
						</div>
						<div class="description">
							Aenean velit turpis, finibus eu purus non, ultricies egestas elit.
						</div>
					</div>
					<div class="extra content">
						<span class="right floated">
							<i class="unhide icon"></i>
							959
						</span>
						<span>
							<i class="heart icon"></i>
							390
						</span>
					</div>
				</div>
				<div class="card">
					<div class="image">
						<img src="~src/images/wireframe_image.png">
					</div>
					<div class="content">
						<div class="header">Lorem Ipsum</div>
						<div class="meta">
							<a>By Jaylen Lang</a>
						</div>
						<div class="description">
							Aenean velit turpis, finibus eu purus non, ultricies egestas elit.
						</div>
					</div>
					<div class="extra content">
						<span class="right floated">
							<i class="unhide icon"></i>
							959
						</span>
						<span>
							<i class="heart icon"></i>
							390
						</span>
					</div>
				</div>
				<div class="card">
					<div class="image">
						<img src="~src/images/wireframe_image.png">
					</div>
					<div class="content">
						<div class="header">Lorem Ipsum</div>
						<div class="meta">
							<a>By Jaylen Lang</a>
						</div>
						<div class="description">
							Aenean velit turpis, finibus eu purus non, ultricies egestas elit.
						</div>
					</div>
					<div class="extra content">
						<span class="right floated">
							<i class="unhide icon"></i>
							959
						</span>
						<span>
							<i class="heart icon"></i>
							390
						</span>
					</div>
				</div>
				<div class="card">
					<div class="image">
						<img src="~src/images/wireframe_image.png">
					</div>
					<div class="content">
						<div class="header">Lorem Ipsum</div>
						<div class="meta">
							<a>By Jaylen Lang</a>
						</div>
						<div class="description">
							Aenean velit turpis, finibus eu purus non, ultricies egestas elit.
						</div>
					</div>
					<div class="extra content">
						<span class="right floated">
							<i class="unhide icon"></i>
							959
						</span>
						<span>
							<i class="heart icon"></i>
							390
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import TopConference from './includes/TopConference'

	export default {
		name: 'home',
		components: {
			TopConference
		}
	}
</script>

<style></style>