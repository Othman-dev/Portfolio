import { useContext } from 'react'
import { NextPage } from 'next'
import layoutStyles from '../styles/Layout.module.scss'
import Navbar from './Navbar'
import NavbarMenu from './NavbarMenu'
import { MainContext } from '../context/MainContext'

const Layout: NextPage = ({children}) => {

		const { main, dispatch } = useContext(MainContext);

		function setNavbar() {
		                dispatch({type: 'setNavbarFlex'})
		        }
		   
return(
		<div className={layoutStyles.layout}>
				<div className={main.navbarFlex ? [layoutStyles.navbarContainer, layoutStyles.flex].join(' ') : layoutStyles.navbarContainer}>
						<Navbar/>
				</div>
				<div className={layoutStyles.navbarMenu} onClick={setNavbar}>
						<NavbarMenu/>
				</div>
				<div className={layoutStyles.pageContainer}>
						{children}
				</div>
		</div>
)};

export default Layout;
