matriz = new Array;
matriz = 
   //0    1    2    3    4    5    6    7    8    9    10   11   12   13  14   15  
  [['L', 'V', 'C', 'P', 'B', 'U', 'R', 'E', 'E', 'N', 'Y', 'F', 'U', 'M', 'O', 'W'], //0
   ['T', 'D', 'S', 'A', 'D', 'B', 'M', 'G', 'H', 'F', 'L', 'A', 'R', 'F', 'Y', 'J'], //1
   ['M', 'M', 'Z', 'R', 'C', 'K', 'T', 'E', 'M', 'P', 'O', 'N', 'F', 'W', 'U', 'L'], //2
   ['V', 'A', 'A', 'E', 'N', 'T', 'O', 'K', 'A', 'B', 'A', 'K', 'P', 'K', 'N', 'O'], //3
   ['W', 'S', 'V', 'L', 'Q', 'F', 'R', 'U', 'T', 'G', 'L', 'Y', 'F', 'P', 'A', 'M'], //4
   ['X', 'S', 'F', 'A', 'G', 'P', 'R', 'X', 'W', 'T', 'C', 'M', 'O', 'W', 'Y', 'S'], //5
   ['W', 'A', 'T', 'T', 'S', 'H', 'I', 'R', 'Q', 'B', 'G', 'T', 'R', 'R', 'H', 'Y'], //6
   ['F', 'A', 'C', 'I', 'V', 'A', 'C', 'E', 'L', 'E', 'R', 'A', 'C', 'A', 'O', 'F'], //7
   ['A', 'J', 'O', 'V', 'H', 'E', 'E', 'N', 'G', 'P', 'A', 'Z', 'A', 'Q', 'N', 'X'], //8
   ['L', 'H', 'G', 'I', 'F', 'B', 'L', 'U', 'B', 'W', 'V', 'A', 'I', 'V', 'D', 'T'], //9
   ['I', 'M', 'T', 'D', 'N', 'E', 'L', 'C', 'N', 'A', 'I', 'T', 'B', 'U', 'A', 'I'], //10
   ['T', 'B', 'C', 'A', 'J', 'B', 'I', 'Z', 'S', 'U', 'D', 'F', 'C', 'N', 'S', 'Z'], //11
   ['A', 'E', 'K', 'D', 'H', 'T', 'L', 'X', 'C', 'Y', 'A', 'P', 'H', 'D', 'A', 'J'], //12
   ['S', 'Y', 'N', 'E', 'W', 'T', 'O', 'N', 'M', 'S', 'D', 'E', 'S', 'M', 'B', 'U'], //13
   ['G', 'Q', 'I', 'G', 'A', 'F', 'E', 'N', 'J', 'K', 'E', 'O', 'G', 'L', 'K', 'C'], //14
   ['S', 'T', 'L', 'T', 'B', 'M', 'Q', 'Y', 'E', 'W', 'S', 'J', 'R', 'L', 'V', 'D']]; //15


document.write("<p>Este é um caça palavras sobre FÍSICA</p><BR>");
document.write("<center><b>palavras:</b> massa - relatividade - torricelli - força - gravidade - ondas - tempo - watts - newton - aceleração</center>");


document.write("<table>");
for (x = 0; x <= 15; x++) {
    document.write("<tr>");
    for (y = 0; y <= 15; y++ ) {
        if (y == 1 && x > 1 && x < 7 
            || y == 3 && x > 1 && x < 14 
            || y == 6 && x > 1 && x < 12
            || y == 12 && x > 3 && x < 9
            || y == 10 && x > 5 && x < 15
            || y == 14 && x > 6 && x < 12
            || x == 2 && y > 5 && y < 11
            || x == 6 && y >= 0 && y < 5
            || x == 13 && y > 1 && y < 8
            || x == 7 && y > 4 && y < 15 ) {
            document.write("<td id='palavras'>" + matriz[x][y] + "</td>");
        }
        else {
            document.write("<td>" + matriz[x][y] + "</td>");
        }
    }
    document.write("</tr>");
};
document.write("</table>");