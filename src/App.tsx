import React from "react";
import SquareButtonField from "./SquareButtonField"
import {SideBar, EMenu, menuProps} from "./SideBar";

import './App.css';
import { Interface } from "readline";




function getMenuProp(text)
{
    return {
        text: text,
    }
}
menuProps[EMenu.HEX_DEC] = getMenuProp("Hex to deciminal");
menuProps[EMenu.MEMO] = getMenuProp("Hex memo");
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
			menu: EMenu.HEX_DEC,
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
		
        return (
			<div className="base-document">
				<SideBar menu={this.state.menu} setMenu={(value) => this.setMenu(value)}/>

				<div className="main-area">
					<div className="button-area">
						<SquareButtonField  inputNumberStr={this.state.inputNumberStr} onClick={(value) => this.setInputNumberStr(value)}/>
					</div>
					<HexToDeciminal inputNumberStr={this.state.inputNumberStr} onChange={(value) => this.setInputNumberStr(value)}/>
				</div>
				
			</div>
			
		);
    }
}



interface IHexToDeciminalState
{
	inputNumberStr: string;
}

interface IHexToDeciminalPoprs
{
	inputNumberStr: string;
	onChange: (value: number) => void;
}



// 16進数から10進数へ
class HexToDeciminal extends React.Component<IHexToDeciminalPoprs, IHexToDeciminalState>
{
	constructor(props: IHexToDeciminalPoprs)
	{
		super(props);
	}


	render()
	{
		let num = this.props.inputNumberStr!=="" ? parseInt(this.props.inputNumberStr, 16) : 0;
		
		return (
			<div>
				<input 
					className="number-input"
					value={this.props.inputNumberStr.toLowerCase()}
					onChange={(value) => console.log(value.target)}>
				</input>
				<div className="number-output">{num}</div>
			</div>
		);
	}
}










