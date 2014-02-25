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
			</div>
			<div class="comment-area">
				<div class="comment" ng-repeat="item in remoteData">
					<p>{{item}}</p>
				</div>
<!-- 				<div class="comment">
					<img src="images/avatar.png">
					<a href="#">Jeremy McGraw</a>
					<span class="article-date">February 13, 2014 2:03PM</span>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ex ab veniam error enim quos minima tenetur voluptas voluptatum rerum. Reprehenderit, repudiandae ducimus error unde aut sunt porro nobis incidunt?</p>
				</div>
				<div class="comment">
					<img src="images/avatar.png">
					<a href="#">Jeremy McGraw</a>
					<span class="article-date">February 13, 2014 2:03PM</span>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ex ab veniam error enim quos minima tenetur voluptas voluptatum rerum. Reprehenderit, repudiandae ducimus error unde aut sunt porro nobis incidunt?</p>
				</div> -->
			</div>
		</div>
	</div>
</div>