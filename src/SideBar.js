import React from "react";


export const EMenu = {
	HEX_DEC: 0,
	MEMO: 1,
    COMP: 2,
}



export var menuProps = {};




export class SideBar extends React.Component
{
    render()
    {
        return (<div className="side-bar">
					<div className="menu-top">16進数謎電卓</div>
					<SideMenu index={EMenu.HEX_DEC} onClick={() => this.props.setMenu(EMenu.HEX_DEC)}/>
                    <SideMenu index={EMenu.MEMO} onClick={() => this.props.setMenu(EMenu.MEMO)}/>
                    <SideMenu index={EMenu.COMP} onClick={() => this.props.setMenu(EMenu.COMP)}/>
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
				<a 
                    href="#hex-to-deciminal"
                    className={classLink}
                    onClick={this.props.onClick}>
                    # {menuProps[this.props.index].text}
                </a><br/>
			</div>
		);
	}
}

