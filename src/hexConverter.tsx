import React from "react";
import {Useful} from "./useful"


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



// 16進数変換
class HexConverter extends React.Component<IHexToDeciminalPoprs, IHexToDeciminalState>
{
	protected outputInClass: string = "output-in";
	protected outputOutClass: string = "output-out";

	constructor(props: IHexToDeciminalPoprs)
	{
		super(props);
		this.state = 
		{
			history: [],
		};
	}

	private pushAddButton()
	{
		let temp: History[] = this.state.history;
		temp.unshift(new History(Useful.separateHexSpace(this.props.inputNumberStr), `${this.getConvertedValue(this.props.inputNumberStr)}`));
		this.setState({
			history: temp,
		});

		this.props.onChange("");
	}
	private pushDeleteButton(index)
	{
		let temp = this.state.history;
		Useful.remove(temp, this.state.history[index]);
		this.setState({history: temp});
	}

	protected getConvertedValue(str: string): number
	{
		return str!=="" ? parseInt(str, 16) : 0;
	}

	private renderHistory()
	{
		let ret: JSX.Element[] = [];
		for (let i=0; i<this.state.history.length; i++)
		{
			ret.push(
				<div className="number-output">
					<div className={this.outputInClass}>{this.state.history[i].input}</div>
					<div className={this.outputOutClass}>
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

	public override render()
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
						{this.getConvertedValue(this.props.inputNumberStr)}
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

export class HexToDeciminal extends HexConverter
{
	protected override getConvertedValue(str: string): number
	{
		return str!=="" ? parseInt(str, 16) : 0;
	}
}

