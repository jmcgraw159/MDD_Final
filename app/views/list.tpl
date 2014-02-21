<div class="holder-canvas">
	<div class="off-canvas-wrap">
	  <div class="inner-wrap">
	    <div class="article-header">
			<div class="row">
				<div class="small-11 small-centered large-12 large-uncentered columns">
					<h1><a href="#list">WDD Column</a></h1>
					<a class="nav-menu right-off-canvas-toggle"><span class="icon-menu"></span></a>
				</div>
			</div>
		</div>
	    <!-- Off Canvas Menu -->
	    <aside class="right-off-canvas-menu">
	        <!-- whatever you want goes here -->
			<ul class="nav">
				<li><img src="images/avatar.png"></li>
				<li><span>Jeremy McGraw</span></li>
				<li><a href="#">Home</a></li>
				<li><a href="#">Account</a></li>
				<li><a href="#">Logout</a></li>
			</ul>
	    </aside>
	    <!-- main content goes here -->
		<div class="article-bg">
			<div class="row article-body">
				<div class="small-11 small-centered large-12 large-uncentered columns">
					<button class="article-button">Add Article</button>
					<article ng-repeat="($id, item) in data.response.posts">
						<a href="#/detail/{{item.id}}" class="article-title">{{item.title}}</a>
						<span class="article-date">{{(item.timestamp * 1000) | date:'medium'}}</span>
						<p>{{item.body | limitTo:150}}...</p>
					</article>
					<a ng-click="loginObject.$logout()">Logout</a>
				</div>
			</div>
		</div>
		<!-- close the off-canvas menu -->
		<a class="exit-off-canvas"></a>
	  </div>
	</div>
</div>