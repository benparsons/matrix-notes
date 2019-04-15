//node watch.js && browser-sync start --server --files "*.html"


var fs = require('fs');
var showdown  = require('showdown'),
    converter = new showdown.Converter();

var filepath = ".";//"../blog/twim/twim-2018-05-25.md";

fs.watch(filepath, (eventType, filename) => {
  console.log(`event type is: ${eventType}`);
  if (filename && filename.indexOf('t') !== -1) {
    console.log(`filename provided: ${filename}`);
    var file = fs.readFileSync(filename, 'utf-8');
    var urls = fs.readFileSync("_url-directory.md", 'utf-8');
    var html = converter.makeHtml(file + "\n\n" + urls);
    //writeHtmlFile("<body>\n" + html + "\n</body>\n", filename);
    
    writeHtmlFile(beforeString + html + afterString, filename);
  } else {
    console.log('filename not provided or not t*');
  }
});

function writeHtmlFile(html, filename) {
  fs.writeFile("./html/" + filename.replace('md', 'html'), html, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}

var beforeString = `<!DOCTYPE html>
<!--[if IE 6]>
<html id="ie6" lang="en-US">
<![endif]-->
<!--[if IE 7]>
<html id="ie7" lang="en-US">
<![endif]-->
<!--[if IE 8]>
<html id="ie8" lang="en-US">
<![endif]-->
<!--[if !(IE 6) | !(IE 7) | !(IE 8)  ]><!-->
<html lang="en-US">
<!--<![endif]-->
<head>
	<meta charset="UTF-8" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@matrixdotorg" />
	<meta name="twitter:creator" content="@matrixdotorg" />
	<meta name="twitter:title" content="This Week in Matrix 2019-04-12" />
	<meta name="twitter:description" content="This Week in Matrix 2019-04-12" />
	<meta name="twitter:image" content="https://matrix.org/blog/2019/04/12/this-week-in-matrix-2019-04-12/ananace-foss-north.jpg" />
	<meta name="twitter:image:alt" content="Matrix: live on stage" />
	
	
	<link rel="pingback" href="https://matrix.org/blog/xmlrpc.php" />

		<!--[if lt IE 9]>
	<script src="https://matrix.org/blog/wp-content/themes/Divi3/js/html5.js" type="text/javascript"></script>
	<![endif]-->

	<script type="text/javascript">
		document.documentElement.className = 'js';
	</script>

	<title>This Week in Matrix 2019-04-12</title>
<link rel='dns-prefetch' href='https://fonts.googleapis.com/' />
<link rel='dns-prefetch' href='https://s.w.org/' />
<link rel="alternate" type="application/rss+xml" title="Matrix.org &raquo; Feed" href="https://matrix.org/blog/feed/" />
<link rel="alternate" type="application/rss+xml" title="Matrix.org &raquo; Comments Feed" href="https://matrix.org/blog/comments/feed/" />
		<script type="text/javascript">
			window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/2.4\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/2.4\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/matrix.org\/blog\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.9.5"}};
			!function(a,b,c){function d(a,b){var c=String.fromCharCode;l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,a),0,0);var d=k.toDataURL();l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,b),0,0);var e=k.toDataURL();return d===e}function e(a){var b;if(!l||!l.fillText)return!1;switch(l.textBaseline="top",l.font="600 32px Arial",a){case"flag":return!(b=d([55356,56826,55356,56819],[55356,56826,8203,55356,56819]))&&(b=d([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]),!b);case"emoji":return b=d([55357,56692,8205,9792,65039],[55357,56692,8203,9792,65039]),!b}return!1}function f(a){var c=b.createElement("script");c.src=a,c.defer=c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var g,h,i,j,k=b.createElement("canvas"),l=k.getContext&&k.getContext("2d");for(j=Array("flag","emoji"),c.supports={everything:!0,everythingExceptFlag:!0},i=0;i<j.length;i++)c.supports[j[i]]=e(j[i]),c.supports.everything=c.supports.everything&&c.supports[j[i]],"flag"!==j[i]&&(c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&c.supports[j[i]]);c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&!c.supports.flag,c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},c.supports.everything||(h=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",h,!1),a.addEventListener("load",h,!1)):(a.attachEvent("onload",h),b.attachEvent("onreadystatechange",function(){"complete"===b.readyState&&c.readyCallback()})),g=c.source||{},g.concatemoji?f(g.concatemoji):g.wpemoji&&g.twemoji&&(f(g.twemoji),f(g.wpemoji)))}(window,document,window._wpemojiSettings);
		</script>
		<meta content="Divi v.3.0.34" name="generator"/><style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>
<link rel='stylesheet' id='toc-screen-css'  href='../../../../wp-content/plugins/table-of-contents-plus/screen.min.css%3Fver=1509.css' type='text/css' media='all' />
<link rel='stylesheet' id='wpos-slick-style-css'  href='../../../../wp-content/plugins/wp-slick-slider-and-image-carousel/assets/css/slick.css%3Fver=1.4.css' type='text/css' media='all' />
<link rel='stylesheet' id='wpsisac-public-style-css'  href='../../../../wp-content/plugins/wp-slick-slider-and-image-carousel/assets/css/slick-slider-style.css%3Fver=1.4.css' type='text/css' media='all' />
<link rel='stylesheet' id='divi-fonts-css'  href='../../../../../css%3Ffamily=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&amp;subset=latin,latin-ext.css' type='text/css' media='all' />
<link rel='stylesheet' id='divi-style-css'  href='../../../../wp-content/themes/Divi3/style.css%3Fver=3.0.34.css' type='text/css' media='all' />
<link rel='stylesheet' id='et-shortcodes-css-css'  href='../../../../wp-content/themes/Divi3/epanel/shortcodes/css/shortcodes.css%3Fver=3.0.34.css' type='text/css' media='all' />
<link rel='stylesheet' id='et-shortcodes-responsive-css-css'  href='../../../../wp-content/themes/Divi3/epanel/shortcodes/css/shortcodes_responsive.css%3Fver=3.0.34.css' type='text/css' media='all' />
<link rel='stylesheet' id='magnific-popup-css'  href='../../../../wp-content/themes/Divi3/includes/builder/styles/magnific_popup.css%3Fver=3.0.34.css' type='text/css' media='all' />
<script type='text/javascript' src='../../../../wp-includes/js/jquery/jquery.js%3Fver=1.12.4'></script>
<script type='text/javascript' src='../../../../wp-includes/js/jquery/jquery-migrate.min.js%3Fver=1.4.1'></script>
<link rel='https://api.w.org/' href='https://matrix.org/blog/wp-json/' />
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://matrix.org/blog/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://matrix.org/blog/wp-includes/wlwmanifest.xml" /> 
<link rel='prev' title='This Week in Matrix 2019-04-05' href='https://matrix.org/blog/2019/04/05/this-week-in-matrix-2019-04-05/' />
<meta name="generator" content="WordPress 4.9.5" />
<link rel="canonical" href="index.html" />
<link rel='shortlink' href='https://matrix.org/blog/?p=4179' />
<style type="text/css">div#toc_container {background: #f9f9f9;border: 1px solid #aaaaaa;}</style><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />		<style id="theme-customizer-css">
																																				
		
					#top-menu li.current-menu-ancestor > a, #top-menu li.current-menu-item > a,
			.et_color_scheme_red #top-menu li.current-menu-ancestor > a, .et_color_scheme_red #top-menu li.current-menu-item > a,
			.et_color_scheme_pink #top-menu li.current-menu-ancestor > a, .et_color_scheme_pink #top-menu li.current-menu-item > a,
			.et_color_scheme_orange #top-menu li.current-menu-ancestor > a, .et_color_scheme_orange #top-menu li.current-menu-item > a,
			.et_color_scheme_green #top-menu li.current-menu-ancestor > a, .et_color_scheme_green #top-menu li.current-menu-item > a { color: #666666; }
																										
		
																														
		@media only screen and ( min-width: 981px ) {
																																																																.et-fixed-header #top-menu li.current-menu-ancestor > a,
				.et-fixed-header #top-menu li.current-menu-item > a { color: #666666 !important; }
						
					}
					@media only screen and ( min-width: 1350px) {
				.et_pb_row { padding: 27px 0; }
				.et_pb_section { padding: 54px 0; }
				.single.et_pb_pagebuilder_layout.et_full_width_page .et_post_meta_wrapper { padding-top: 81px; }
				.et_pb_section.et_pb_section_first { padding-top: inherit; }
				.et_pb_fullwidth_section { padding: 0; }
			}
		
		@media only screen and ( max-width: 980px ) {
																				}
		@media only screen and ( max-width: 767px ) {
														}
	</style>

	
	
	
	<style id="module-customizer-css">
			</style>

			<style type="text/css">.recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}</style>
		<meta property="og:image" content="https://matrix.org/blog/wp-content/uploads/2015/01/logo1.png" />

<!-- Matomo tracking -->
<script type="text/javascript">
  var _paq = _paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//piwik.riot.im/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', '3']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
</head>
<body class="post-template-default single single-post postid-4179 single-format-standard et_pb_button_helper_class et_fixed_nav et_show_nav et_cover_background et_pb_gutter et_pb_gutters3 et_primary_nav_dropdown_animation_fade et_secondary_nav_dropdown_animation_fade et_pb_footer_columns4 et_header_style_left et_right_sidebar et_divi_theme unknown">
	<div id="page-container">

	
	
		<header id="main-header" data-height-onload="66">
			<div class="container clearfix et_menu_container">
							<div class="logo_container">
					<span class="logo_helper"></span>
					<a href="https://matrix.org/">
						<img src="../../../../wp-content/uploads/2015/01/logo1.png" alt="Matrix.org" id="logo" data-height-percentage="54" />
					</a>
				</div>
				<div id="et-top-navigation" data-height="66" data-fixed-height="40">
											<nav id="top-menu-nav">
						<ul id="top-menu" class="nav"><li id="menu-item-17" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-17"><a href="http://matrix.org/">Home</a></li>
<li id="menu-item-794" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-794"><a href="https://matrix.org/docs/projects/try-matrix-now.html">Try Matrix Now!</a></li>
<li id="menu-item-3677" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3677"><a href="http://matrix.org/twim">TWIM</a></li>
<li id="menu-item-3532" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3532"><a href="https://matrix.org/docs/projects/clients-matrix">Clients</a></li>
<li id="menu-item-348" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-348"><a href="https://matrix.org/docs/guides">Guides</a></li>
<li id="menu-item-349" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-349"><a href="https://matrix.org/docs/spec">Spec</a></li>
<li id="menu-item-351" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-351"><a href="https://matrix.org/code">Code</a></li>
<li id="menu-item-3655" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3655"><a href="https://matrix.org/docs/projects/hosting">Hosting</a></li>
<li id="menu-item-1323" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1323"><a href="https://matrix.org/docs/guides/faq">FAQ</a></li>
<li id="menu-item-353" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-353"><a href="https://matrix.org/blog/posts">Blog</a></li>
<li id="menu-item-3612" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3612"><a href="https://status.matrix.org/">Status</a></li>
</ul>						</nav>
					
					
					
										<div id="et_top_search">
						<span id="et_search_icon"></span>
					</div>
					
					<div id="et_mobile_nav_menu">
				<div class="mobile_nav closed">
					<span class="select_page">Select Page</span>
					<span class="mobile_menu_bar mobile_menu_bar_toggle"></span>
				</div>
			</div>				</div> <!-- #et-top-navigation -->
			</div> <!-- .container -->
			<div class="et_search_outer">
				<div class="container et_search_form_container">
					<form role="search" method="get" class="et-search-form" action="https://matrix.org/blog/">
					<input type="search" class="et-search-field" placeholder="Search &hellip;" value="" name="s" title="Search for:" />					</form>
					<span class="et_close_search_field"></span>
				</div>
			</div>
		</header> <!-- #main-header -->

		<div id="et-main-area">

<div id="main-content">
	<div class="container">
		<div id="content-area" class="clearfix">
			<div id="left-area">
											<article id="post-4179" class="et_pb_post post-4179 post type-post status-publish format-standard hentry category-uncategorized">
                      <div class="et_post_meta_wrapper">`;
                      
var afterString = `

</div> <!-- .entry-content -->
</article> <!-- .et_pb_post -->

  </div> <!-- #left-area -->

</div> <!-- #content-area -->
</div> <!-- .container -->
</div> <!-- #main-content -->


<footer id="main-footer">



<div id="et-footer-nav">
<div class="container">
  <ul id="menu-footer-menu" class="bottom-nav"><li id="menu-item-3656" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3656"><a href="https://matrix.org/docs/guides/matrix_org_legal.html">Legal</a></li>
<li id="menu-item-3767" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3767"><a href="https://matrix.org/docs/api">Client-Server APIs</a></li>
</ul>					</div>
</div> <!-- #et-footer-nav -->


<div id="footer-bottom">
<div class="container clearfix">
<ul class="et-social-icons">

<li class="et-social-icon et-social-twitter">
<a href="http://twitter.com/matrixdotorg" class="icon">
<span>Twitter</span>
</a>
</li>
<li class="et-social-icon et-social-rss">
<a href="https://matrix.org/blog/feed/" class="icon">
<span>RSS</span>
</a>
</li>

</ul><p id="footer-info">Designed by <a href="http://www.elegantthemes.com" title="Premium WordPress Themes">Elegant Themes</a> | Powered by <a href="http://www.wordpress.org">WordPress</a></p>					</div>	<!-- .container -->
</div>
</footer> <!-- #main-footer -->
</div> <!-- #et-main-area -->


</div> <!-- #page-container -->

<style type="text/css" id="et-builder-page-custom-style">
.et_pb_bg_layout_dark { color: #ffffff !important; } .page.et_pb_pagebuilder_layout #main-content { background-color: rgba(255,255,255,0); } .et_pb_section { background-color: #ffffff; }
</style><script type='text/javascript' src='../../../../wp-content/themes/Divi3/includes/builder/scripts/frontend-builder-global-functions.js%3Fver=3.0.34'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var tocplus = {"smooth_scroll":"1"};
/* ]]> */
</script>
<script type='text/javascript' src='../../../../wp-content/plugins/table-of-contents-plus/front.min.js%3Fver=1509'></script>
<script type='text/javascript' src='../../../../wp-includes/js/comment-reply.min.js%3Fver=4.9.5'></script>
<script type='text/javascript' src='../../../../wp-content/themes/Divi3/includes/builder/scripts/jquery.mobile.custom.min.js%3Fver=3.0.34'></script>
<script type='text/javascript' src='../../../../wp-content/themes/Divi3/js/custom.js%3Fver=3.0.34'></script>
<script type='text/javascript' src='../../../../wp-content/themes/Divi3/includes/builder/scripts/jquery.fitvids.js%3Fver=3.0.34'></script>
<script type='text/javascript' src='../../../../wp-content/themes/Divi3/includes/builder/scripts/waypoints.min.js%3Fver=3.0.34'></script>
<script type='text/javascript' src='../../../../wp-content/themes/Divi3/includes/builder/scripts/jquery.magnific-popup.js%3Fver=3.0.34'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var et_pb_custom = {"ajaxurl":"https:\/\/matrix.org\/blog\/wp-admin\/admin-ajax.php","images_uri":"https:\/\/matrix.org\/blog\/wp-content\/themes\/Divi3\/images","builder_images_uri":"https:\/\/matrix.org\/blog\/wp-content\/themes\/Divi3\/includes\/builder\/images","et_frontend_nonce":"6f9895d03d","subscription_failed":"Please, check the fields below to make sure you entered the correct information.","et_ab_log_nonce":"e105015d3a","fill_message":"Please, fill in the following fields:","contact_error_message":"Please, fix the following errors:","invalid":"Invalid email","captcha":"Captcha","prev":"Prev","previous":"Previous","next":"Next","wrong_captcha":"You entered the wrong number in captcha.","is_builder_plugin_used":"","ignore_waypoints":"no","is_divi_theme_used":"1","widget_search_selector":".widget_search","is_ab_testing_active":"","page_id":"4179","unique_test_id":"","ab_bounce_rate":"5","is_cache_plugin_active":"no","is_shortcode_tracking":""};
/* ]]> */
</script>
<script type='text/javascript' src='../../../../wp-content/themes/Divi3/includes/builder/scripts/frontend-builder-scripts.js%3Fver=3.0.34'></script>
<script type='text/javascript' src='../../../../wp-includes/js/wp-embed.min.js%3Fver=4.9.5'></script>
<script async="async" type='text/javascript' src='../../../../wp-content/plugins/akismet/_inc/form.js%3Fver=4.0.3'></script>
</body>
</html>`;