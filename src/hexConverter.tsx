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
abstract class HexConverter extends React.Component<IHexToDeciminalPoprs, IHexToDeciminalState>
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
		temp.unshift(new History(Useful.separateChar(this.props.inputNumberStr), `${this.getConvertedValue(this.props.inputNumberStr)}`));
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

	protected abstract getConvertedValue(str: string): string;

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
					value={Useful.separateChar(this.props.inputNumberStr)}
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
					<div className={this.outputInClass}>{Useful.separateChar(this.props.inputNumberStr)}</div>
					<div className={this.outputOutClass}>
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
	protected override getConvertedValue(str: string): string
	{
		return str!=="" ? Useful.separateChar(`${parseInt(str, 16)}`, 3, ",") : "";
	}
}

export class HexToBin extends HexConverter
{

    constructor(props)
    {
        super(props);
        this.outputInClass += " width-small"
        this.outputOutClass += " width-large"
    }

    protected override getConvertedValue(str: string): string
	{
        let num: number = parseInt(str, 16);
        let ret = str!=="" ? Useful.separateChar(num.toString(2), 4) : "";
        let end=str.length*4-ret.length;
        for (let i=0; i<end; i++)
            ret = "0" + ret;

		return ret;
	}
}


export class HexComplement extends HexConverter
{

	protected override getConvertedValue(str: string): string
	{
        let ret: string = "";

        for (let i=0; i<str.length; i++)
        {
            ret = ret + (15-parseInt(str[i], 16)).toString(16).toUpperCase();
        }
		return Useful.separateChar(ret);
	}
}

