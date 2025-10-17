<?php
    $msg_class = 'alert-dark';
    $msg = 'Bem vindo a Apple.';
    if(isset($_POST['email']) || isset($_POST['senha']) ){
        if($_POST['email'] == '' || $_POST['senha'] == ''){
            $msg_class = 'alert-danger';
            $msg = 'E-mail ou senha inválida';
        } else {
            include './config/db.php';

            $email = $_POST['email'];
            $senha = md5($_POST['senha']);

            $sql = "SELECT * FROM usuario WHERE email = '{$email}' AND senha = '{$senha}'";
            $result = $conn->query($sql);

            if($result->num_rows == 0){
                $msg_class = 'alert-danger';
                $msg = 'Email ou Senha Invalida.';
            } else {
                while($row = $result->fetch_assoc()){
                    if($row['ativo'] == 0){
                        $msg_class = 'alert-warning';
                        $msg = 'Usuária bloqueado entre em contato com adm.';
                    } else {

                        $msg_class = 'alert-success';
                        $msg = 'Login efeuado com sucesso.';
             
                        session_start();
                        $_SESSION['LOGADO'] = TRUE;
                        $_SESSION['EMAIL'] = $_POST['email'];

                        header('location: ./home');
                        exit();
                    }
                }
            }
        }
        
    } 
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fazer login</title>
    <link rel="stylesheet" href="./assets/bootstrap.min.css">
    <style>
        body {
            background-color: #007bff;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        form {
            background-color: #000;
            color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            text-align: center;
            width: 300px;
        }
        .logo {
            width: 100px;
            margin-bottom: 20px;
        }
        .form-control {
            margin-bottom: 10px;
        }
        .btn {
            background-color: #28a745;
            color: #fff;
            border: none;
            width: 100%;
        }
    </style>
</head>
<body>
    <form action="" method="post">
        <img class="logo" src="./assets/logo.png" alt="OSF Barbeiro">
        <h2>Fazer login</h2>
        <input type="email" name="email" class="form-control" placeholder="E-mail">
        <input type="password" name="senha" class="form-control" placeholder="Senha">
        <button type="submit" class="btn">Enviar</button>
    </form>
</body>
</html>