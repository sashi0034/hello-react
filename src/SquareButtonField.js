import React from "react";

export default class SquareButtonField extends React.Component 
{
	constructor()
	{
		super();
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
				{this.renderSquareLine()}
			</div>);
		}
		return(ret);
	}

	renderSquareLine()
	{
		let ret = [];
		for (let i=0; i<4; i++)
		{
			ret.push(<button className="square-button">T</button>);
		}
		return(ret);
	}

	renderSquare()
	{
		return(
			<button className="square-button">T</button>
		);
	}

}
