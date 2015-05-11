
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

var playerXScore = 0;
var playerOScore = 0;



$(document).ready(function(){

  var count=1;

    ////// Click function for gameboard ///////
    $('td').click(function(){
        var x = $(this).data("x");
        var y = $(this).data("y");

          // Making moves and adding styles to pieces
          if (!$(this).hasClass('house-stark') && !$(this).hasClass('house-lannister')) {
            if ((count % 2) === 1) {
              $(this).addClass('house-stark');
              $(this).removeClass('hover');
              board[x][y]="o";
            } else {
              $(this).addClass('house-lannister');
              $(this).removeClass('hover');
              board[x][y]="x";
            }
            count++;
          }
          else {
            alert("Already played, choose a different move.");
          }


          // Checking for winner
          var victor = checkWinner();

          //
          if (victor === 'playerX') {
              scoreCounter('playerX');
              $('#x-wincount').html('<span>' + playerXScore+ '</span>');
              alert('House Lannister Wins!');
              clearBoard();
          } else if (victor === 'playerO') {
              scoreCounter('playerO');
              $('#o-wincount').html(('<span>' + playerOScore+ '</span>'));
              alert('House Stark Wins!');
              clearBoard();
          } else if (victor === 'tie') {
              scoreCounter('tie');
              alert('Tie!');
              clearBoard();
          }

    // Closing for td click method
    });


    ////// Clear board click function ////////
    $('#clear-board').click(function(){
        clearBoard();
      });

    ////// Reset Score click function ////////
    $('#reset-score').click(function(){
        resetScore();
      });







    /// Check Winner funcion ////
    var checkWinner = function () {
      var playerO;
      var playerX;
      var winner=true;

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
          } else if (count === 10) {
            winner = 'tie';
          }
          return winner;
        };


      ////// Score Counting function ///////
       var scoreCounter = function (victor) {
          var lastWon = false;
            if (victor === 'playerX') {
              lastWon = 'playerX';
              playerXScore++;
            } else if (victor === 'playerO') {
              lastWon = 'playerO';
              playerOScore++;
            } else if (victor === 'tie') {
              lastWon='tie';
            }
            return lastWon;
          };

        //// Clear board function /////
        var clearBoard = function () {
            $('td').removeClass('house-stark');
            $('td').removeClass('house-lannister');
            $('td').addClass('hover');
            count = 1;
            winner = true;
            board = [ [0,0,0],
                      [0,0,0],
                      [0,0,0] ];
        };

        ////// Reset Score function ///////
        var resetScore = function () {
          playerXScore = 0;
          playerOScore = 0;
          $('#x-wincount').html('<span>' + playerXScore+ '</span>');
          $('#o-wincount').html(('<span>' + playerOScore+ '</span>'));
        }















// Closing for document ready
});


