import React from 'react'
import '../styles/Sidebar.css'
import { sidebarData } from '../data/sidebar-data.js'

function Sidebar() {
  return (
    <div className='sidebar'>
        <ul className='sidebar-list'>
        {sidebarData.map((item, index) => {
            return (
                <li key={index}
                    className='row'
                    id={window.location.pathname === item.link ? 'active' : ''}
                    onClick={() => {
                        window.location.pathname = item.link;
                    }}
                >
                    <div id='icon'>{item.icon}</div>
                    <div id='title'>{item.title}</div>
                </li>
            )
        })}
        </ul>
    </div>
  )
}

export default Sidebar