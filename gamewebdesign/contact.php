
<?php  
    if(isset($_POST['submit-msg'])){
        require 'config\db.php';
        $fname = mysqli_real_escape_string($conn, $_POST['fname']);
        $lname = mysqli_real_escape_string($conn, $_POST['lname']);
        $number = mysqli_real_escape_string($conn, $_POST['number']);
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $message = mysqli_real_escape_string($conn, $_POST['message']);

        $query = "INSERT INTO user_contact(fname,lname,email,phone_num,msg,logdt) VALUES('$fname','$lname','$email','$number','$message', now())";

        if(mysqli_query($conn,$query)){
            header("Location: '.$servername.'");
            header('Location: contact.php');
            exit();
        } else {
            echo 'ECHO: '. mysqli_error($conn);
        }
    }

?>

<?php require '.\inc\header.php' ?>
<?php require 'signlog.php' ?>
    <div class="contact-container-top">
        <img src="./img/hing.jpg" alt="">
        <div class="contact-title">
            <h1>CONTACT <span>US</span></h1>
        </div>
    </div>
    <div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8001437.034457866!2d122.62175425!3d11.69783515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b563d0ca09d6a5%3A0x90c9795757496f8d!2sPuerto%20Princesa%2C%20Palawan!5e0!3m2!1sen!2sph!4v1664027203261!5m2!1sen!2sph"></iframe>
    </div>
    <div class="contact-container">
        <form class="contact-container-box" action="contact.php" method="POST">
            <div class="contact-input">
                <input type="text" name="fname" placeholder="First Name" required>
                <input type="text" name="lname" placeholder="Last Name" required>
            </div>
            <div class="contact-input">
                <input type="number" name="number" placeholder="Phone Number" required>
                <input type="email" name="email" placeholder="Email" required>
            </div>
            <textarea name="message" id="" cols="30" rows="10"></textarea>
            <button class='btn' name='submit-msg'>SUBMIT</button>
        </form>
    </div>
    </section>
         <?php require '.\inc\footer.php' ?>