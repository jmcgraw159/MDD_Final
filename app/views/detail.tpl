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
			<article>
				<h2>{{article.response.posts[0].title}}</h2>
				<p ng-bind-html="trustSnippet()"></p>
				<div class="article-poster">
					<img ng-src="{{image}}">
					<p>Posted by <a href="{{article.response.blog.url}}" target="_blank">{{article.response.posts[0].blog_name}}</a> on <span class="article-date">{{date | date:'medium'}}</span>.</p>
				</div>
			</article>
			<div ng-controller="CommentCtrl" class="comment-form">
				<form>
					<textarea ng-model="comment.message"></textarea>
					<button class="article-button" ng-click="saveData()">Add Comment</button>
				</form>
				<div class="comment-area" ng-repeat="item in comments">
				<div class="comment">
					<img ng-src="{{item.avatar}}">
					<a>{{item.username}}</a>
					<span class="article-date">{{item.date}}</span>
					<p>{{item.comment}}</p>
				</div>
			</div>
			</div>
		</div>
	</div>
</div>