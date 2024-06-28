<?php

    $db_server = "srv1336.hstgr.io";
    $db_user = "u466925758_SongList";
    $db_pass = "Chipp/123";
    $db_name = "u466925758_SongList";
    $conn = "";

    try {
        @$conn = mysqli_connect( $db_server,$db_user,$db_pass,$db_name);

    } catch (mysqli_sql_exception) {
        include("error.html");
    }
    
?>