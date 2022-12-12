<?php
session_start();
$acao = $_POST["acao"];
 if($acao == "cadastro") {
   if(!isset($_SESSION["usuarios"])){
        $_SESSION["usuarios"] = []; 
   }

   $_SESSION["usuarios"][] = $_POST["user"];
   $_SESSION["usuarios"][] = $_POST["senha"];
   $isnewadmin = true;
 }else if ($acao == "login") {
       if(isset($_SESSION["usuarios"])){
        $isnewadmin = false;
   }else{
     isadmin = false;
   }
 }

?>