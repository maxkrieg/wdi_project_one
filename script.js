
// winCount
// moveCount
// player1 X goes first
// player2 O goes second

// .data
// .attr
// .one click handler
// .text

/// Click event occurs
/// check for winner immediately after every click, even first one
//////// If winner, alert of who won.
//////// Clear the board of all added classes or ids
//////// Add to winCount for that player.  (Use .text jQuery method.)
/// If no winner, add class or id to clicked on cell so long as nothing is in the td(<td> html element) to insert X or O
/// Increment count (because if 9 cells have been clicked on without a winner, it is a tie)

/////// If tie, alert that it is a tie
/////// Clear the board of all added classes or ids

var board = [ [0,0,0],
              [0,0,0],
              [0,0,0] ];




$(document).ready(function(){

  var count=1;

    $('td').click(function(){
        var x = $(this).data("x");
        var y = $(this).data("y");

          // makeMove
          if (!$(this).hasClass('background-red') && !$(this).hasClass('background-green')) {
            if ((count % 2) === 1) {
              $(this).addClass('background-red');
              $(this).removeClass('hover');
              board[x][y]="o";
            } else {
              $(this).addClass('background-green');
              $(this).removeClass('hover');
              board[x][y]="x";
            }
            count++;
          }
          else {
            alert("Already played, choose a different move.");
          }
          checkWinner();
    // Closing for td click method
    });

    $('#reset-button').click(function(){
        resetGame();
      });








    var checkWinner = function () {
      var playerO;
      var playerX;
      var winner=false;

          if (
              ( board[0][0] === "o" &&
                board[0][1] === "o" &&
                board[0][2] === "o") ||

              ( board[1][0] === "o" &&
                board[1][1] === "o" &&
                board[1][2] === "o") ||

              ( board[2][0] === "o" &&
                board[2][1] === "o" &&
                board[2][2] === "o") ||
                // Horizontal win
              ( board[0][0] === "o" &&
                board[1][0] === "o" &&
                board[2][0] === "o") ||

              ( board[0][1] === "o" &&
                board[1][1] === "o" &&
                board[2][1] === "o") ||

              ( board[0][2] === "o" &&
                board[1][2] === "o" &&
                board[2][2] === "o") ||
                //Diagonal win
              ( board[0][0] === "o" &&
                board[1][1] === "o" &&
                board[2][2] === "o") ||

              ( board[0][2] === "o" &&
                board[1][1] === "o" &&
                board[2][0] === "o")) {
            winner = 'playerO';
            alert('Player O Wins!');
            resetGame();
          } else if (
              ( board[0][0] === "x" &&
                board[0][1] === "x" &&
                board[0][2] === "x") ||

              ( board[1][0] === "x" &&
                board[1][1] === "x" &&
                board[1][2] === "x") ||

              ( board[2][0] === "x" &&
                board[2][1] === "x" &&
                board[2][2] === "x") ||
                // Horizontal win
              ( board[0][0] === "x" &&
                board[1][0] === "x" &&
                board[2][0] === "x") ||

              ( board[0][1] === "x" &&
                board[1][1] === "x" &&
                board[2][1] === "x") ||

              ( board[0][2] === "x" &&
                board[1][2] === "x" &&
                board[2][2] === "x") ||
                //Diagonal win
              ( board[0][0] === "x" &&
                board[1][1] === "x" &&
                board[2][2] === "x") ||

              ( board[0][2] === "x" &&
                board[1][1] === "x" &&
                board[2][0] === "x")) {
            winner = 'playerX';
            alert('Player X Wins!');
            resetGame();
          } else if (count === 10) {
            winner = 'tie';
            alert('Tie!');
            resetGame();
          }
          return winner;
        };



      var resetGame = function () {
          $('td').removeClass('background-red');
          $('td').removeClass('background-green');
          $('td').addClass('hover');
          count = 1;
          winner = false;
          board = [[0,0,0],
                   [0,0,0],
                    [0,0,0] ];
      };

      var










// Closing for document ready
});


