<?php 

function get_item_html($id, $item, $role){
	if(strtolower($role) == strtolower($item["role"])) {
		echo "
			<div id='s1' class='projects__film flex_start_start_i col'>
			<a class='projects__title' href=''>".$item["title"]."</a>
		    <div class='projects__text'>
		      <label for='s1text' class='projects__text--hide'>
		        
		      </label>
		      <p><h2>" .$item["type"]."</h2></p>
		      <br>
		      <p>" .$item["description"]."</p>
		      <br>
		      <p><h2>" .$item["camera"]."</h2></p>
		      <p>" .$item["lenses"]."</p>
		      <br>
		";
		
		foreach($item["crew"] as $crew){
			echo "<p>" . $crew ."</p>";
		};

		echo "
			</div>
			<div id='slider1' class='projects__slider'>
			<a data-video='".str_replace(' ', '-', $item["title"])."' href='javascript:;' class='button-play play-video play-button'>&#9658;</a>
			<div class='slides'>";
			
			foreach($item["photos"] as $photo){
				echo '
                     	<article>
                     	    <img src="'.$photo.'" />
                     	</article>';
			}
			echo "</div>";
			
		echo "</div>";
		echo "<div id='". str_replace(' ', '-', $item["title"]) ."' class='to-open fullwindow'>    
		            <div class='film-ratio'>
		                <iframe class='video' width='560' height='315' src='".$item["video"]."' frameborder='0' allowfullscreen=''></iframe>
					</div>  
					  <a href='javascript:;' class='cross-wrapper close-video'>
		                  <div class='cross'>
		                  </div>
		              </a>
					<div class='lightbox'></div>
				</div>";
	echo "</div>";

	};
}