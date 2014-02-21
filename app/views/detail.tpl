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
					<article>
						<h2>{{article.response.posts[0].title}}</h2>
						<p>{{article.response.posts[0].body}}</p>
						<div class="article-poster">
							<img src="images/avatar.png">
							<p>Posted by <a href="#">Jeremy McGraw</a> on <span class="article-date">February 13, 2014 2:03PM</span>.</p>
						</div>
					</article>
					<div class="comment-form">
						<form>
							<textarea></textarea>
							<button class="article-button">Add Comment</button>
						</form>
					</div>
					<div class="comment-area">
						<div class="comment">
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
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- close the off-canvas menu -->
		<a class="exit-off-canvas"></a>
	  </div>
	</div>
</div>