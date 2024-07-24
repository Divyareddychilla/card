import React, { useState } from 'react';
import { FaTh, FaUserAlt, FaRegChartBar, FaCommentAlt, FaShoppingBag, FaThList } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss'; 
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Eagleyardlogo from "../assets/Eagleyardlogo.svg";

interface MenuItem {
    path: string;
    name: string;
    icon?: React.ReactNode;
    subMenu?: MenuItem[];
}

const Sidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [currentSubMenu, setCurrentSubMenu] = useState<MenuItem[] | null>(null);

    const toggle = () => setIsOpen(!isOpen);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>, subMenu: MenuItem[] | undefined) => {
        if (subMenu) {
            setAnchorEl(event.currentTarget);
            setCurrentSubMenu(subMenu);
        }
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
        setCurrentSubMenu(null);
    };

    const open = Boolean(anchorEl);

    const menuItem: MenuItem[] = [
        { path: "/analytics", name: "ANALYTICS" },
        { path: "/", name: "Dashboard", icon: <FaTh /> },
        { path: "/yardview", name: "YardView", icon: <FaUserAlt />, subMenu: [{ path: "/module", name: "Module" }, { path: "/case", name: "Case" }] },
        { path: "/schedule", name: "Schedule", icon: <FaRegChartBar /> },
        { path: "/users", name: "Users", icon: <FaCommentAlt /> },
        { path: "/rolemanagement", name: "RoleManagement", icon: <FaUserAlt /> },
        { path: "/reports", name: "Reports", icon: <FaUserAlt /> },
        { path: "/data", name: "DATA" },
        { path: "/alarms", name: "Alarms", icon: <FaShoppingBag /> },
        { path: "/support", name: "SUPPORT" },
        { path: "/communicationstatus", name: "CommunicationStatus", icon: <FaUserAlt /> },
        { path: "/events", name: "Events", icon: <FaThList /> },
        { path: "/configuration", name: "Configuration", icon: <FaUserAlt /> },
        { path: "/settings", name: "Settings", icon: <FaUserAlt /> },
    ];

    return (
        <div className="container">
            <div style={{ width: isOpen ? "230px" : "50px" }} className="sidebar">
                <div className="top_section">
                <img src={Eagleyardlogo} alt="Logo" className="eagle_yard_logo" style={{ display: isOpen ? "block" : "none", }} />
                    {/* <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1> */}
                    <div style={{ marginLeft: isOpen ? "0px" : "15px" }} className="bars">
                        {isOpen ? (
                            <ChevronLeft onClick={toggle} />
                        ) : (
                            <ChevronRight onClick={toggle} />
                        )}
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <div key={index} onMouseEnter={(e) => handlePopoverOpen(e, item.subMenu)} onMouseLeave={handlePopoverClose}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }: { isActive: boolean }) => isActive ? "link active" : "link"}
                            >
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </NavLink>
                        </div>
                    ))
                }
                <Popover
                    id="mouse-over-popover"
                    sx={{
                        pointerEvents: 'none',
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <div className="submenu">
                        {currentSubMenu && currentSubMenu.map((subItem, index) => (
                            <NavLink
                                to={subItem.path}
                                key={index}
                                className="link"
                                onClick={handlePopoverClose}
                            >
                                <Typography sx={{ p: 1 }}>{subItem.name}</Typography>
                            </NavLink>
                        ))}
                    </div>
                </Popover>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
