<?php
$host = 'localhost:3307';
$db = 'calculador_peso';
$user = 'root';
$pass = '';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die('Conexión fallida: ' . $conn->connect_error);
}

$nombre = $_POST['nombre'];
$edad = $_POST['edad'];
$altura = $_POST['altura'];
$peso = $_POST['peso'];
$genero = $_POST['genero'];

$imc = $peso / ($altura * $altura);

$altura_cm = $altura * 100; 
if ($genero === 'hombre') {
    $peso_ideal = 50 + 0.91 * ($altura_cm - 152.4);
} else if ($genero === 'mujer') {
    $peso_ideal = 45.5 + 0.91 * ($altura_cm - 152.4);
}

$sql = "INSERT INTO usuarios (nombre, edad, altura, peso, genero, imc, peso_ideal) VALUES (?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param('siddidd', $nombre, $edad, $altura, $peso, $genero, $imc, $peso_ideal);

if ($stmt->execute()) {
    echo 'Datos guardados correctamente.';
} else {
    echo 'Error: ' . $stmt->error;
}

$stmt->close();
$conn->close();
?>
