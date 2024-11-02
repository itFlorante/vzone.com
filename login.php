<?php
$servername = "localhost";
$username = "username";
$password = "password";

// Create connection
$conn = new mysqli($servername, $username, $password);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Create database
$sql = "CREATE DATABASE myDB";
if ($conn->query($sql) === TRUE) {
  echo "Database created successfully";
} else {
  echo "Error creating database: " . $conn->error;
}

$conn->close();
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Life Ambission</title>
    <link rel="stylesheet" href="life.css">
</head>

<body>
    <div class="main">
        <div class="navbar">
            <div class="icon">
                <h2 class="logo"> Life Ambission</h2>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="Home page.html"> About</a></li>
                    <li><a href="#">service</a></li>
                    <li><a href="#">Desgin</a></li>
                    <li><a href="#">Contract</a></li>
                </ul>

            </div>

            <div class="search">
                <input class="srch" type="text" name="" placeholder="type to text">
                <a href="#"> <button class="btn">search</button></a>
            </div>

        </div>
        <div class="content">
            <h1>To know About <br><span>the school you want</span> <br>to go</h1>
            <p class="pra">The life Ambission help the student to get <br>know more About the school they want to attend <br>it comprise of composing and sending electronic messages, <br> typically consisting of alphabetic and numeric characters,<br> in other for student
                which don't know about they school.<br> the Life Ambission is in full support to help student and,<br> children who want to study anywhere in africa.</p>

            <button class="cn"><a href="#">join us</a></button>

            <div class="form">
                <h2>login here</h2>
                <input type="Email" name="Email" placeholder="Enter Email here" required>
                <input type="password" name="password" placeholder="Enter password here" required>
                <button class="btnn"><a href="log.html">Login</a></button>

                <p class="link">Don't have an account<br>
                    <a href="come.html">sign up </a> here</a>
                </p>
                <p class="log">Login with</p>

                <div class="icons">
                    <a href="#">
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-instagram"></ion-icon>
                        <ion-icon name="logo-twitter"></ion-icon>
                        <ion-icon name="logo-google"></ion-icon>
                        <ion-icon name="logo-apple"></ion-icon>


                    </a>
                </div>

            </div>

        </div>
    </div>
    <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>

</body>

</html>