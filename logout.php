<?php
session_start();
session_destroy();
// $_SESSION = NULL;
header('location: index.php');

?>