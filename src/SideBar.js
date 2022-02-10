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
                    {this.renderSideMenu(EMenu.HEX_DEC)}
                    {this.renderSideMenu(EMenu.MEMO)}
                    {this.renderSideMenu(EMenu.COMP)}
				</div>)
    }

    renderSideMenu(index)
    {
        let classLink="menu-link";
        let className = index==this.props.menu ? "menu-tag-active" : "menu-tag";

        return (
            <div className={className} onClick={() => this.props.setMenu(index)}>
                <div className={classLink}>
                    #&nbsp;&nbsp;{menuProps[index].text}
                </div>
            </div>
        );
    
    }

}


