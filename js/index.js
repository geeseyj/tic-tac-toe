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
  var huPlayer = Game.players.player1.sign;
  // ai
  var aiPlayer = Game.players.player2.sign;
  
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

var Game = {
  board: undefined,
  players: undefined,
  
  resetBoard: function() {
    $( '.space' ).empty();
    Game.board = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ];
  },

  resetGameVariables: function() {
    Game.resetBoard();
    Game.players = {
      'player1' : {
        'type' : 'human',
        'sign' : 'X',
        'wins' : 0,
        'opponent_key' : 'player2',
        'own_key' : 'player1',
        }, 
      'player2' : {
        'type' : 'computer',
        'sign' : 'O',
        'wins' : 0,
        'opponent_key' : 'player1',
        'own_key' : 'player2'
      }
    }
  },

  showPlayersSelect: function() {
    $( '.player-option' ).removeClass('active').addClass( 'show clickable hoverable' ).click( function() { Game.selectPlayers( this ); } );
    $( '#players h3' ).addClass( 'show' );
  },

  selectPlayers : function( element ) {
    element.classList.add( 'active' );
    $( '.player-option' ).off( 'click' ).removeClass( 'clickable hoverable' );
    $( '#players' ).addClass( 'muted' );

    Game.showSignsSelect();
    
    if ( element.id === "2-player" ) {
      Game.players.player2.type = 'human';
    }
  },

  showSignsSelect : function() {
    $( '#signs' ).removeClass( 'gone-back muted' );
    $( '.sign-option' ).click( function() { Game.selectSign( this ); } );
    $( '.go-back' ).click( Game.goBack );
    $( '.player-option' ).removeClass( 'clickable hoverable' );
    $( '.sign-option, .go-back' ).removeClass( 'active' ).addClass( 'clickable hoverable' );
    $( '#signs h3, .sign-option, .go-back' ).addClass( 'show' );
  },

  selectSign : function( element ) {
    element.classList.add( 'active' );
    $( '.sign-option' ).off( 'click' ).removeClass( 'clickable hoverable' );
    $( '#signs' ).addClass( 'muted' );  
    
    Game.hideSettings();
    
    if ( element.id === 'O' ){
      Game.players.player1.sign = 'O';
      Game.players.player2.sign = 'X';
    }
  },

  goBack : function() {
    $( '#signs' ).addClass( 'gone-back' );
    $( '.player-option.active' ).removeClass( 'active' );
    $( '.player-option' ).addClass( 'clickable hoverable' ); 
    $( '.player-option' ).click( function() { Game.selectPlayers( this ); } );
    $( '#players' ).removeClass( 'muted' );
  },

  writeBoard : function( board ) {
    var writeSpace = function( value, index ) {
      if ( typeof value !== 'number') {
        var selector = "#" + (index + 1);
        $(selector).html(value);
      }
    };

    board.map( writeSpace );
  },

  hideSettings : function() {
    $( '.settings' ).addClass( 'hide' );
    $( '.board-outer' ).addClass( 'show' );
    $( '#reset > .button' ).addClass( 'show hoverable clickable' ).click( Game.resetAll );
  
    //allow time for the transition
    window.setTimeout( Game.startGame, 800);  
  },

  startGame : function() {
    var first_move_player_key = Math.round( Math.random() ) === 0 ? 'player1' : 'player2';
    Game.startTurn( first_move_player_key );
  },
  
  startTurn : function( player_key ) {
    var player = Game.players[ player_key ];
    if ( player.type === "human" ) {
      Game.startUserTurn( player );
    } else {
      Game.delayComputerTurn( player );
    }
  },
  
  userSelectSpace : function( player, element ) {
    Game.board[ element.id ] = player.sign;
    element.textContent = player.sign;
    Game.endUserTurn( player );
  },
  
  startUserTurn : function( player ) {
    Game.indicateTurn( player );
    var available_spaces_selector = '#' + emptyIndexies( Game.board ).join(", #");
    $( available_spaces_selector ).click( function() { Game.userSelectSpace( player, this); } );
  },
  
  endUserTurn : function( player ) {
    $( '.space' ).off( 'click' );
    
    if ( winning( Game.board, player.sign ) ){
      Game.gameEnd( player );
    } else if ( emptyIndexies( Game.board ).length === 0 ) {
      Game.gameEnd();
    } else {
      Game.startTurn( player.opponent_key );
    }
  },

  indicateTurn : function( player ) {
    var id_selector = player.own_key;
    $( '.player' ).removeClass( 'turn' );
    $( '#' + id_selector ).addClass( 'turn' );
  },

  delayComputerTurn : function( player ) {
    Game.indicateTurn( player );
    window.setTimeout( Game.computerTurn, 300, player );
  },

  computerTurn : function( player ) {
    var computer_move = minimax( Game.board, player.sign );
    $( '#' + computer_move.index ).text( player.sign );
    Game.board[ computer_move.index ] = player.sign;
    
    if ( winning( Game.board, player.sign ) ){
      Game.gameEnd( player );
    } else if ( emptyIndexies( Game.board ).length === 0 ) {
      Game.gameEnd();
    } else {
      Game.startTurn( player.opponent_key );
    }
  },

  updateScoreboard : function() {
    $( '#player1 > .score' ).text( Game.players.player1.wins + ' Win' + (Game.players.player1.wins !== 1 ? 's' : '') );
    $( '#player2 > .score' ).text( Game.players.player2.wins + ' Win' + (Game.players.player2.wins !== 1 ? 's' : '') );
  },

  gameEnd : function( winner = 'none' ) {

    Game.showGameEndMessage( winner );
    
    if ( winner !== 'none' ) {
      winner.wins += 1;
      Game.updateScoreboard();
    }
  },

  showGameEndMessage : function( winner = 'none' ) {
    var game_end_message;
    
    if ( winner === 'none' ) {
      game_end_message = "It's a Draw!";
    } else if ( winner.type === 'computer' ) {
      game_end_message = "The Computer Won!";
    } else {
      game_end_message = Game.getPlayerDisplayableName( winner ) + ' Won!';
    }

    $( '.game-message .message' ).html( game_end_message );
    $( '.game-message' ).addClass( 'show' );
    $( '.space' ).off( 'click' );
    $( '.game-message .button' ).addClass( 'hoverable clickable' )
    $( '.game-message .play-again' ).click( Game.playAgain );
    $( '.game-message .reset-all' ).click( Game.resetAll );
  },

  playAgain : function() {
    $( '.game-message' ).removeClass( 'show' );
    Game.resetBoard();
    Game.startGame();
  },
  
  resetAll : function() {
    Game.resetGameVariables();
    $( '.game-message' ).removeClass( 'show' );
    $( '.board-outer' ).removeClass( 'show' );
    $( '#reset > .button' ).removeClass( 'show hoverable clickable' ).off( 'click' );
    $( '.settings' ).removeClass( 'hide' );
    $( '.settings *' ).removeClass( 'active muted clickable hoverable show' );
    window.setTimeout( Game.showPlayersSelect, 500 );
  },

  firstLoad : function() {
    Game.resetGameVariables();
    Game.showPlayersSelect();
  },

  getPlayerDisplayableName : function( player ) {
    var name = player.own_key;
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
};

$( document ).ready( function() {
  Game.firstLoad();
});