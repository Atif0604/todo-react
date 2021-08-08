import React from 'react'

// function Main(props){
  function Main({children}){  //destructed props object
    return (
        <div className='Main' >
            {/* {props.children} */}
            {children}
            </div>
    )

}

export default Main