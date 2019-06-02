// обработчик события oncklick для кнопки result
document.getElementById("result").onclick = function(){
    /*
        получаем значение позиции из поля формы
        используем только первый и второй символ
        первый символ буква, ее код преобразуе в число
        так как код буквы "A" = 65, то в программе используем значение 64, 
        чтобы из кода символа получить число.
    */
    var position = document.getElementById("position").value;

    var x = position.charCodeAt(0) - 64;
    var y = parseInt(position[1]);
    var result = "";
    // проверка что значения координат фигуры не выходят за размеры поля
    if ( x > 0 && x < 9 && y > 0 && y < 9){
        //проверка возможных положений фигуры и формирование строки для вывода
        if (y-2 >= 1){
            if (x + 1 <= 8)
                result += String.fromCharCode(x + 64 + 1) + (y-2).toString();
            if (x - 1 >= 1)
                result +=  " " + String.fromCharCode(x + 64 - 1) + (y-2).toString();    
            
        }
        if (y-1 >= 1){
            if (x + 2 <= 8){
                result +=  " " + String.fromCharCode(x + 64 + 2) + (y-1).toString();
            }

            if (x - 2 >= 1){
                result +=  " " + String.fromCharCode(x + 64 - 2) + (y-1).toString();
            }
        }    

        if (y+2 <= 8){
            if (x + 1 <= 8)
                result += " " + String.fromCharCode(x + 64 + 1) + (y+2).toString();
            if (x - 1 >= 1)
                result +=  " " + String.fromCharCode(x + 64 - 1) + (y+2).toString();    
        }
    
        if(y+1 <= 8){
            if (x + 2 <= 8){
                result +=  " " + String.fromCharCode(x + 64 + 2) + (y+1).toString();
            }
            if (x - 2 >= 1){
                result +=  " " + String.fromCharCode(x + 64 - 2) + (y+1).toString();
            }
        }
        alert(result);
    }  
}