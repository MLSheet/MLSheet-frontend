import React from "react"
import './sidebar.scss'
import { Link } from 'react-router-dom'
import Button from '../components/button/Button'

function SideBar(){
    return (
        <div className="sidebar">
            
            <Link to="/upload"> <Button className="sidebar-button" children={"Upload Files"}></Button></Link>
            <Link to="/dataframes"><Button className="sidebar-button" children={"Data Assets"}></Button></Link>
        </div>
    )
}

export default SideBar;