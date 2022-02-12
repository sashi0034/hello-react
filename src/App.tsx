import React from "react";
import SquareButtonField from "./SquareButtonField"
import {SideBar, EMenu, menuProps} from "./SideBar";
import {Useful} from "./useful"

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


class History
{
	constructor(
		public input: string, 
		public output: string
	){};
}


interface IHexToDeciminalState
{
	history: History[]; 
}

interface IHexToDeciminalPoprs
{
	inputNumberStr: string;
	onChange: (value: string) => void;
}



// 16進数から10進数へ
class HexToDeciminal extends React.Component<IHexToDeciminalPoprs, IHexToDeciminalState>
{
	constructor(props: IHexToDeciminalPoprs)
	{
		super(props);
		this.state = 
		{
			history: [],
		};
	}

	pushAddButton()
	{
		let temp: History[] = this.state.history;
		temp.unshift(new History(Useful.separateHexSpace(this.props.inputNumberStr), `${this.getDeciminalFromStr(this.props.inputNumberStr)}`));
		this.setState({
			history: temp,
		});

		this.props.onChange("");
	}
	pushDeleteButton(index)
	{
		let temp = this.state.history;
		Useful.remove(temp, this.state.history[index]);
		this.setState({history: temp});
	}

	getDeciminalFromStr(str: string): number
	{
		return str!=="" ? parseInt(str, 16) : 0;
	}

	renderHistory()
	{
		let ret: JSX.Element[] = [];
		for (let i=0; i<this.state.history.length; i++)
		{
			ret.push(
				<div className="number-output">
					<div className="output-in">{this.state.history[i].input}</div>
					<div className="output-out">
						{this.state.history[i].output}
					</div>
					<button 
						className="delete-button"
						onClick={()=>this.pushDeleteButton(i)}
					>-</button>
				</div>
			);
		}
		return ret;
	}

	render()
	{
		return (
			<div>
				<input 
					className="number-input"
					value={Useful.separateHexSpace(this.props.inputNumberStr)}
					onChange={(e) => {
						let value = e.target.value.toUpperCase().replace(/[^0-9A-F]/g, "");
						this.props.onChange(value);
						}}>
				</input>
				<button
					className="add-button"
					onClick={() => this.pushAddButton()}
				>+</button>


				<div className="number-output">
					<div className="output-in">{Useful.separateHexSpace(this.props.inputNumberStr)}</div>
					<div className="output-out">
						{this.getDeciminalFromStr(this.props.inputNumberStr)}
					</div>
					<button 
						className="delete-button hide"
						onClick={e=>this.pushDeleteButton(e)}
					>-</button>
				</div>
				{this.renderHistory()}
			</div>
		);
	}
}










