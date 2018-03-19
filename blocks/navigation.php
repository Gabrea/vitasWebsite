<?php


?>

<div class="logo__header"></div>
<a href="index.php">

  <div class="logo">

    <div class="logo__nthony"> 
      <span class="logo__words">&#9650;<span class="logo__blur">NTHONY</span></span>
    </div>
    <div class="logo__ita">
      <span class="logo__words">&#9660;<span class="logo__blur">ITA</span></span>
    </div>

    <ul class="menu flex_start_start col">
     	<li class=""><a href="">&#9650;</a></li>
        <li class="<?php if($page == "About") { echo " selected"; } ?>"><a href="about.php"> About</a></li>
        <li class="<?php if($page == "Director") { echo " selected"; } ?>"><a href="director.php"> Director</a></li>
        <li class="<?php if($page == "Cinematographer") { echo " selected"; } ?>"><a href="cinematographer.php"> Cinematographer</a></li>
        <li class="<?php if($page == "Contact") { echo " selected"; } ?>"><a href="contact.php"> Contact</a></li>
     	</ul>
  </div>
</a>

