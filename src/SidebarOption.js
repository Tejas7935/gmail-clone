import React from 'react'
import "./Sidebaroption.css"

function SidebarOption({Icon,number,title,selected}) {
    return (
        <div className={`Sidebaroption ${selected && "sidebaroption--active"}` }>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
            
        </div>
    )
}

export default SidebarOption
