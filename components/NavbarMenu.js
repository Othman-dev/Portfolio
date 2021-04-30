import { useContext, useState } from 'react'
import { MainContext } from '../context/MainContext'
import NavbarMenuStyles from '../styles/NavbarMenu.module.scss'


const NavbarMenu = () => {

		const { main, dispatch } = useContext(MainContext);

		
return(
		<>
				<div className={main.navbarFlex ? [NavbarMenuStyles.navbarMenuDiv, NavbarMenuStyles.navbarMenuTop].join(' ') : NavbarMenuStyles.navbarMenuDiv}/>
    			<div className={main.navbarFlex ? [NavbarMenuStyles.navbarMenuDiv, NavbarMenuStyles.navbarMenuMiddle].join(' ') : NavbarMenuStyles.navbarMenuDiv}/>
    			<div className={main.navbarFlex ? [NavbarMenuStyles.navbarMenuDiv, NavbarMenuStyles.navbarMenuBottom].join(' ') : NavbarMenuStyles.navbarMenuDiv}/>	
		</>
)};

export default NavbarMenu;
