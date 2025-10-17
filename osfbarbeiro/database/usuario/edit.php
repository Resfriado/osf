<?php 
    include '../config/db.php';
    include '../include/header.php'; 

    if(!isset($_GET['id'])){
        echo 'ID não exite';
        exit;
    }

    $id = $_GET['id'];
    $sql = "SELECT * FROM usuario WHERE id='$id'";
    $result = $conn->query($sql);
    while ($row = $result->fetch_assoc()){
        $nome = $row['nome'];
        $email = $row['email'];
        $senha = $row['senha'];
        $ativo = $row['ativo'];
    }
?>

<div class="container mt-4">
    <h2>Editar Usuario</h2>
    <form action="save.php?id=<?= $_GET['id'] ?>" method="POST" id="formPessoa">
        <div class="mb-2">
            <label>Nome:</label>
            <input type="text" name="nome" value="<?= $nome ?>" class="form-control" required>
        </div>
        <div class="mb-2">
            <label>Email:</label>
            <input type="email" name="email" value="<?= $email ?>" class="form-control" required>
        </div>
        <div class="mb-2">
            <label>Senha:</label>
            <input type="password" id="senha" name="senha" class="form-control" minilehgth="6">
        </div>
        <div class="mb-2">
            <label>Status:</label>
            <input type="radio" name="ativo" value="0" <?= $ativo == 0 ? 'checked' : '' ?>> Bloqueado
            <input type="radio" name="ativo" value="1" <?= $ativo == 1 ? 'checked' : '' ?>> Ativo
        </div>
        <button class="btn btn-success" type="submit">Salvar</button>
    </form>
</div>

<script src="https://jsuites.net/v5/jsuites.js"></script>
<script src="../js/script.js"></script>
<?php 
    include '../include/footer.php'; 
?>