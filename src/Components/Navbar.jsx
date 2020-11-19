import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Style/navbar.css'
import 'boxicons'



const Navbar = () => {

    function hidemenu() {
        const closeOne = document.getElementById('closeOne')
        const closeTwo = document.getElementById('closeTwo')

        if (!closeOne.classList.contains('close')){
            closeOne.classList.remove('containerMenu')
            closeOne.classList.add('close')            
            if (!closeTwo.classList.contains('close2')) {
                closeTwo.classList.add('close2')
            }
            
        }else{
            closeOne.classList.remove('close')
            closeTwo.classList.remove('close2')
            closeOne.classList.add('containerMenu')
        }
        
    }

    document.addEventListener('click', (e) =>{
        const closeOne = document.getElementById('closeOne')
        const closeTwo = document.getElementById('closeTwo')
        
        const sidebar = document.getElementById('sidebar')
        if (sidebar) {
            sidebar.classList.remove('hide')
            sidebar.classList.add('hideMenu')            
        }

        closeOne.classList.remove('close')
        closeTwo.classList.remove('close2')
        closeOne.classList.add('containerMenu')

    })

    function showSideMenu(e) {
        hidemenu()
        
        const sidebar = document.getElementById('sidebar')
        console.log(e.target.classList)
        if (sidebar) {
            sidebar.classList.remove('hide')
            sidebar.classList.add('hideMenu')
        }  
            if ( e.target.classList.contains('showmenu') ) {
                sidebar.classList.add('hide')
                sidebar.classList.remove('hideMenu')
            }


    }

    return (
        <>
        <div className="containerNav">

        </div>
        <button  onClick={showSideMenu} className="showmenu">
            <div id='closeOne' className="containerMenu">
                <span ></span>
                <span></span>
                <span></span>
            </div>
            <div id='closeTwo'>
                <span ></span>
            </div>
        </button>


        <nav id="sidebar">
            <div className="containerHead">
                <h1>My Web</h1>
            </div>
            <div className="containerBody">
                <NavLink exact activeClassName="active" className="navLink" to="/"><span className='icon'><box-icon name='home' type='solid' color='white' size='sm' /></span> Home</NavLink>
                <NavLink activeClassName="active" className="navLink" to="/products"><span className= 'icon'><box-icon name='card' type='solid' color='white' size='sm'></box-icon></span> Products</NavLink>
                <NavLink activeClassName="active" className="navLink" to="/register"><span className= 'icon'><box-icon name='user' type='solid' color='#ffffff' size='sm'></box-icon></span> Sign Up</NavLink>
                <NavLink activeClassName="active" className="navLink" to="/dashboard"><span className= 'icon'><box-icon name='card' type='solid' color='white' size='sm'></box-icon></span> Dash Board</NavLink>
            </div>
        </nav>
        </>
    );
}   

export default Navbar;
