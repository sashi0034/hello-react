import React from "react";
import SquareButtonField from "./SquareButtonField"
import {SideBar, EMenu, menuProps} from "./SideBar";
import {Useful} from "./useful"

import './App.css';
import { Interface } from "readline";
import {HexToDeciminal, HexToBin, HexComplement} from "./hexConverter"



function getMenuProp(text)
{
    return {
        text: text,
    }
}
menuProps[EMenu.TO_DEC] = getMenuProp("Hex to deciminal");
menuProps[EMenu.TO_BIN] = getMenuProp("Hex to bin");
menuProps[EMenu.COMP] = getMenuProp("Hex complement");


interface IAppProps
{
}
interface IAppState
{
	menu: EMenu,
	inputNumberStr: "",
}



export class App extends React.Component<IAppProps, IAppState>
{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			menu: EMenu.TO_DEC,
			inputNumberStr: "",
		}
	}

	setMenu(value)
	{
		this.setState({menu: value});
	}
	setInputNumberStr(value)
	{
		this.setState({inputNumberStr: value});
	}

    render() {
		let menu=SideBar

        return (
			<div className="base-document">
				<SideBar menu={this.state.menu} setMenu={(value) => this.setMenu(value)}/>

				<div className="main-area">
					<div className="button-area">
						<SquareButtonField  inputNumberStr={this.state.inputNumberStr} onClick={(value) => this.setInputNumberStr(value)}/>
					</div>
					{this.resultRender()}
				</div>
				
			</div>
			
		);
    }

	resultRender()
	{
		switch (this.state.menu)
		{
			case EMenu.TO_DEC:
				return(<HexToDeciminal inputNumberStr={this.state.inputNumberStr} onChange={(value) => this.setInputNumberStr(value)}/>);
			case EMenu.TO_BIN:
				return(<HexToBin inputNumberStr={this.state.inputNumberStr} onChange={(value) => this.setInputNumberStr(value)}/>);
			case EMenu.COMP:
				return(<HexComplement inputNumberStr={this.state.inputNumberStr} onChange={(value) => this.setInputNumberStr(value)}/>);
		}
	}
}










