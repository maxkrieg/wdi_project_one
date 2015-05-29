'use strict';

var TicTacThrone = TicTacThrone || {};


var game = TicTacThrone.Game;
var board = TicTacThrone.Board;
var count = 0;

// Document.ready functions //
  $(document).ready(function(){

    var elementFadeIn = (function () {
      $('#tic-tac-toe').hide().show(500);
      $('#reset-buttons').hide().show(1000);
      $('#scoreboard').hide().show(1500);
      $('#gameboard').hide().show(2500);
      $('#chat-wrap').hide().show(2000);
    })();


    $('td').hover(
        function(){
          if (!$(this).hasClass('clicked')) {
            if ((count % 2) === 1) {
              $(this).addClass('house-stark');
            } else {
              $(this).addClass('house-lannister');
            }
          }
        },
        function(){
          if (!$(this).hasClass('clicked')) {
            if ((count % 2) === 1) {
              $(this).removeClass('house-stark');
            } else {
              $(this).removeClass('house-lannister');
            }
          }
        }
    );

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
            }
            else {
              alert("Already played, choose a different move.");
            }
            count++;


          var victor = game.checkWinner();
            if(victor === 'houseStark') {
              alert('House Stark Wins!');
              game.scoreCounter('houseStark');
              game.clearBoard();
              count = 0;
              } else if (victor ==='houseLannister') {
              alert('House Lannister Wins!');
              game.scoreCounter('houseLannister');
              game.clearBoard();
              count = 0;
              } else if (count === 9){
              alert('Tie Game');
              game.clearBoard();
              count = 0;
              }




          // Closing for td click method
      });





      ////// Clear board click function ////////
      $('#clear-board').click(function(){
        game.clearBoard();
      });

      ////// Reset Score click function ////////
      $('#reset-score').click(function(){
          game.resetScore();
          game.clearBoard();
        });
  });
