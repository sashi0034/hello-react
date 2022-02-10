import React from "react";
import SquareButtonField from "./SquareButtonField"

import './App.css';


export default class App extends React.Component 
{

    render() {
        return (
			<div className="base-document">
				<div className="sideBar">
					<div className="menu-top">16進数謎電卓</div>
					<SideMenu/>
					<SideMenu/>
					
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
		let classLink="menu-link";
		return (
			<div className="menu-tag">
				<a href="#hex2dec" className={classLink}># Hex to Decminal</a><br/>
			</div>
		);
	}
}















