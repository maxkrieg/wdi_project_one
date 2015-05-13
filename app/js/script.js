
var board = [ [0,0,0],
              [0,0,0],
              [0,0,0] ];
var lannisterScore = 0;
var starkScore = 0;
var count=1;

$(document).ready(function(){

    ////// Click function for gameboard ///////
    $('td').click(function(){

        var x = $(this).data("x");
        var y = $(this).data("y");

          // Making moves and adding styles to pieces
          if (!$(this).hasClass('clicked')) {
            if ((count % 2) === 1) {
                $(this).addClass('clicked');
                $(this).addClass('house-stark');
                  board[x][y]="stark";
            } else {
                $(this).addClass('clicked');
                $(this).addClass('house-lannister');
                  board[x][y]="lannister";
            }
            count++;
          }
          else {
            alert("Already played, choose a different move.");
          }

        checkNewGame();

    // Closing for td click method
    });

    ////// Clear board click function ////////
    $('#clear-board').click(function(){
        clearBoard();
      });

    ////// Reset Score click function ////////
    $('#reset-score').click(function(){
        resetScore();
        clearBoard();
      });

// Closing for document ready
});


// Encapsulated functions //

    var checkNewGame = function () {
          // Checking for winner
          var victor = checkWinner();

          // Increment score
          if (victor === 'houseLannister') {
              scoreCounter('houseLannister');
              alert('House Lannister Wins!');
              $('#lannister-wincount').html('<span>' + lannisterScore + '</span>');
              clearBoard();
          } else if (victor === 'houseStark') {
              scoreCounter('houseStark');
              alert('House Stark Wins!');
              $('#stark-wincount').html(('<span>' + starkScore+ '</span>'));
              clearBoard();
          } else if (victor === 'tie') {
              scoreCounter('tie');
              alert('Tie!');
              clearBoard();
          }
        }


    /// Check Winner funcion ////
    var checkWinner = function () {
      var winner=true;

          if (
              ( board[0][0] === "stark" &&
                board[0][1] === "stark" &&
                board[0][2] === "stark") ||

              ( board[1][0] === "stark" &&
                board[1][1] === "stark" &&
                board[1][2] === "stark") ||

              ( board[2][0] === "stark" &&
                board[2][1] === "stark" &&
                board[2][2] === "stark") ||
                // Horizontal win
              ( board[0][0] === "stark" &&
                board[1][0] === "stark" &&
                board[2][0] === "stark") ||

              ( board[0][1] === "stark" &&
                board[1][1] === "stark" &&
                board[2][1] === "stark") ||

              ( board[0][2] === "stark" &&
                board[1][2] === "stark" &&
                board[2][2] === "stark") ||
                //Diagonal win
              ( board[0][0] === "stark" &&
                board[1][1] === "stark" &&
                board[2][2] === "stark") ||

              ( board[0][2] === "stark" &&
                board[1][1] === "stark" &&
                board[2][0] === "stark")) {
            winner = 'houseStark';
          } else if (
              ( board[0][0] === "lannister" &&
                board[0][1] === "lannister" &&
                board[0][2] === "lannister") ||

              ( board[1][0] === "lannister" &&
                board[1][1] === "lannister" &&
                board[1][2] === "lannister") ||

              ( board[2][0] === "lannister" &&
                board[2][1] === "lannister" &&
                board[2][2] === "lannister") ||
                // Horizontal win
              ( board[0][0] === "lannister" &&
                board[1][0] === "lannister" &&
                board[2][0] === "lannister") ||

              ( board[0][1] === "lannister" &&
                board[1][1] === "lannister" &&
                board[2][1] === "lannister") ||

              ( board[0][2] === "lannister" &&
                board[1][2] === "lannister" &&
                board[2][2] === "lannister") ||
                //Diagonal win
              ( board[0][0] === "lannister" &&
                board[1][1] === "lannister" &&
                board[2][2] === "lannister") ||

              ( board[0][2] === "lannister" &&
                board[1][1] === "lannister" &&
                board[2][0] === "lannister")) {
            winner = 'houseLannister';
          } else if (count === 10) {
            winner = 'tie';
          }
          return winner;
        };

      ////// Score Counting function ///////
       var scoreCounter = function (victor) {
          var lastWon = false;
            if (victor === 'houseLannister') {
              lastWon = 'houseLannister';
              lannisterScore++;
            } else if (victor === 'houseStark') {
              lastWon = 'houseStark';
              starkScore++;
            } else if (victor === 'tie') {
              lastWon='tie';
            }
            return lastWon;
          };

        //// Clear board function /////
        var clearBoard = function () {
            $('td').removeClass('house-stark');
            $('td').removeClass('house-lannister');
            $('td').removeClass('clicked');
            $('td').addClass('hover');
            count = 1;
            winner = true;
            board = [ [0,0,0],
                      [0,0,0],
                      [0,0,0] ];
        };

        ////// Reset Score function ///////
        var resetScore = function () {
          lannisterScore = 0;
          starkScore = 0;
          $('#lannister-wincount').html('<span>' + lannisterScore+ '</span>');
          $('#stark-wincount').html(('<span>' + starkScore+ '</span>'));
        }








