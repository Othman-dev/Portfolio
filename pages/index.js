import { useContext, useEffect } from 'react';
import homeStyles from '../styles/Home.module.scss';
import layoutStyles from '../styles/Layout.module.scss';
import Loading from '../components/Loading';
import { MainContext } from '../context/MainContext';
import BaliseLayout, { BaliseOn, BaliseOff } from '../components/Balise';

const Home = () => {
		
		const { dispatch, main } = useContext(MainContext);
		
		
		useEffect(() => {
				dispatch({type: 'homePage'})
		// eslint-disable-next-line react-hooks/exhaustive-deps
		},[]);

return (
		<div className={homeStyles.mainDuo}>
				<Loading title='Home'/>
				<BaliseLayout/>
				<div className={layoutStyles.leftSide}>
						<div className={layoutStyles.leftBlock}>
								<BaliseOn content='h1'/>
								<h1 className={homeStyles.homeH1}>Hello world.</h1>
								<h1 className={homeStyles.homeH1}>{!main.french ? 'I am ' : 'Je suis ' }<span className={homeStyles.nameColor}>Othman</span>,</h1>
								<h1 className={homeStyles.homeH1}>{!main.french ? 'web developer.' : 'développeur web'}</h1>
								<BaliseOff content='h1'/>
						</div>
						<div className={layoutStyles.leftBlock}>
								<BaliseOn content='p'/>
								<p className={homeStyles.homeP}>{!main.french ? 'Fullstack / MERN developer' : 'Fullstack / Developpeur MERN'}</p>
								<BaliseOff content='p'/>
						</div>
				</div>
		</div>
)};

export default Home;
