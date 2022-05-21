<?php
  session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Лабораторная работа 5</title>
</head>
<body>
<h1>Л/р №5</h1>
<form method="post" action="/scripts/scriptLab5.php">
  <textarea name="mass" placeholder="Введите матрицу графа"></textarea><br>
  <input type="submit" value="Рассчитать"><br>
  <a href="/index.php">На главную</a>
  <p>Пример ввода:<br>
    0 1 1<br>
    1 1 1<br>
    0 0 1<br>
  </p>
</form>
<?php
if (isset($_SESSION['error_message']) && !empty($_SESSION['error_message'])) {
  echo '<p> Ошибка: '.$_SESSION['error_message'].'</p>';
}
unset($_SESSION['error_message']);
if (isset($_SESSION['mas']) && !empty($_SESSION['mas'])) {
  echo '<p>'.$_SESSION['mas'].'</p>';
}
unset($_SESSION['mas']);
?>
</body>
</html>