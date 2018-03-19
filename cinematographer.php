<?php 
$pageTitle = "Cinematographer";
$page = "Cinematographer";
include("data.php");  
include("collections/functions.php");  
include("blocks/header.php");
include("blocks/navigation.php");  
?>

<div id="p4" class="projpage absolute  main scroll flex_cen_cen row" >
   <a href="javascript:;" class="landnav__toggle--hidden">
      <span></span>
      <span></span>
    </a>
  <div class="landnav flex_start_start col">
      <a  class="landnav__toggle">
        <span></span>
        <span></span>
      </a>
      
    	<div class="landnav__list flex_start_start col">
      <?php 
        foreach($catalog as $id => $item){
          if(strtolower($page) == strtolower($item["role"])) {
          echo "<div class='landnav__pro pro2 flex_cen_cen row'>
                  <a class='s1' href='javascript:;''>
                  ".$item["title"]."
                  </a></div>";
          }
        }
      ?>    
    	</div>
      
  </div>
  <div class="projects flex_start_start col">
       <?php foreach($catalog as $id => $item){
            
            echo get_item_html($id, $item, $page);
        }
        ?>   
	 </div>
</div> 

<?php include("blocks/footer.php"); ?>