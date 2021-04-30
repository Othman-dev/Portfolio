import { useContext, useState, useEffect } from 'react'
import loadingStyles from '../styles/Loading.module.scss'
import Image from 'next/image'
import { MainContext } from '../context/MainContext.js'

const Loading = (props) => {

		const { main } = useContext(MainContext);
		
		const { title } = props;

		const [done, setDone] = useState(true);

		useEffect(() => {
				setDone(false);
				const timer = setTimeout(() => {
						setDone(true)
				}, 2000);
				return () => clearTimeout(timer);	
		},[]) 

return(
		<div className={loadingStyles.mainLoading}>
		{ done ? 
				
				<></>

				:

				<div className={loadingStyles.loading}>
						<div className={loadingStyles.soundLogo}>
								<Image src='/sound.png' alt='sound' className={loadingStyles.soundImage} layout='fill' />
								<div className={loadingStyles.soundAnim}/>
						</div>
						<div className={loadingStyles.loadingText}>{!main.french ? `receiving ${title} signal` : `réception du signal de ${title}`}</div>
				</div> 
		}
		</div>
)};

export default Loading;
