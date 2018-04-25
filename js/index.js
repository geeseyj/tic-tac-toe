//For the implementation of the game logic and minimax algorithm I leaned heavily on Ahmad Abdolsaheb's article here:
//https://medium.freecodecamp.org/how-to-make-your-tic-tac-toe-game-unbeatable-by-using-the-minimax-algorithm-9d690bad4b37
//Credit for the minimax algorithm should go to him. Thanks!

//The following is Ahmad Abdolsaheb's code :)

function emptyIndexies( board ) {
  return board.filter(s => s != "O" && s != "X");
}

function winning( board, player ) {
  if (
    (board[0] == player && board[1] == player && board[2] == player) ||
    (board[3] == player && board[4] == player && board[5] == player) ||
    (board[6] == player && board[7] == player && board[8] == player) ||
    (board[0] == player && board[3] == player && board[6] == player) ||
    (board[1] == player && board[4] == player && board[7] == player) ||
    (board[2] == player && board[5] == player && board[8] == player) ||
    (board[0] == player && board[4] == player && board[8] == player) ||
    (board[2] == player && board[4] == player && board[6] == player)
  ) {
    return true;
  } else {
    return false;
  }
}

function minimax( newBoard, player ) {
  
  // human
  var huPlayer = "O";
  // ai
  var aiPlayer = "X";

  //available spots
  var availSpots = emptyIndexies(newBoard);

  // checks for the terminal states such as win, lose, and tie and returning a value accordingly
  if (winning(newBoard, huPlayer)) {
    return { score: -10 };
  } else if (winning(newBoard, aiPlayer)) {
    return { score: 10 };
  } else if (availSpots.length === 0) {
    return { score: 0 };
  }

  // an array to collect all the objects
  var moves = [];

  // loop through available spots
  for (var i = 0; i < availSpots.length; i++) {
    //create an object for each and store the index of that spot that was stored as a number in the object's index key
    var move = {};
    move.index = newBoard[availSpots[i]];

    // set the empty spot to the current player
    newBoard[availSpots[i]] = player;

    //if collect the score resulted from calling minimax on the opponent of the current player
    if (player == aiPlayer) {
      var result = minimax(newBoard, huPlayer);
      move.score = result.score;
    } else {
      var result = minimax(newBoard, aiPlayer);
      move.score = result.score;
    }

    //reset the spot to empty
    newBoard[availSpots[i]] = move.index;

    // push the object to the array
    moves.push(move);
  }

  // if it is the computer's turn loop over the moves and choose the move with the highest score
  var bestMove;
  if (player === aiPlayer) {
    var bestScore = -10000;
    for (var i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    // else loop over the moves and choose the move with the lowest score
    var bestScore = 10000;
    for (var i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  // return the chosen move (object) from the array to the higher depth
  return moves[bestMove];
}

//End Ahmad Abdolsaheb's code :) Thanks Ahmad!

var board, players, number_human_players, player_one_sign;

function writeBoard( board ) {
  var writeSpace = function( value, index ) {
    if ( typeof value !== 'number') {
      var selector = "#" + (index + 1);
      $(selector).html(value);
    }
  };

  board.map(writeSpace);
}

function showPlayersSelect() {
  $( '.player-option' ).click( selectPlayers ).addClass( 'show clickable hoverable' );
  $( '#players h3' ).addClass( 'show' );
}

function showSignsSelect() {
  $( '#signs' ).removeClass( 'gone-back' );
  $( '.sign-option' ).click( selectSign );
  $( '.go-back' ).click( goBack );
  $( '.player-option' ).removeClass( 'clickable hoverable' );
  $( '.sign-option, .go-back' ).addClass( 'clickable hoverable' );
  $( '#signs h3, .sign-option, .go-back' ).addClass( 'show' );
}

function hideControls() {

  var displayNoneControls = function(){
    $( '.controls *').removeClass( 'show' );
    $( '.controls' ).hide();
    $( '.board-outer' ).show( 1000, startGame );
    $( '#reset > .button').addClass( 'show' );
  };

  $( '.controls' ).addClass( 'hide' );

  window.setTimeout( displayNoneControls, 800);

}

function selectPlayers(){
  
  this.classList.add( 'active' );
  $( '.player-option' ).off( 'click' ).removeClass( 'clickable hoverable' );
  $( '#players' ).addClass( 'muted' );
  showSignsSelect();
  if ( this.id === "1-player" ) {
    number_human_players = 1;
  } else {
    number_human_players = 2;
  }
}

function selectSign(){
  
  this.classList.add( 'active' );
  $( '.sign-option' ).off( 'click' ).removeClass( 'clickable hoverable' );
  $( '#signs' ).addClass( 'muted' );  
  hideControls();
  player_one_sign = this.id;
  
}

function resetSignsSectionStyles(){
  $( '#signs h3, #signs .button' ).removeClass( 'show' );
  $( '.sign-option, .go-back' ).removeClass( 'clickable hoverable' );

}

function goBack(){
  $( '#signs' ).addClass( 'gone-back' );
  $( '.player-option.active' ).removeClass( 'active' );
  $( '.player-option' ).addClass( 'clickable hoverable' ); 
  $( '.player-option' ).click( selectPlayers );
  $( '#players' ).removeClass( 'muted' );
  resetSignsSectionStyles();
}

function startGame(){
  var first_move_player_key = Math.round( Math.random() ) === 0 ? 'player1' : 'player2';
  startTurn( first_move_player_key );
}

function startTurn( player_key ){
  var player = players[ player_key ];
  if ( player.type === "human" ) {
    startUserTurn( player );
  } else {
    delayComputerTurn( player );
  }
}

function userSelectSpace( event ){
  var player = event.data;
  var id = this.id;
  board[ id ] = player.sign;
  this.textContent = player.sign;
  endUserTurn( player );
}

function indicateTurn( player ) {
  var id_selector = player.own_key;
  $( '.player' ).removeClass( 'turn' );
  $( '#' + id_selector ).addClass( 'turn' );
}

function delayComputerTurn( player ) {
  indicateTurn( player );
  window.setTimeout( computerTurn, 2000, player );
}

function computerTurn( player ) {
  var computer_move = minimax( board, player.sign );
  //console.log( computer_move );
  $( '#' + computer_move.index ).text( player.sign );
  board[ computer_move.index ] = player.sign;
  
  if ( winning( board, player.sign ) ){
    gameWon( player );
  } else if ( emptyIndexies( board ).length === 0 ) {
    gameDraw();
  } else {
    startTurn( player.opponent_key );
  }
}

function updateScoreboard(){
  $( '#player1 > .score' ).text( players.player1.wins );
  $( '#player2 > .score' ).text( players.player2.wins );
}

function showGameWon( player ) {
 //to be continued...
}

function gameWon( player ) {
  showGameWon( player );
  player.wins += 1;
  updateScoreboard();
  resetBoard();
  startGame();
}

function gameDraw() {
  resetBoard();
  startGame();
}

function endUserTurn( player ) {
  $( '.space' ).off( 'click' );
  
  if ( winning( board, player.sign ) ){
    gameWon( player );
  } else if ( emptyIndexies( board ).length === 0 ) {
    gameDraw();
  } else {
    startTurn( player.opponent_key );
  }
}

function startUserTurn( player ){
  indicateTurn( player );
  var available_spaces_selector = '#' + emptyIndexies( board ).join(", #");
  $( available_spaces_selector ).click( player, userSelectSpace );
}

function resetBoard() {
  $( '.space' ).empty();
  board = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ];
}

function resetGameVariables() {
  resetBoard();
  players = {
    'player1' : {
        'type' : 'human',
        'sign' : "X",
        'wins' : 0,
        'opponent_key' : 'player2',
        'own_key' : 'player1'
      }, 
    'player2' : {
        'type' : 'computer',
        'sign' : "O",
        'wins' : 0,
        'opponent_key' : 'player1',
        'own_key' : 'player2'
      }
  };
}

$( document ).ready( function() {
  resetGameVariables();
  showPlayersSelect();
});