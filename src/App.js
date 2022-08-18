import './App.css'
import React, { useState } from 'react'
import Tiktactoe from './components/Tiktactoe'
import Scoreboard from './components/Scoreboard'

function App() {

	const [turn, setTurn] = useState('X')
	const [squares, setsquares] = useState(Array(9).fill(''))
	const [winner, setWinner] = useState()
	const [scoreX, setScoreX] = useState(0)
	const [score0, setScore0] = useState(0)

	const handleWin = (squaresBuffer) => {
		let winningCombos = [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
				[0, 4, 8],
				[2, 4, 6]
		]
		
		for (let combo of winningCombos) {
			if (
				squaresBuffer[combo[0]] === '' ||
				squaresBuffer[combo[1]] === '' ||
				squaresBuffer[combo[2]] === ''
			) {
			} else if (
				squaresBuffer[combo[0]] === squaresBuffer[combo[1]]
				&&
				squaresBuffer[combo[1]] === squaresBuffer[combo[2]]
			) {
				setWinner(squaresBuffer[combo[0]])
			}
		}
	}

	const handleClick = (i) => {
		if (squares[i] || winner) {
			return
		}
		let squaresBuffer = [...squares]
		if (turn === 'X') {
			squaresBuffer[i] = 'X'
			setTurn('0')
		} else if (turn === '0') {
			squaresBuffer[i] = '0'
			setTurn('X')
		}
		handleWin(squaresBuffer)
		setsquares(squaresBuffer)
	}

	const handleScore = (winner) => {
		if (winner === 'X') {
			let score = scoreX + 1
			setScoreX(score)
		} else if (winner === '0') {
			let score = score0 + 1
			setScore0(score)
		}
	}

	const handleRestart = () => {
		setWinner(null)
		setsquares(Array(9).fill(''))
		handleScore(winner)
	}

	return (
		<div className="App">
			<Scoreboard scoreX={scoreX} score0={score0} turn={turn} />
			<div className='container'>
				<Tiktactoe squares={squares} handleClick={handleClick} />
				{winner &&
				<>
					<p>Player {winner} wins!</p>
					<p>Try again?</p>
					<button onClick={() => handleRestart()}>Yes, I want revange!</button>
				</>
				}
				{!winner && squares.filter((square) => square === '').length === 0 &&
					<>
						<p>It's a draw!</p>
						<p>Try again?</p>
						<button onClick={() => handleRestart()}>Yes, I must win!</button>
					</>
				}
			</div>
		</div>
	)
}

export default App;
