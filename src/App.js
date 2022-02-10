import React from "react";

import './App.css';


export default class App extends React.Component {
	squareRender()
	{
		return(
			<button className="square">T</button>
		);
	}

    render() {
        return (
			<div>
				<this.squareRender></this.squareRender>
			</div>
		);
    }
  }












