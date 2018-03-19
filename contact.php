<?php 
$pageTitle = "Contact";
$page = "Contact";

use PHPMailer\PHPMailer\PHPMailer;
require 'vendor/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/src/Exception.php';
require 'vendor/phpmailer/src/SMTP.php';

  if ($_SERVER["REQUEST_METHOD"] == "POST"){

    $name = trim(filter_input(INPUT_POST,"name",FILTER_SANITIZE_STRING));
    $email = trim(filter_input(INPUT_POST,"email",FILTER_SANITIZE_EMAIL));
    $message = trim(filter_input(INPUT_POST,"message",FILTER_SANITIZE_SPECIAL_CHARS));

    if($name == "" || $email == "" || $message == ""){
      $error_message = "please fill in the required fields: Name, Email, Message";
    }
    if(!isset($error_message) && $_POST["address"] != ""){
      $error_message = "Bad form input";
    }
    if(!isset($error_message) && !PHPMailer::validateAddress($email)){
      $error_message = "Invalid Email Address";
    }

    if(!isset($error_message)){
      $email_body = "";
      $email_body .= "Name: " . $name . "\n";
      $email_body .= "Email: " . $email . "\n";
      $email_body .= "Message: " . $message . "\n";
      
      $mail = new PHPMailer;
      
      //Tell PHPMailer to use SMTP
      $mail->isSMTP();
      //Enable SMTP debugging
      // 0 = off (for production use)
      // 1 = client messages
      // 2 = client and server messages
      $mail->SMTPDebug = 2;
      //Set the hostname of the mail server
      $mail->Host = 'smtp.gmail.com';
      // use
      // $mail->Host = gethostbyname('smtp.gmail.com');
      // if your network does not support SMTP over IPv6
      //Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
      $mail->Port = 587;
      //Set the encryption system to use - ssl (deprecated) or tls
      $mail->SMTPSecure = 'tls';
      //Whether to use SMTP authentication
      $mail->SMTPAuth = true;
      //Username to use for SMTP authentication - use full email address for gmail
      $mail->Username = "gabrielle.rea94@gmail.com";
      //Password to use for SMTP authentication
      $mail->Password = "xkksuavfoarysrzs";

      //It's important not to use the submitter's address as the from address as it's forgery,
      //which will cause your messages to fail SPF checks.
      //Use an address in your own domain as the from address, put the submitter's address in a reply-to
      $mail->setFrom('gabrielle.rea94@gmail.com', $name);
      $mail->addReplyTo($email, $name);
      $mail->addAddress('gabrielle.rea94@gmail.com', 'Gabbie');
    
      $mail->Subject = 'Contact form from: ' . $name;
      
      $mail->Body = $email_body;
      if ($mail->send()) {
          header("location:contact.php?status=thanks"); 
          exit;
      }
      $error_message = "Mailer Error: " . $mail->ErrorInfo;
    }
  }
?>
<?php 
include("blocks/header.php"); 
include("blocks/navigation.php"); 


?>
<div id="p5" class="absolute main flex_start_start_i col" >
  <div class="contactbox" >
      <?php
      if(isset($_GET["status"]) && $_GET["status"] == "thanks"){
        echo "<p>thanks</p>";
      }
     else{ 

        

      ?>
      <form class="form" method="post" action="contact.php" novalidate>
        
        <fieldset class="form-fieldset">
        <legend><h4>Get in contact with Anthony</h4></legend>
          <?php
          if(isset($error_message)){
            echo "<p>".$error_message."</p>";
          }
          ?>

          <input placeholder="Name" type="text" name="name" value="<?php if(isset($name)){echo $name;}?>" id="username" tabindex="0" />
          <label for="name">
            
          </label>
        </fieldset>
        
        <fieldset class="form-fieldset">
          <input placeholder="Email" type="email" name="email" value="<?php if(isset($email)){echo $email;}?>" id="email" tabindex="0" />
          <label for="email">
            
          </label>
        </fieldset>
        
        <fieldset class="form-fieldset">
          <textarea name="message" rows="3" placeholder="Message"/><?php if(isset($message)){echo htmlspecialchars($_POST['message']);}?></textarea>
          <label for="message">
            
          </label>
        </fieldset>
        <fieldset class="form-fieldset" style="display:none;"> 
          <input name="address" rows="3" placeholder="Message"/>
          <label for="address">
          <p>Please leave this field blank</p>
          </label>
        </fieldset>
        <div class="form-footer">
          <input class="sendlabel" type="submit" name="submit" value="Send">

        </div>
      </form>
    <?php }
       ?>
  </div>
</div> 

<?php include("blocks/footer.php"); ?>