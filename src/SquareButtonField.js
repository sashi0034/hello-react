import React from "react";

export default class SquareButtonField extends React.Component 
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
			ret.push(<button className="square-button" onClick={() => console.log(str)}>{str}</button>);
		}
		return(ret);
	}



}







