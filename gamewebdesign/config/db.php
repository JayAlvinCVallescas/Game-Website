<?php
    $servername = "localhost:3306";
    $username = "root";
    $password = "jay123456789";
    $dbname = "webdesign";

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if(!$conn){
        die("Error". mysqli_connect_error());
    }

