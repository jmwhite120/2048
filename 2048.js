var board = [[0,0,0,0],[0,0,2,0],[0,0,4,0],[0,0,0,2]];
var boardSize = 4;
function renderBoard(){
   for(var i = 0; i < boardSize; i++){
           for(var j = 0; j < boardSize; j++){
                   var boardID = "r"+i+"c"+j;
                   if(board[i][j]!=0){
                           document.getElementById(boardID).innerHTML = board[i][j];
}
                   else{
                            document.getElementById(boardID).innerHTML = "";
                   }
           }
   }
}

function randomTile(){
  var a =  Math.round(Math.random(4));
  var b =  Math.round(Math.random(4));
while(board[a][b]!=0){
  //gen random postions
  var a =  Math.round(Math.random(4));
  console.log(a);//track 4 me
  var b =  Math.round(Math.random(4));
}
board[a][b] = 2;
}




function arrowPress(e) {
  if (e.keyCode == '38') { // up arrow
      for(var i = 1; i<=3; i++){
      for(var j = 0; j <= 3; j++){
        console.log("nfeiwo")
        if(board[i-1][j] == 0){
            board[i-1][j] = board[i][j];
            board[i][j]= 0;
         }
        if(board[i-1][j] == 0){
            board[i-1][j] = board[i][j] * 2;
            board[i][j]= 0;
         }
            /*if(board[2][j] == 0){ 
            board[2][j] = board[1][j];
            board[1][j] = 0
            }
              if(board[1][j] == 0){ 
            board[1][j] = board[0][j];
            board[0][j] = 0
           } 
          if(board[3][j] == 0){ 
          board[3][j] = board[2][j];
          board[2][j] = 0
           }*/
              
    }
     } //}

    if (e.keyCode == '40') {
        // down arrow
    }
    if (e.keyCode == '37') {
       // left arrow
    }
    if (e.keyCode == '39') {
       // right arrow
    }
     //randomTile();
     renderBoard();  

}







