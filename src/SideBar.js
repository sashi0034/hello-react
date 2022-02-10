import React from "react";

export default class SideBar extends React.Component
{

    render()
    {
        return (<div className="sideBar">
					<div className="menu-top">16進数謎電卓</div>
					<SideMenu/>
                    <SideMenu/>
                    <SideMenu/>
				</div>)
    }

}

class SideMenu extends React.Component
{
	render()
	{
		let classLink="menu-link";
		return (
			<div className="menu-tag">
				<a href="#hex-to-deciminal" className={classLink}># Hex to Decminal</a><br/>
			</div>
		);
	}
}

