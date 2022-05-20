var error_message;
/**
 * Функция определения корректности ввода
 */
function check(a, b, relation)
{
  for(elem of relation) {
    if(!(a.has(elem[0]) && b.has(elem[1])) || elem.length != 2) {
      error_message = "Пары множеств должны быть вида Ai, Bi ... )";
    }
  }
  if (a.size <= 1) {
    error_message = "Необходимо минимум 2 пары элемннтов в множестве A\n";
  }
  else if (b.size <= 1) {
    error_message = "Необходимо минимум 2 пары элемннтов в множестве B\n";
  }
  else if (relation.length <= 1) {
    error_message = "Необходимо минимум дву пары элементов в отношении";
  }
  if(error_message) {
    return false;
  }else {
    return true;
  }
}
/**
 * Создание 2d массива
 */
function converting ( str )
{
  var mass = str.split(" ");
  for (let i = 0; i < mass.length; i++) {
    if (mass[i] == "") {
      mass.splice(i, 1);
    }
  }
  return mass;
}
/**
 * Функция рассчета
 */
function rasschet() {

  var a = document.getElementById('mass1');
  var b = document.getElementById('mass2');
  var relation = document.getElementById('mass');
  a = converting(a.value);
  b = converting(b.value);
  const setA = new Set(a);
  const setB = new Set(b);
  relation = converting(relation.value);
  let full_result = "";
  if (check(setA, setB, relation) == false) {
  }
  else {
    var matrix = [];
    var flagA = true;
    var flagB = true;
    for (let i = 0; i < a.length; i++) {
      matrix[i] = [];
      for (let j = 0; j < b.length; j++) {
        matrix[i][j] = 0;
      }
    }
    var del = relation.slice();
    for (let i = 0; i < relation.length; i++) {
      for (let j = 0; j < relation.length; j++) {
        if (relation[i][0] == a[j]) {
          relation[i] = 0;
          relation[i] += j;
          break;
        }
      }
      for (let j = 0; j < relation.length; j++) {
        if (del[i][1] == b[j]) {
          relation[i] += '' + j;
          break;
        }
      }
    }
    for (let i = 0; i < relation.length; i++) {
      matrix[relation[i][0]][relation[i][1]] = 1;
    }
    let outmatrix = "";
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        outmatrix += matrix[i][j] + ' ';
      }
      outmatrix += '\n';
    }
    document.getElementById('Matrix').innerText = "Матрица данного отношения:\n" + outmatrix +
      "Строки - А, Столбцы - В";
    let countrow = 0;
    let countheight = 0;
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        countrow += matrix[i][j];
      }
      if (countrow >= 2) {
        flagA = false;
        break;
      } else if (countrow == 0) {
        flagA = false;
        break;
      } else {
        countrow = 0;
      }
    }
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        countheight += matrix[j][i];
      }
      if (countheight >= 2) {
        flagB = false;
        break;
      } else if (countheight == 0) {
        flagB = false;
        break;
      }
      else {
        countheight = 0;
      }
    }
    if (flagA) {
      full_result += "Отношение является функцией А в B\n";
    }else {
      full_result += "Отношение не является функцией А в B\n";
    }
    if (flagB) {
      full_result += "Отношение является функцией B в A";
    }else {
      full_result += "Отношение не является функцией B в A";
    }
    document.getElementById('outResult').innerText = "\n" + full_result;
  }
}