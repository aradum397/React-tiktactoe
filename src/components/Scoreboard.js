const Scoreboard = ({ scoreX, score0, turn}) => {
	return (
		<div className='scoreboard'>
			<div className='scoreX'>
				<p>Player X score: {scoreX}</p>
			</div>
			<div className='turn'>
				<p>Turn: {turn}</p>
			</div>
			<div className='score0'>
				<p>Player 0 score: {score0}</p>
			</div>
		</div>
	)
}

export default Scoreboard