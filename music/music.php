<?php
    include("database.php");
    $query = "select * from songs";
    $result = mysqli_query($conn, $query);
    echo'
    <script>
        let songID = [];
        let songFull = [];
    </script>
    ';
    while($row = mysqli_fetch_assoc($result)){
        echo'<script>
                songID.push("'.$row["songID"].'");
                songFull.push("'.$row["songName"].'");
            </script>';
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="main.css">
    <script src="https://kit.fontawesome.com/fcfafcb316.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="center">
    <audio id="aug"></audio>
    <div class="songContainer">
        <img id="cover" alt="" srcset="">
        <h2 id="songtitle">Yahello</h2>
        <input id="seekBar" type="range">
    <div class="best">
    <button id="prebtn"><i class=" fa-solid fa-backward-step"></i></button>
    <button id="playbtn"><i class="fa-solid fa-play"></i></button>
    <button id="nextbtn"><i class="fa-solid fa-forward-step"></i></button><br>
    </div>
    <button id="shiftbtn"><i class="fa-solid fa-shuffle"></i></button>
</div>
    <script src="main.js"></script>
</div>
</body>
</html>
