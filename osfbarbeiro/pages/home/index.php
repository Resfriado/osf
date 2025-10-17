<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Serviços</title>
    <link rel="stylesheet" href="../assets/bootstrap.min.css">
    <style>
        body {
            background-color: #f8f9fa;
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        .navbar {
            background-color: #28a745;
            padding: 10px;
        }
        .navbar a {
            color: #fff;
            text-decoration: none;
            margin: 0 15px;
            font-weight: bold;
        }
        .navbar a:hover {
            text-decoration: underline;
        }
        .filter-bar {
            margin: 20px 0;
            text-align: center;
        }
        .filter-bar button {
            background-color: #ddd;
            border: none;
            padding: 10px 20px;
            margin: 5px;
            border-radius: 5px;
            cursor: pointer;
        }
        .filter-bar button.active {
            background-color: #28a745;
            color: #fff;
        }
        .search-bar {
            text-align: center;
            margin: 20px 0;
        }
        .search-bar input {
            width: 300px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .container {
            max-width: 1200px;
            margin: auto;
        }
        .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .card {
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            margin: 10px;
            padding: 15px;
            text-align: center;
            width: 300px;
            transition: transform 0.2s;
            flex: 1 1 calc(33.333% - 20px);
            box-sizing: border-box;
        }
        .card:hover {
            transform: scale(1.05);
        }
        .card h3 {
            margin-bottom: 10px;
            font-size: 1.5rem;
        }
        .card p {
            margin: 5px 0;
            font-size: 1rem;
        }
        .btn-reservar {
            background-color: transparent;
            color: #28a745;
            border: 2px solid #28a745;
            padding: 10px;
            border-radius: 5px;
            text-decoration: none;
            font-size: 1rem;
            width: 100%;
            text-align: center;
            box-sizing: border-box;
        }
        .btn-reservar:hover {
            background-color: #28a745;
            color: #fff;
        }
    </style>
</head>
<body>
    <div class="navbar">
        <a href="#">INÍCIO</a>
        <a href="#">RESERVAS</a>
    </div>

    <div class="filter-bar">
        <button class="active">Todos</button>
        <button>Barbearia</button>
        <button>Cachos</button>
        <button>Específico</button>
    </div>

    <div class="search-bar">
        <input type="text" placeholder="Procurar serviços...">
    </div>

    <div class="container">
        <h1 class="text-center mb-4">Serviços Disponíveis</h1>
        <div class="row">
            <div class="card">
                <h3>Barba</h3>
                <p>Categoria: Barbearia</p>
                <p>Duração: 30 min</p>
                <p>Preço: R$ 30,00</p>
                <p>Barba feita na máquina/toalha quente e navalha</p>
                <a href="#" class="btn-reservar">RESERVAR</a>
            </div>
            <div class="card">
                <h3>Barba + pezinho</h3>
                <p>Categoria: Barbearia</p>
                <p>Duração: 30 min</p>
                <p>Preço: R$ 35,00</p>
                <p>Barba + acabamento do cabelo</p>
                <a href="#" class="btn-reservar">RESERVAR</a>
            </div>
            <div class="card">
                <h3>Botox capilar</h3>
                <p>Categoria: Específico</p>
                <p>Duração: 1h</p>
                <p>Preço: R$ 120,00</p>
                <p>É um tratamento que tira o frizz e reduz o volume dos cabelos com naturalidade.</p>
                <a href="#" class="btn-reservar">RESERVAR</a>
            </div>
            <div class="card">
                <h3>Cabelo</h3>
                <p>Categoria: Barbearia</p>
                <p>Duração: 30 min</p>
                <p>Preço: R$ 35,00</p>
                <p>Social, Degrade e corte todo na tesoura</p>
                <a href="#" class="btn-reservar">RESERVAR</a>
            </div>
            <div class="card">
                <h3>Cabelo + barba + pigmentação</h3>
                <p>Categoria: Barbearia</p>
                <p>Duração: 1h30min</p>
                <p>Preço: R$ 80,00</p>
                <p>Corte de cabelo + barba (toalha quente e navalha) + pigmentação</p>
                <a href="#" class="btn-reservar">RESERVAR</a>
            </div>
            <div class="card">
                <h3>Cabelo + Barba</h3>
                <p>Categoria: Barbearia</p>
                <p>Duração: 1h</p>
                <p>Preço: R$ 60,00</p>
                <p>Corte de cabelo + barba navalha/máquina</p>
                <a href="#" class="btn-reservar">RESERVAR</a>
            </div>
        </div>
    </div>
</body>
</html>