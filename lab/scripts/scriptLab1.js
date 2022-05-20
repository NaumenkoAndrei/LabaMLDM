var mass_1, mass_2;
var error_text;

/**
 * Определение колтчества вхождений элемента
 */
function countElement(mass, element) {
  let count = 0;
  for(let i = 0; i < mass.length; i++)
    if(mass[i] == element)
      count++;
  return count;
}

/**
 * Функция определения корректности ввода
 */
function validate(str) {
  let mass = false;
  mass = str.split(" ");

  if (str.length > 0) {
    //Убрать повторяющиеся элементы
    for(let i = 0; i < mass.length; i++)
      if(countElement(mass, mass[i]) > 1) {
        mass.splice(i, 1);
        i--;
      }

    //проверка на ввод в первом символе буква
    for(let i = 0; i < mass.length; i++)
      if(mass[i][0]<'a' || mass[i][0]>'z') {
        error_text = "Ошибка при вводе массива " + str + "\nВ элементе " + mass[i];
        error_text += "\nДолжна быть введена буква";
        error_text += "\nИсправьте 1 элемент (" + mass[i][0] + ")";
        mass = false;
        alert(error_text);
        break;
      }

    //проверка на ввол во втором символе нечетной цифры
    for(let i = 0; i < mass.length; i++)
      if(mass[i][1]%2==0) {
        error_text = "Ошибка при вводе массива " + str + "\nВ элементе " + mass[i];
        error_text += "\nДолжна быть введена нечетная цифра";
        error_text += "\nИсправьте 2 элемент (" + mass[i][1] + ")";
        mass = false;
        alert(error_text);
        break;
      }

    //проверка на ввод в третьем символе буквы
    for(let i = 0; i < mass.length; i++)
      if(mass[i][2]<'a' || mass[1][2]>'z') {
        error_text = "Ошибка при вводе массива " + str + "\nВ элементе " + mass[i];
        error_text += "\nДолжна быть введена буква";
        error_text += "\nИсправьте 3 элемент (" + mass[i][2] + ")";
        mass = false;
        alert(error_text);
        break;
      }

    //проверка на ввод в четвертом символе четной цифры
    for(let i = 0; i < mass.length; i++)
      if(mass[i][3] %2 != 0 ) {
        error_text = "Ошибка при вводе массива " + str + "\nВ элементе " + mass[i];
        error_text += "\nДолжна быть введена четная цифра";
        error_text += "\nИсправьте 4 элемент (" + mass[i][3] + ")";
        mass = false;
        alert(error_text);
        break;
      }
  }

  /*else {
    error_text = 'Массив не должен быть пустым';
    alert(error_text);
  }*/
  return mass;
}

/**
 * Объединение
 */
function unification(m1, m2) {
  let result = "";
  result = m1.join(', ');

  for(let i = 0; i < m2.length; i++)
    if(m2.indexOf(m2[i]) != -1){
      if (result == "")
        result += m2[i];
      else
        result += ', ' + m2[i];
    }
  return result;
}

/**
 * Пересечение
 */
function intersection(m1, m2) {
  let result = "";

  for (let i = 0; i < m2.length; i++)
    for (let j = 0; j < m1.length; j++)
      if (m1[j] == m2[i]){
        if (result == "")
          result += m1[j];
        else
          result += ', ' + m1[j];
      }
  return result;
}
//h1j4 k1j8 g5u8 p9m2
//n1b4 v5p8 h1j4
/**
 * Дополнение A/B, B/A
 */
function addition(m1, m2){
  let result = "";

  for(let i = 0; i < m1.length; i++)
    if(m2.indexOf(m1[i]) == -1) {
      if (result == "")
        result += m1[i];
      else
        result += ', ' + m1[i];
    }
  return result;
}

/**
 * Симметрическая разность
 *
 */
function symmetricDifference(m1, m2){
  let result = "";
  result = addition(m1, m2) + ", " + addition(m2, m1);
  return result;
}

/**
 * Основная функция для считывания данных и вызова второстепенных функций
 */
function rasschet() {
  let result_full = "";
  var a = document.getElementById('mass1');
  var b = document.getElementById('mass2');

  mass_1 = validate(a.value)
  mass_2 = validate(b.value)

  result_full = "Объединение: " + unification(mass_1, mass_2) + "\n";
  result_full += "Пересечение: " + intersection(mass_1, mass_2) + "\n";
  result_full += "Дополнение A/B: " + addition(mass_1, mass_2) + "\n";
  result_full += "Дополнение B/A: " + addition(mass_2, mass_1) + "\n";
  result_full += "Симметрическая разность: " + symmetricDifference(mass_1, mass_2) + "\n";

  document.getElementById('outResult').innerText = "Результат выполнения операций: \n" + result_full;
}