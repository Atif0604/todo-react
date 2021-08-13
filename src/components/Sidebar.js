import React from 'react'

// function Sidebar(props){
  function Sidebar({children}){  //destructed props object
    return (
        <div className='Sidebar' >
            {/* {props.children} */}
            {children}
            </div>
    )

}

export default Sidebar