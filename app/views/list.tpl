<div class="article-header">
	<div class="row">
		<div class="small-11 small-centered large-12 large-uncentered columns">
			<h1><a href="#list">WDD Column</a></h1>
			<a class="logout" ng-click="loginObject.$logout()">Logout</a>
		</div>
	</div>
</div>
<div class="article-bg">
	<div class="row article-body">
		<div class="small-11 small-centered large-12 large-uncentered columns">
			<article ng-repeat="item in data.response.posts">
				<a href="#/detail/{{item.id}}" class="article-title">{{item.title}}</a>
				<span class="article-date">{{(item.timestamp * 1000) | date:'medium'}}</span>
				<p>{{item.body | limitTo:150}}...</p>
			</article>
		</div>
	</div>
</div>