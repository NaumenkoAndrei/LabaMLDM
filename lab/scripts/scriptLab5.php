<?php
session_start();
if($_POST['mass']!=""){
  $mass = preg_split('/[\n]/', $_POST['mass']);
  $size= count($mass);

  for ($i = 0; $i < $size; $i++) {
    $mass[$i] = trim($mass[$i]);
    $mass[$i] = explode(' ', $mass[$i]);
  }
}

function finderror($mass) {
  $_SESSION['error_message'] = "";
  for ($i = 0; $i < count($mass); $i++) {
    if (count($mass) == 0) {
      $_SESSION['error_message'] = "Матрица не должна быть пустой";
      return false;
    }
    for ($j = 0; $j < count($mass); $j++) {
      if ($i == $j and $mass[$i][$j] != 0) {
        $_SESSION['error_text'] = "На главной диагонали должны быть нули";
        return false;
      }
    }
    for ($i = 0; $i < count($mass); $i++) {
      if (count($mass) != count($mass[$i])) {
        $_SESSION['error_message'] = "Матрица должна быть квадратной";
        return false;
      }
    }
  }
  return true;
}

if(finderror($mass)) {

  $mass1=$mass;

  for($i=0;$i<$size;$i++){
    for($j=0;$j<$size;$j++){
      if($i==$j){
        $mass1[$i][$j]=1;
      }
      else if($mass[$i][$j]!=0){
        $mass1[$i][$j]=1;
      }
    }
  }

  for($k=0;$k<$size;$k++){
    for($i=0;$i<$size;$i++){
      for($j=0;$j<$size;$j++){
        if($mass1[$i][$j]==0){
          if($mass1[$k][$j]==1 && $mass1[$i][$k]==1){
            $mass1[$i][$j]=1;
          }
        }
      }
    }
  }
  $insert="";
  for($i=0;$i<count($mass1);$i++){
    for($j=0;$j<count($mass1[$i]);$j++){
      $insert=$insert.$mass1[$i][$j].' ';
    }
    $insert=$insert.'<br>';
  }
  $insert1="";
  for($i=0;$i<count($mass);$i++){
    for($j=0;$j<count($mass[$i]);$j++){
      $insert1=$insert1.$mass[$i][$j].' ';
    }
    $insert1=$insert1.'<br>';
  }
  $_SESSION['mas'] ='Матрица смежности:<br>' .$insert1.'<br>Матрица достижимости:<br>'.$insert;
}

header('Location: ../mldms/mldmLab5.php');

?>