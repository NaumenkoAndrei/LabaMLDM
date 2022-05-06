<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Лабораторная работа 1</title>
  <link rel="stylesheet" href="/styles/styles.css">
  <script type="text/javascript" src="/scripts/scriptsLab1.js"></script>
</head>
<body>
<h1>Л/р №1</h1>
<form>
  <table>
    <tr>
      <td> Первый массив</td>
      <td> <input type="text" id="mass1" value="" size="100"> </td>
    </tr>
    <tr>
      <td>Второй массив</td>
      <td> <input type="text" id="mass2" value="" size="100"> </td>
    </tr>
    <tr>
      <td colspan="2"> <input type="button" value="Сделать расчет" onclick="rasschet();"> </td>
    </tr>
    <tr>
      <td> <a href="index.php">На главную</a> </td>
    </tr>
  </table>
</form>
<div id="outResult"></div>
</body>
</html>