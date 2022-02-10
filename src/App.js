import React from "react";
import SquareButtonField from "./SquareButtonField"
import SideBar from "./SideBar";

import './App.css';





export default class App extends React.Component 
{

    render() {
        return (
			<div className="base-document">
				<SideBar/>

				<div className="button-area">
					<SquareButtonField/>
				</div>
			</div>
			
		);
    }
}



















