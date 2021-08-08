import React from 'react'

// function Header(props){
  function Header({children}){  //destructed props object
    return (
        <div className='Header' >
            {/* {props.children} */}
            {children}
            </div>
    )

}

export default Header