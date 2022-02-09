import { useContext, useState, useEffect } from 'react'
import { NextPage } from 'next'
import loadingStyles from '../styles/Loading.module.scss'
import Image from 'next/image'
import { MainContext } from '../context/MainContext'


const Loading: NextPage<{header: string}> = (props) => {

		const { main } = useContext(MainContext);
		
		const { header }  = props;

		const [done, setDone] = useState(true);
		console.log(props)

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
						<div className={loadingStyles.loadingText}>{!main.french ? `receiving ${header} signal` : `réception du signal de ${header}`}</div>
				</div> 
		}
		</div>
)};

export default Loading;
