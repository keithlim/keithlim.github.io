import React from 'react';
import "./SideBar.css"
import { useGlobalContext } from '../../context';
import { VscClose } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {

    const { isSidebarOpen, openSidebar, closeSidebar } = useGlobalContext()

    return (
        <React.Fragment>

            <button className="btn mainMenu">
                <GiHamburgerMenu onClick={openSidebar} />
            </button>

            <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
                <button className="btn" onClick={closeSidebar}>
                    <VscClose />
                </button>
                <ul className="list">
                    <li>
                        <h4>Home</h4>
                    </li>
                    <li>
                        <h4>Experience</h4>
                    </li>
                    <li>
                        <h4>Projects</h4>
                    </li>
                    <li>
                        <h4>Education</h4>
                    </li>
                    <li>
                        <h4>Downloads</h4>
                    </li>
                    <li>
                        <h4>Contact</h4>
                    </li>
                </ul>
            </aside>

        </React.Fragment >
    )
}

export default Sidebar;
