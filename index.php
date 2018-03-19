<?php 

$pageTitle = "Anthony Vita";
$page = "index";
include("blocks/header.php");
include("blocks/navigation.php");  
?>

<div class="fullwindow background-index background">
<div class="strip fullwidth  background">
      <div class="center-box strip" style="position:relative;">
          <div class="anim__bar">
            
          </div>

          <div class="anim__intro"><h1>Anthony Vita</h1></div>

          <div class="anim__intro2"><h1>Director</h1></div>
 
          <div class="anim__intro3"><h1>Cinematographer</h1></div>

      </div>
      <div class="anim__intro4 strip">
            <a class="playbutton" href="javascript:;" data-video="showreel">
            <p>&#9658;</p>
            Play Reel</a>
      </div>
</div>
    <div id="showreel" class="to-open fullwindow strip">    
      <div class="film-ratio">
          <iframe class="video" width="560" height="315" src="https://player.vimeo.com/video/215367330?title=0&byline=0&portrait=0" frameborder="0" allowfullscreen=""></iframe>
      </div>  
      <a href="javascript:;" class="closevid">
        <div class="closevid__cross">
        </div>
        <span class="closevid__title">Close</span>
      </a>
      <div class="lightbox lightbox-opaque"></div>
    </div>
</div>
<?php include("blocks/footer.php"); ?>