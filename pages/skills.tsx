import { useContext, useEffect } from 'react'
import { NextPage } from 'next';
import skillStyles from '../styles/Skills.module.scss'
import layoutStyles from '../styles/Layout.module.scss'
import { dataEn, dataFr, circleTopContent, circleRightContent, circleBottomContent } from '../data/skillsData.js'
import Loading from '../components/Loading'
import BaliseLayout, { BaliseOn, BaliseOff } from '../components/Balise'
import { MainContext } from '../context/MainContext';
import ScrollDown from '../components/ScrollDown'


const Skills: NextPage = () => {

		const { main, dispatch } = useContext(MainContext);
		
		useEffect(() =>{
				dispatch({type: 'skillsPage'})
		},[dispatch]);

return (
		<div className={layoutStyles.mainDuo}>
				<Loading header='Skills'/>
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
						<div className={skillStyles.circleTop}>{circleTopContent}</div>
						<div className={skillStyles.circleRight}>{circleRightContent}</div>
						<div className={skillStyles.circleBottom}>{circleBottomContent}</div>
				</div>
		</div>
)};

export default Skills;
