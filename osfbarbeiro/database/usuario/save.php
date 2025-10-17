<?php

    include '../config/db.php';
    
    if($_SERVER['REQUEST_METHOD'] === 'POST'){

        $id = $_GET['id'] ?? null;
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $senha = md5($_POST['senha']);
        $ativo = $_POST['ativo'] ?? 1;

        if($id){

            $sql = "UPDATE usuario SET
             nome='$nome', 
             email='$email', 
             senha='$senha',
             ativo='$ativo'
             WHERE id='$id'
            ";

        } else {
            $sql = "INSERT INTO usuario (nome, email, senha)
            VALUES
            ('$nome', '$email', '$senha');
            ";
        }
   
        if($conn->query($sql) === TRUE){
            header("Location: index.php");
            exit;
        } else {
            echo 'Error: ' . $conn->error;
        }

        $conn->close();


    
      

    }

?>