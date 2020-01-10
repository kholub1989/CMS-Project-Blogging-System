<?php include "includes/db.php" ?>
<?php include "includes/header.php" ?>
<?php include "./admin/functions.php" ?>
<?php 
echo loggedInUserId();

if (userLikedThisPost(51)) {
    echo " USER LIKED IT";
} else {
    echo " USER DID NOT LIKE IT";
}
?>