import { useEffect, useState } from 'react'
import './App.css'
import BoardComponent from './components/BoardComponent'
import { Board } from './components/models/Board';
import { Player } from './components/models/Player';
import { Colors } from './components/models/Colors';
import LostFigures from './components/LostFigures';

function App() {

  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, [])

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard);
    newBoard.addFigures();
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  return (
    <div className='App'>
      <BoardComponent 
      board={board}
      setBoard={setBoard}
      currentPlayer={currentPlayer}
      swapPlayer={swapPlayer}
      />
      <div>
        <LostFigures title={"Черные фигуры"} figures={board.lostBlackFigures} />
        <LostFigures title={"Белые фигуры"} figures={board.lostWhiteFigures} />
      </div>
    </div>
  )
}

export default App
