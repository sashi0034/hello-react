import React from "react";
import SquareButtonField from "./SquareButtonField"
import {SideBar, EMenu, menuProps} from "./SideBar";

import './App.css';




function getMenuProp(text)
{
    return {
        text: text,
    }
}
menuProps[EMenu.HEX_DEC] = getMenuProp("Hex to deciminal");
menuProps[EMenu.MEMO] = getMenuProp("Hex memo");
menuProps[EMenu.COMP] = getMenuProp("Hex complement");



export default class App extends React.Component 
{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			menu: EMenu.HEX_DEC
		}
	}

	setMenu(value)
	{
		this.setState({menu: value});
	}

    render() {
		
        return (
			<div className="base-document">
				<SideBar menu={this.state.menu} setMenu={(value) => this.setMenu(value)}/>

				<div className="button-area">
					<SquareButtonField/>
				</div>
			</div>
			
		);
    }
}



















