import { useContext, useState } from 'react'
import { NextPage } from 'next'
import scrollDownStyles from '../styles/ScrollDown.module.scss'
import { BsFillForwardFill } from 'react-icons/bs'


const ScrollDown: NextPage = () => {

return(
		<div className={scrollDownStyles.scrollDownContainer}>
				<div className={scrollDownStyles.scrollDownText}>scroll down</div>
				<BsFillForwardFill className={scrollDownStyles.scrollDownArrow}/>
		</div>
)};

export default ScrollDown;
