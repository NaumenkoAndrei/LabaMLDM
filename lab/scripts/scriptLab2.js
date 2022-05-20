var error_text = "";

/**
 *  Проверка размерности матрицы и введенных в ней элементов на 0 и 1
 */
function check(arr){
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++)
      for (let j = 0; j < arr.length; j++) {
        if (arr[i].length != arr.length)
          error_text = "Матрица должна быть квадратной";
        if (arr[i][j] > 1 || arr[i][j] < 0)
          error_text = "Матрица может состоять только из 0 и 1";
      }
  }
  else
    error_text = "Массив не должен быть пустым!";
  return error_text;
}

/**
 * Рефлексивность
 */
function reflexivity(arr){
  let result = "рефлексивная";

  for (let i = 0; i < arr.length; i++)
    if (arr[i][i] != 1) {
      result = " не рефлексивная ";
      break;
    }
  return result;
}

/**
 * Cимметричность
 */
function symmetry(arr){
  let result = "симметричная";

  for (let i = 0; i < arr.length; i++)
    for (let j = 0; j < arr.length; j++)
      if (arr[i][j] != arr[j][i]){
        result = "не симметричная";
        break;
      }

  return result;
}

/**
 * Кососимметричность
 */
function skewSymmetry(arr){
  let result = "не кососимметричная";

  for (let i = 0; i < arr.length; i++)
    for (let j = 0; j < arr.length; j++)
      if (arr[i][j] != arr[j][i]){
        result = "кососимметричная";
        break;
      }

  return result;
}

/**
 * Транзитивность
 */
function transitivity(arr){
  let a = 0, b = 0;
  let arr2 = [];
  let result = "транзитивна";
  for (let i = 0; i < arr.length; i++) {
    arr2[i] = [];
  }
  for(let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        a += arr[i][k] * arr[k][j];
        if (a > 1)
          a = 1;
      }
      arr2[i][j] = a; //заполнение новой матрицы результатом умножения матрицы саму на себя
      a = 0;
    }
  }

  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if (arr2[i][j] <= arr[i][j]){
        b++; //провероверка содержания всех единиц новой матрицы в изначальной
      }
      a++; //подсчет количества эллементов в матрице
    }
  }
  if (b != a){
    result = "не транзитивна"
  }

  return result;
}

function rasschet() {
  let matrix = document.querySelector(".arr").value.split("\n");
  let result = "";

  for(let i = 0; i < matrix.length; i++) {
    matrix[i] = matrix[i].replace(/ +/g, ' ').trim();
    matrix[i] = matrix[i].split(" ");
  }

  if (check(matrix) != ""){
    alert(check(matrix));
  }
  else{
    result = "Рефлексивность: " + reflexivity(matrix) + "\n";
    result +="Симметричность: " + symmetry(matrix) + "\n";
    result +="Кососимметричность: " + skewSymmetry(matrix) + "\n";
    result +="Транзитивность: " + transitivity(matrix) + "\n";
  }
  document.getElementById("outResult").innerText = "Результат операций:\n" + result ;
}