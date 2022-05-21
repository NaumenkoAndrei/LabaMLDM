<!DOCTYPE html>
<html lang="en">
<head>
  <title>Лабораторная работа 4</title>

</head>
<body>
<h1>Л/р №4</h1>
<form method="post">
  <textarea name = "matrix" placeholder="Введите матрицу"><?=$_POST['matrix']?></textarea><br>
  Начальная вершина
  <input  type = "text" name = "start"  value = '<?= $_POST[start]?>'><br>
  Конечная вершина
  <input type = "text" name = "end"  value = '<?= $_POST[end]?>'><br>
  <input type="submit" value="Рассчитать">
  <p>
    <a href="/index.php">На главную</a>
    Пример ввода: <br>
    0 20 10 6<br>
    20 0 5 7<br>
    10 5 0 8<br>
    6 7 8 0<br>
    1<br>
    2
  </p>
</form>

<?php

if ($_POST[start] == "" ){
  exit('Введите первую вершину');
}
if ($_POST[end] == ""){
  exit('Введите вторую вершину');
}
$start = $_POST[start] - 1;
$end = $_POST[end] - 1;
$matrix = explode("\r\n", trim($_POST[matrix], " "));
for($i = 0; $i < count($matrix); $i++) {
  $matrix[$i] = explode(" ", $matrix[$i]);
  if (count($matrix) != count($matrix[$i])) {
    exit('Матрица введена неверно');
  }
}
for ($i = 0; $i < count($matrix); $i++) {
  $metka[$i] = 999;
}
$minindex = $start;
$index[0] = $start;
$metka[$minindex] = 0;
while ($minindex != -999) {
  for ($i = 0; $i < count($matrix); $i++) {
    if (!array_search($i, $index) && $matrix[$minindex][$i] != '0') {
      $temp = $metka[$minindex] + $matrix[$minindex][$i];
      if ($metka[$i] > $temp) {
        $metka[$i] = $temp;
      }
    }
  }
  $minindex = -999;
  $minmetka = 999;
  for ($i = 0; $i < count($matrix); $i++)  {
    $bool = true;
    for ($j = 0; $j < count($index); $j++) {
      if ($i == $index[$j]) {
        $bool = false;
      }
    }
    if ($bool) {
      if ($minmetka > $metka[$i]) {
        $minmetka = $metka[$i];
        $minindex = $i;
      }
    }
  }

  if ($minindex >= 0) {
    array_push($index,$minindex);
  }
}
echo('<br> Кратчайший путь: ' . $metka[$_POST[end]-1]);
?>

</body>
</html>