import './sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import FolderIcon from '@mui/icons-material/Folder';
import InsertChartTwoToneIcon from '@mui/icons-material/InsertChartTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';


const SideBarData = [
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        link: "/home"
    }
]


const SideBarInterface = [
    {
        title: "components",
        icon: <SettingsIcon />,
        link: "/components"
    },
    {
        title: "Utilities",
        icon: <BuildIcon/>,
        link: "/Utilities"
    }
]

const SideBarAddons = [
    {
        title: "Pages",
        icon: <FolderIcon/>,
        link: "/Pages"
    },
    {
        title: "Charts",
        icon: <InsertChartTwoToneIcon />,
        link: "/Charts"
    },
    {
        title: "Tables",
        icon: <TableChartTwoToneIcon />,
        link: "/Tables"
    }
]

function SideBar() {
    return (
        <div className='Sidebar'>
            <div className='sidebar-heading'><EmojiEmotionsIcon /> SB ADMIN²</div>
            <ul className='SidebarList'>
                {SideBarData.map((val, key) => {
                    return (
                        <li key={key}
                        className ="row"
                        id={window.location.pathname == val.link ? "active" : "" }
                         onClick={() => { window.location.pathname = val.link }}>
                            {""}
                            <div id='icon'>{val.icon}</div>
                            <div id='title'>{val.title}</div>
                        </li>
                    )
                })}
            </ul>
            <div className='SideBarInterface'>
            <ul className='SidebarList'><span className='interface'>INTERFACE</span>
                {SideBarInterface.map((val, key) => {
                    return (
                        <li key={key}
                        className ="row"
                        id={window.location.pathname == val.link ? "active" : "" }
                         onClick={() => { window.location.pathname = val.link }}>
                            {""}
                            <div id='icon'>{val.icon}</div>
                            <div id='title'>{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
        <div className='SideBarAddons'>
            <ul className='SidebarList'><span className='addons'>ADDONS</span>
                {SideBarAddons.map((val, key) => {
                    return (
                        <li key={key}
                        className ="row"
                        id={window.location.pathname == val.link ? "active" : "" }
                         onClick={() => { window.location.pathname = val.link }}>
                            {""}
                            <div id='icon'>{val.icon}</div>
                            <div id='title'>{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
        
        </div>
        

    )
}

export default SideBar;

