<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body>
  <div id="app"></div>
  <?php wp_footer(); ?>
  <script type="text/javascript">
    WebFontConfig = {
      google: { families: [ 'Roboto:300,400,700,900' ] }
    };
    (function() {
      var wf = document.createElement('script');
      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    })();
  </script>
  
  <script type="text/javascript"> 
  (function(d){
    var s = d.createElement("script");
    s.setAttribute("data-account", "D3656BNpyD");
    s.setAttribute("src", "https://cdn.userway.org/widget.js");
    (d.body || d.head).appendChild(s);})(document);
 
  (function(d){
    var ns = d.createElement("noscript");
    ns.innerHTML = `Please ensure Javascript is enabled for purposes of <a href="https://userway.org">website accessibility</a>`;
    (d.body || d.head).appendChild(ns);})(document);    
</script>

<div id="accessibilityWidget" tabindex="0">Click for Accessibility</div>
</body>
</html>
