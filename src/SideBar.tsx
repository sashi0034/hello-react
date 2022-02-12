import React from "react";


export const EMenu = {
	TO_DEC: 0,
	TO_BIN: 1,
    COMP: 2,
} as const;
export type EMenu = typeof EMenu[keyof typeof EMenu];


export var menuProps = {};


interface ISlideBarProps
{
    menu: EMenu;
    setMenu: (index: number) => void;
}




export class SideBar extends React.Component<ISlideBarProps, {}>
{
    render()
    {
        return (<div className="side-bar">
					<div className="menu-top">16進数謎電卓</div>
                    {this.renderSideMenu(EMenu.TO_DEC)}
                    {this.renderSideMenu(EMenu.TO_BIN)}
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


