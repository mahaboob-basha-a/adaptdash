import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdManageAccounts, MdOutlineIntegrationInstructions, MdOutlineCalculate } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { FaHome, FaBox, FaUndoAlt, FaUsers, FaShippingFast, FaChartLine, FaCartPlus } from 'react-icons/fa';
import './index.css'

function Sidebar() {
  return (
    <>
        <div className='side-bar-large'>
            <ul className='side-bar-list'>
                <li><NavLink to='/'>Dashboard</NavLink></li>
                <li><NavLink to='/order'>Order</NavLink></li>
                <li><NavLink to='/inventory'>Inventory</NavLink></li>
                <li><NavLink to='/returns'>Returns</NavLink></li>
                <li><NavLink to='/customers'>Customers</NavLink></li>
                <li><NavLink to='/shipping'>Shipping</NavLink></li>
                <li><NavLink to='/channel'>Channel</NavLink></li>
                <li><NavLink to='/integrations'>Integrations</NavLink></li>
                <li><NavLink to='/calculators'>Calculators</NavLink></li>
                <li><NavLink to='/reports'>Reports</NavLink></li>
                <li><NavLink to='/account'>Account</NavLink></li>
            </ul>
        </div>
        <div className='side-bar-small'>
            <ul className='side-bar-list'>
                <li><NavLink to='/'><FaHome /></NavLink></li>
                <li><NavLink to='/order'><FaCartPlus /></NavLink></li>
                <li><NavLink to='/inventory'><FaBox /></NavLink></li>
                <li><NavLink to='/returns'><FaUndoAlt /></NavLink></li>
                <li><NavLink to='/customers'><FaUsers /></NavLink></li>
                <li><NavLink to='/shipping'><FaShippingFast /></NavLink></li>
                <li><NavLink to='/channel'><GrChannel /></NavLink></li>
                <li><NavLink to='/integrations'><MdOutlineIntegrationInstructions /></NavLink></li>
                <li><NavLink to='/calculators'><MdOutlineCalculate /></NavLink></li>
                <li><NavLink to='/reports'><FaChartLine /></NavLink></li>
                <li><NavLink to='/account'><MdManageAccounts /></NavLink></li>
            </ul>
        </div>
    </>
  )
}

export default Sidebar