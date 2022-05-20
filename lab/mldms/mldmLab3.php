<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Лабораторная работа 3</title>
  <script type="text/javascript" src="/scripts/scriptLab3.js"></script>
</head>
<body>
<h1>Л/р №3</h1>
<form>
  <table>
    <tr>
      <td> Множество A </td>
      <td> <input type="text" id="mass1" value="" size="40"/> Привер ввода: a b c d</td>
    </tr>
    <tr>
      <td> Множество B </td>
      <td> <input type="text" id="mass2" value="" size="40"/> Пример ввода: 1 2 3 4</td>
    </tr>
    <tr>
      <td> Отношение</td>
      <td> <input type="text" id="mass" value="" size="40"/> Пример ввода: a1 b2 c3 d4</td>
    </tr>
    <tr>
      <td>
        <input type="button" value="Сделать расчёт"  onclick="rasschet();"/></td>
    </tr>
  </table>
  <a href="/index.php">На главную</a><br>
</form>
<div id ="Matrix"></div>
<div id ="outResult"></div>
</body>
</html>
