import React from "react";
import SquareButtonField from "./SquareButtonField"

import './App.css';


export default class App extends React.Component 
{

    render() {
        return (
			<div className="base-document">
				<div className="sideBar">
					おはよう<br/>
					こんにちは<br/>
					ばいばい<br/>
					
				</div>

				<div className="button-area">
					<SquareButtonField/>
				</div>
			</div>
			
		);
    }
}

class SideMenu extends React.Component
{
	render()
	{
		return (
			<a href="#hex2dec" ># Hex to Decminal</a>
		);
	}
}















