'use strict';

var TicTacThrone = TicTacThrone || {};

TicTacThrone.Board = [ [0,0,0],
                      [0,0,0],
                      [0,0,0] ];

TicTacThrone.Game = (function() {
  var winner;
  var lannisterScore = 0;
  var starkScore = 0;

  /// Check Winner funcion ////
  var _checkWinner = function () {
    winner = false;
    if (
      // Stark Vertical Win
      ( TicTacThrone.Board[0][0] === "stark" &&
        TicTacThrone.Board[0][1] === "stark" &&
        TicTacThrone.Board[0][2] === "stark") ||

      ( TicTacThrone.Board[1][0] === "stark" &&
        TicTacThrone.Board[1][1] === "stark" &&
        TicTacThrone.Board[1][2] === "stark") ||

      ( TicTacThrone.Board[2][0] === "stark" &&
        TicTacThrone.Board[2][1] === "stark" &&
        TicTacThrone.Board[2][2] === "stark") ||
        // Stark Horizontal win
      ( TicTacThrone.Board[0][0] === "stark" &&
        TicTacThrone.Board[1][0] === "stark" &&
        TicTacThrone.Board[2][0] === "stark") ||

      ( TicTacThrone.Board[0][1] === "stark" &&
        TicTacThrone.Board[1][1] === "stark" &&
        TicTacThrone.Board[2][1] === "stark") ||

      ( TicTacThrone.Board[0][2] === "stark" &&
        TicTacThrone.Board[1][2] === "stark" &&
        TicTacThrone.Board[2][2] === "stark") ||
        // Stark Diagonal win
      ( TicTacThrone.Board[0][0] === "stark" &&
        TicTacThrone.Board[1][1] === "stark" &&
        TicTacThrone.Board[2][2] === "stark") ||

      ( TicTacThrone.Board[0][2] === "stark" &&
        TicTacThrone.Board[1][1] === "stark" &&
        TicTacThrone.Board[2][0] === "stark")) {
          winner = 'houseStark';
    } else if (
      // Lannister Vertical Win
      ( TicTacThrone.Board[0][0] === "lannister" &&
        TicTacThrone.Board[0][1] === "lannister" &&
        TicTacThrone.Board[0][2] === "lannister") ||

      ( TicTacThrone.Board[1][0] === "lannister" &&
        TicTacThrone.Board[1][1] === "lannister" &&
        TicTacThrone.Board[1][2] === "lannister") ||

      ( TicTacThrone.Board[2][0] === "lannister" &&
        TicTacThrone.Board[2][1] === "lannister" &&
        TicTacThrone.Board[2][2] === "lannister") ||
        // Lannister Horizontal win
      ( TicTacThrone.Board[0][0] === "lannister" &&
        TicTacThrone.Board[1][0] === "lannister" &&
        TicTacThrone.Board[2][0] === "lannister") ||

      ( TicTacThrone.Board[0][1] === "lannister" &&
        TicTacThrone.Board[1][1] === "lannister" &&
        TicTacThrone.Board[2][1] === "lannister") ||

      ( TicTacThrone.Board[0][2] === "lannister" &&
        TicTacThrone.Board[1][2] === "lannister" &&
        TicTacThrone.Board[2][2] === "lannister") ||
        // Lannister Diagonal win
      ( TicTacThrone.Board[0][0] === "lannister" &&
        TicTacThrone.Board[1][1] === "lannister" &&
        TicTacThrone.Board[2][2] === "lannister") ||

      ( TicTacThrone.Board[0][2] === "lannister" &&
        TicTacThrone.Board[1][1] === "lannister" &&
        TicTacThrone.Board[2][0] === "lannister")) {
          winner = 'houseLannister';
    }
    return winner;
  };

  ////// Score Counting function ///////
  var _scoreCounter = function (victor) {
    if (victor === 'houseLannister') {
      lannisterScore++;
      $('#lannister-wincount').html('<span>' + lannisterScore + '</span>');
    } else if (victor === 'houseStark') {
      starkScore++;
      $('#stark-wincount').html(('<span>' + starkScore+ '</span>'));
    }
  };

  //// Clear board function /////
  var _clearBoard = function () {
      $('td').removeClass('house-stark');
      $('td').removeClass('house-lannister');
      $('td').removeClass('clicked');
      $('td').addClass('hover');
      TicTacThrone.Board = [[0,0,0],
                            [0,0,0],
                            [0,0,0]];
  };

  ////// Reset Score function ///////
  var _resetScore = function () {
    lannisterScore = 0;
    starkScore = 0;
    $('#lannister-wincount').html('<span>' + lannisterScore+ '</span>');
    $('#stark-wincount').html(('<span>' + starkScore+ '</span>'));
  };


  return {
    checkWinner : _checkWinner,
    clearBoard : _clearBoard,
    scoreCounter : _scoreCounter,
    resetScore : _resetScore,
  };


}) ();






