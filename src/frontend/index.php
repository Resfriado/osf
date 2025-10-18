<?php
session_start();

// Inicializa mensagem de feedback
$msg_class = 'alert-dark';
$msg = 'Bem-vindo à Apple.';

// Verifica se o formulário foi enviado
if (isset($_POST['email']) && isset($_POST['senha'])) {

    // Campos vazios
    if ($_POST['email'] == '' || $_POST['senha'] == '') {
        $msg_class = 'alert-danger';
        $msg = 'E-mail ou senha inválida';
    } else {
        // Inclui a conexão com o banco
        include __DIR__ . '/../database/config/db.php';

        // Testa conexão
        if (!$conn) {
            die("Erro na conexão com o banco: " . mysqli_connect_error());
        }

        $email = $_POST['email'];
        $senha = md5($_POST['senha']);

        // Consulta no banco
        $sql = "SELECT * FROM usuario WHERE email = '{$email}' AND senha = '{$senha}'";
        $result = $conn->query($sql);

        if ($result->num_rows == 0) {
            $msg_class = 'alert-danger';
            $msg = 'Email ou senha inválida.';
        } else {
            $row = $result->fetch_assoc();
            if ($row['ativo'] == 0) {
                $msg_class = 'alert-warning';
                $msg = 'Usuário bloqueado. Entre em contato com o administrador.';
            } else {
                $msg_class = 'alert-success';
                $msg = 'Login efetuado com sucesso.';

                // Cria variáveis de sessão
                $_SESSION['LOGADO'] = true;
                $_SESSION['EMAIL'] = $email;

                // Redireciona para a home
                header('Location: ./pages/home/index.php');
                exit();
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
        .alert {
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
        }
        .alert-dark { background-color: #343a40; color: #fff; }
        .alert-danger { background-color: #dc3545; color: #fff; }
        .alert-warning { background-color: #ffc107; color: #000; }
        .alert-success { background-color: #28a745; color: #fff; }
    </style>
</head>
<body>
    <form action="" method="post">
        <img class="logo" src="./assets/logo.png" alt="OSF Barbeiro">
        <h2>Fazer login</h2>

        <!-- Mensagem de feedback -->
        <?php if(!empty($msg)): ?>
        <div class="alert <?php echo $msg_class; ?>">
            <?php echo $msg; ?>
        </div>
        <?php endif; ?>

        <input type="email" name="email" class="form-control" placeholder="E-mail">
        <input type="password" name="senha" class="form-control" placeholder="Senha">
        <button type="submit" class="btn">Enviar</button>
    </form>
</body>
</html>
