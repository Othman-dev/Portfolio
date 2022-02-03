import { useContext, useEffect } from 'react'
import aboutStyles from '../styles/About.module.scss'
import layoutStyles from '../styles/Layout.module.scss'
import Loading from '../components/Loading'
import BaliseLayout, { BaliseOn, BaliseOff } from '../components/Balise'
import { MainContext } from '../context/MainContext'
import { FaLinkedin, FaGithub, FaStackOverflow,  } from 'react-icons/fa'
import { dataEn, dataFr } from '../data/aboutData'
import ScrollDown from '../components/ScrollDown'


const About = () => {

		const { main, dispatch } = useContext(MainContext);
		
		useEffect(() => {
				dispatch({type: 'aboutPage'})
		},[dispatch]);

		function linkedinLink() {
				window.open('https://www.linkedin.com/in/othman-abboud/', '_blank');
		};

		function githubLink() {
				window.open('https://github.com/Othman-dev/Portfolio', '_blank');
		};

		function stackoverflowLink() {
				window.open('https://stackoverflow.com/users/13862061/othman', '_blank');
		};

		function codingameLink() {
				window.open('https://www.codingame.com/profile/d462ed371e6392c976083f23d1ad103d8533304', '_blank');
		};

		
return (
		<div className={layoutStyles.mainDuo}>
				<Loading title='About'/>
				<BaliseLayout/>
				<ScrollDown/>
				<div className={layoutStyles.leftSide}>
						<div className={layoutStyles.leftBlock}>
						<BaliseOn content='h1'/>
						<h1>{!main.french ? dataEn.title : dataFr.title}</h1>	
						<BaliseOff content='h1'/>
						</div>
						<div className={layoutStyles.leftBlock}>
						<BaliseOn content='p'/>
						<p>{!main.french ? dataEn.content : dataFr.content}</p>
						<BaliseOff content='p'/>
						</div>
				</div>
				<div className={layoutStyles.rightSide}>
				<div className={aboutStyles.aboutContainer}>
						<span>{!main.french ? dataEn.linkTitle : dataFr.linkTitle}</span>
						<div className={aboutStyles.aboutLinksOdd} onClick={linkedinLink}>
								<FaLinkedin className={aboutStyles.AboutIconLink}/>
								<p>{!main.french ? dataEn.linkedin : dataFr.linkedin}</p>
						</div>
						<div className={aboutStyles.aboutLinksEven} onClick={githubLink}>
								<p>{!main.french ? dataEn.stackoverflow : dataFr.stackoverflow}</p>
								<FaStackOverflow className={aboutStyles.AboutIconLink}/>
						</div>
						<div className={aboutStyles.aboutLinksOdd} onClick={stackoverflowLink}>
								<img src='/codingame.svg' className={aboutStyles.AboutIconLinkCodingame}/>
								<p>{!main.french ? dataEn.codingame : dataFr.codingame}</p>
						</div>
						<div className={aboutStyles.aboutLinksEven} onClick={codingameLink}>
								<p>{!main.french ? dataEn.github : dataFr.github}</p>
								<FaGithub className={aboutStyles.AboutIconLink}/>
						</div>
				</div>
				</div>
		</div>
)};


export default About;
