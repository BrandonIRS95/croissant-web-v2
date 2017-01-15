<template>
	<div>
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
		<div class="ui bottom attached secondary segment">
			<div class="ui three stackable cards">
				<div class="card">
					<div class="image">
						<img src="~src/images/conference1.jpg">
					</div>
					<div class="content">
						<div class="header">Donec Et Lectus</div>
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
						<img src="~src/images/conference2.png">
					</div>
					<div class="content">
						<div class="header">Vestibulum Nec Tellus</div>
						<div class="meta">
							<a>By Hector Boyer</a>
						</div>
						<div class="description">
							Aenean ut ante et orci mattis venenatis sed et risus.
						</div>
					</div>
					<div class="extra content">
						<span class="right floated">
							<i class="unhide icon"></i>
							856
						</span>
						<span>
							<i class="heart icon"></i>
							451
						</span>
					</div>
				</div>
				<div class="card">
					<div class="image">
						<img src="~src/images/conference3.jpg">
					</div>
					<div class="content">
						<div class="header">Mauris Quis Massa</div>
						<div class="meta">
							<a>By Cesar Hamill</a>
						</div>
						<div class="description">
							Phasellus tristique nisl non nibh eleifend tincidunt.
						</div>
					</div>
					<div class="extra content">
						<span class="right floated">
							<i class="unhide icon"></i>
							754
						</span>
						<span>
							<i class="heart icon"></i>
							362
						</span>
					</div>
				</div>
				<div class="card">
					<div class="image">
						<img src="~src/images/conference4.jpg">
					</div>
					<div class="content">
						<div class="header">Vivamus Sed Est Mollis</div>
						<div class="meta">
							<a>By Sabrina Rempel</a>
						</div>
						<div class="description">
							Suspendisse eu odio in felis malesuada congue.
						</div>
					</div>
					<div class="extra content">
						<span class="right floated">
							<i class="unhide icon"></i>
							635
						</span>
						<span>
							<i class="heart icon"></i>
							211
						</span>
					</div>
				</div>
				<div class="card">
					<div class="image">
						<img src="~src/images/conference5.jpg">
					</div>
					<div class="content">
						<div class="header">Aenean Volutpat Nisl</div>
						<div class="meta">
							<a>By Allen Grant</a>
						</div>
						<div class="description">
							Nunc finibus est eu porta bibendum.
						</div>
					</div>
					<div class="extra content">
						<span class="right floated">
							<i class="unhide icon"></i>
							673
						</span>
						<span>
							<i class="heart icon"></i>
							198
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'trends'
	}
</script>