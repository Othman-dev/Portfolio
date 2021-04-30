import { useContext, useState } from 'react'
import navbarStyles from '../styles/Navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { MainContext } from '../context/MainContext'
import ReactPlayer from 'react-player/lazy'
import Slider from 'react-input-slider'
import { FaMusic } from 'react-icons/fa'


const Navbar = () => {

		const { main, dispatch } = useContext(MainContext);

		const [playing, setPlaying] = useState(false);
		const [volume, setVolume] = useState({y:0})


/*-----     KNOB MANAGMENT     -----*/

		function knobClass() {
				if(main.page === 'home') return	navbarStyles.knob 		
				if(main.page === 'about') return [navbarStyles.knob, navbarStyles.knobAbout].join(' ')
				if(main.page === 'skills') return [navbarStyles.knob, navbarStyles.knobSkills].join(' ')
				if(main.page === 'projects') return [navbarStyles.knob, navbarStyles.knobProjects].join(' ')
				if(main.page === 'contact') return [navbarStyles.knob, navbarStyles.knobContact].join(' ')
		}


/*-----     MUSIC MANAGMENT     -----*/

		const musicClass = (
				playing ? 
				[navbarStyles.lightOff, navbarStyles.lightOn].join(' ') : 
				navbarStyles.lightOff
		)

		const musicTextClass = (
				playing ? 
				[navbarStyles.musicTextContainer, navbarStyles.musicTextContainerOn].join(' ') : 
				navbarStyles.musicTextContainer
		)

		function musicClick() {
				setPlaying(!playing);
				playing === false ? setVolume({y:0.5}) : setVolume({y:0})

		};

		function musicLink() {
				window.open('https://www.youtube.com/watch?v=HxF_ws9aeB0', '_blank');
		};

		

		const sliderStyle = {
				track: {
						height: '16vh',
						width: '.15rem',
						minWidth: '.23vh',
						backgroundColor: 'black',
						boxShadow: '0 0 .2vh .1vh black',
						borderRadius: '50%/5%'
				},
				active: {
						backgroundColor: '#7DB003'
				},
				thumb: {
						backgroundColor: '#c0c0c0',
						borderRadius: '10%/10%',
						height: '1rem',
						minHeight: '1.8vh',
						width: '2rem',
						minWidth: '3.6vh',
						boxShadow: '0 0 .3rem .1rem black'
				}
		}


/*-----     FRENCH MANAGMENT     -----*/

		const frenchClass = (
				main.french ? 
				[navbarStyles.lightOff, navbarStyles.lightOn].join(' ') : 
				navbarStyles.lightOff
		)

return(
		<div className={navbarStyles.navbar}>
				<Image className={navbarStyles.imageBg} src='/wood.jpeg' alt='wood frame' layout='fill' priority/>
				<div className={navbarStyles.logoContainer}>
						<Link href='/'><Image src='/logo.png' alt='Othman dev logo' className={navbarStyles.logo} layout='fill' priority/></Link>
				</div>
				<div className={navbarStyles.menu}>
						<div className={navbarStyles.menuTop}>
								<Link href='/contact'><a className={main.page === 'contact' ? [navbarStyles.contact, navbarStyles.activeLink].join(' ') : navbarStyles.contact}>Contact</a></Link>
								<Link href='/'><a className={main.page === 'home' ? [navbarStyles.home, navbarStyles.activeLink].join(' ') : navbarStyles.home}>{!main.french ? 'Home': 'Accueil'}</a></Link>
								<Link href='/about'><a className={main.page === 'about' ? [navbarStyles.about, navbarStyles.activeLink].join(' ') : navbarStyles.about}>{!main.french ? 'About' : 'A propos'}</a></Link>
						</div>
						<div className={knobClass()}>
								<div className={navbarStyles.knobEffect}/>
								<div className={navbarStyles.knobMarker}/>
				
						</div>
						<div className={navbarStyles.menuBottom}>
								<Link href='/projects'><a className={main.page === 'projects' ? [navbarStyles.projects, navbarStyles.activeLink].join(' ') : navbarStyles.projects}>{!main.french ? 'Projects' : 'Projets'}</a></Link>
								<Link href='/skills'><a className={main.page === 'skills' ? [navbarStyles.skills, navbarStyles.activeLink].join(' ') : navbarStyles.skills}>{!main.french ? 'Skills' : 'Aptitudes'}</a></Link>
						</div>
				</div>
				<div className={navbarStyles.musicContainer} onClick={musicLink}>
						<div className={musicTextClass}>
								<p className={navbarStyles.musicText}>Merkaba</p>
								<p className={navbarStyles.musicText}>Solar  Ohm</p>
								<p className={navbarStyles.musicText}>Merkaba</p>
								<p className={navbarStyles.musicText}>Solar  Ohm</p>
						</div>
						<ReactPlayer className={navbarStyles.musicPlayer} url='https://www.youtube.com/watch?v=HxF_ws9aeB0' loop={true} volume={volume.y} playing={playing}/>
				</div>
				<div className={navbarStyles.switches}>
						<div className={musicClass}/>
						<button onClick={musicClick}>
								<FaMusic className={navbarStyles.faMusic}/>
						</button>
						<div className={navbarStyles.sliderContainer}>
								<Slider yreverse={true} axis='y' y={volume.y} ymin={0} ymax={1} ystep={0.1} onChange={setVolume} styles={sliderStyle}/>
						</div>
						<div className={frenchClass}/>
						<button onClick={() => dispatch({type: 'frenchSwitch'})}>
								<div className={navbarStyles.flag}>
										<div className={navbarStyles.flagBlue}/>
										<div className={navbarStyles.flagWhite}/>
										<div className={navbarStyles.flagRed}/>
								</div>
						</button>
				</div>
		</div>
)};

export default Navbar;
