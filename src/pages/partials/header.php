<?php
    session_start();
    if (!isset($_SESSION['LOGADO']) || $_SESSION['LOGADO'] !== TRUE) {
        header('location: ../index.php');
        exit();
    }
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>trabalho</title>

    <link rel="stylesheet" href="../assets/bootstrap.min.css">
</head>
<body>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a href="../home" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a href="../pessoa" class="nav-link">Pessoas</a>
        </li>
        <li class="nav-item">
          <a href="../usuario" class="nav-link">Usuarios</a>
        </li>
        <li class="nav-item">
          <a href="../dahsboard?logout=true" 
            onclick='return confirm(\"Deseja sair do sistema?\")' 
            class="nav-link">
            Sair
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

