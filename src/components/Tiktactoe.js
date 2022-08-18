const Tiktactoe = ({ squares, handleClick }) => {
	const Square = ({idx}) => {
		return (
			<div className='square' onClick={() => handleClick(idx)}>
				{squares[idx]}
			</div>
		)
	}
	return (
		<div className='table'>
			<div className='row'>
				<Square idx={0}/>
				<Square idx={1}/>
				<Square idx={2}/>
			</div>
			<div className='row'>
				<Square idx={3}/>
				<Square idx={4}/>
				<Square idx={5}/>
			</div>
			<div className='row'>
				<Square idx={6}/>
				<Square idx={7}/>
				<Square idx={8}/>
			</div>
		</div>
	)
}

export default Tiktactoe