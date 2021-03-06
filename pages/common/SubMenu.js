import 'antd/dist/antd.css';
import { useState } from "react";
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const SubMenu = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return <><Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
    >
        <font>{props.title}</font>
    </Button>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            {props.urls.map(function (url, i) {
                return <MenuItem onClick={handleClose} key={i}>
                    <Link href={url}>{props.subTitles[i]}</Link>
                </MenuItem>
            })}
        </Menu>
        <style jsx>
            {`
            font{
                font-weight:600;
                border-radius:15px;
                padding : 10px;
                background-color : skyblue;
                transition : 0.3s;
            }
            font:hover{
                background-color : #7878fb;
                color : yellow;
            }
            `}
        </style>
    </>
}

export default SubMenu;