"use client"
import { useState } from 'react';

function Square({value, onSquareClick}) {
  // return <button className="square">{value}</button>;
    return (
      <button
        className="square"
        onClick={onSquareClick}
      >
        {value}
      </button>
    )
}

function Board({ xIsNext, squares, onPlay }) {


  function handleClick(i) {
    console.log('squares===============',squares);
    if (squares[i] || calculateWinner(squares)) {
      console.log('stop.........................................');
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
    // alert(status);
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}  />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}  />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}  />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}  />
      </div>
    </>
  );
}


// #################################################### page
export default function Game() {
  // debugger
  console.log('000 Game★★★★★==')
  console.log('000 Game★★★★★==')
  console.log('000 Game★★★★★==')
  console.log('000 Game★★★★★==')


  // const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;

  console.log('Game★★★★★================ Array(9).fill(null)===============',Array(9).fill(null));
  console.log('Game★★★★★================ history.length===============',history.length);
  console.log('Game★★★★★================ history===============',history);
  const currentSquares = history[currentMove];
  console.log('Game★★★★★================ currentSquares===============',currentSquares);
  

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);


    console.log('handlePlay >>> nextSquares===============',nextSquares);
    console.log('handlePlay >>> xIsNext===============',xIsNext);
    console.log('handlePlay >>> history===============',history);
  }


  function jumpTo(nextMove) {
    // TODO
    console.log('jumpTo >>> nextMove===============',nextMove);
    setCurrentMove(nextMove); 
  }

  const moves = history.map((squares, move) => {
    console.log('◆◆◆◆◆◆◆◆◆◆ moves ◆◆◆◆ map >>> ◆◆◆◆ move===============',move);
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });// moves

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}// Game





function calculateWinner(squares) {
  console.log('calculateWinner ================== squares',squares);
  const lines = [// line case 8가지 : 가로선 3개, 세로선 3개, 대각선 2개 : 3+3+2 = 8
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] 
      && squares[a] === squares[b] 
      && squares[a] === squares[c]
      ) {
      console.log('승리한 팀은 =================', squares[a]);
      return squares[a];
    }
  }
  return null;
}
