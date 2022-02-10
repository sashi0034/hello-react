import React from "react";

interface ISquareButtonFieldProps
{
	inputNumberStr: string;
	onClick: (str: string) => void;
}
interface ISquareButtonFieldState
{
	
}

export default class SquareButtonField extends React.Component<ISquareButtonFieldProps, ISquareButtonFieldState>
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return this.renderSquareMatrix();
	}

	renderSquareMatrix()
	{
		let ret = [];
		for (let i=0; i<4; i++)
		{
			ret.push(
			<div>
				{this.renderSquareLine(i)}
			</div>);
		}
		return(ret);
	}

	renderSquareLine(row)
	{
		let ret = [];
		for (let i=0; i<4; i++)
		{
			let num = row * 4 + i;
			let str = num.toString(16).toUpperCase();
			ret.push(
				<button 
					className="square-button" 
					onClick={() => 
						this.props.onClick(this.props.inputNumberStr + str)
					}>
					{str}
				</button>);
		}
		return(ret);
	}



}







