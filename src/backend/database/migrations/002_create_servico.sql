CREATE TABLE servico (
  id INT AUTO_INCREMENT PRIMARY KEY,
  categoria_id INT NOT NULL,
  nome VARCHAR(255) NOT NULL,
  descricao TEXT,
  duracao TIME NOT NULL,
  preco DECIMAL(10,2) NOT NULL,
  foto LONGBLOB,
  ativo TINYINT(1) DEFAULT 1,
  FOREIGN KEY (categoria_id) REFERENCES categoria(id)
);