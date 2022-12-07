<?php
 
 $newuser = $_POST["newuser"];
 $newsenha = $_POST["newsenha"];


    $newuser = "Usuário";
    if (isset($_POST["newuser"]) && $_POST["newuser"] != "") {
        $newuser = $_POST["newuser"];
    }
    $letra = "o";
    if (isset($_POST["sexo"]) && $_POST["sexo"] == "f") {
        $letra = "a";
    }
   
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin PWQUIZ</title>
    <script type="text/javascript" src="admin.js" async></script>
    <link rel="stylesheet" type="text/css" href="admin.css" />
</head>

<body>

    <div id="container">
        <div id="navbar">

            <h3><span>O</span><span>L</span><span>Á</span><span> </span>
            <span>A</span><span>D</span><span>M</span><span>I</span><span>N</span><span>!</span></h3>

        </div>


        <div id="novoadmin">
          <?php
           echo "<h1>Bem-vind$letra $newuser, que bom que se juntou a nós.</h1>";
           echo "<h2>Vamos criar seu primeiro Quiz?</h2>";
          ?>
        </div>


        <div id="criar">
            <div>
               <h2>Criar novo Quiz</h2>
               <?php
                echo "<h4>Clique para criar seu primeiro quiz</h4>";
               ?>
            </div>
           </div>

        <div id="criados">
         <div>
            <h2>Ver meus quizzes</h2>
            <?php
             echo "<h4>Você ainda não criou nenhum quiz :(</h4>";
            ?>
         </div>
        </div>

</body>
</html>