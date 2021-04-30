import { useContext, useEffect } from 'react'
import projectsStyles from '../styles/Projects.module.scss'
import Loading from '../components/Loading'
import BaliseLayout, { BaliseOn, BaliseOff } from '../components/Balise'
import { MainContext } from '../context/MainContext'
import { FaGithub, FaLink } from 'react-icons/fa'
import {data} from '../data/projectsData'

const Projects = () => {

		const { dispatch } = useContext(MainContext);
		
		useEffect(() =>{
				dispatch({type: 'projectsPage'})
		},[dispatch]);

		function projectClick(link) {
				window.open(link, '_blank');
		}

return (
		<div>
				<Loading title='Projects'/>
		<div className={projectsStyles.projectsContainer}>
				<BaliseLayout/>
				<div className={projectsStyles.projectsBaliseOn}><BaliseOn content='link'/></div> 
				<div className={projectsStyles.clipContainer}>
						<div className={[projectsStyles.clip, projectsStyles.clip1].join(' ')}>
								<button className={projectsStyles.buttonL} onClick={() => projectClick(data.project1Repo)}><FaGithub className={projectsStyles.clipLogo}/></button>
								<div className={projectsStyles.clipContent}>
										<p>{data.project1}</p>		
								</div>
								<button className={projectsStyles.buttonR} onClick={() => projectClick(data.project1Link)}><FaLink className={projectsStyles.clipLogo}/></button>
						</div>	
						<div className={[projectsStyles.clip, projectsStyles.clip2].join(' ')}>
								<button className={projectsStyles.buttonL} onClick={() => projectClick(data.project2Repo)}><FaGithub className={projectsStyles.clipLogo}/></button>
								<div className={projectsStyles.clipContent}>
										<p>{data.project2}</p>		
								</div>
								<button className={projectsStyles.buttonR} onClick={() => projectClick(data.project2Link)}><FaLink className={projectsStyles.clipLogo}/></button>
						</div>	
						<div className={[projectsStyles.clip, projectsStyles.clip3].join(' ')}>
								<button className={projectsStyles.buttonL} onClick={() => projectClick(data.project3Repo)}><FaGithub className={projectsStyles.clipLogo}/></button>
								<div className={projectsStyles.clipContent}>
										<p>{data.project3}</p>		
								</div>
								<button className={projectsStyles.buttonR} onClick={() => projectClick(data.project3Link)}><FaLink className={projectsStyles.clipLogo}/></button>
						</div>
				</div>
				<div className={projectsStyles.projectsBaliseOff}><BaliseOff content='link'/></div> 
		</div>
		</div>
)};

export default Projects;
