import { useContext, useState, useEffect } from 'react'
import { NextPage } from 'next';
import contactStyles from '../styles/Contact.module.scss'
import layoutStyles from '../styles/Layout.module.scss'
import { dataEn, dataFr } from '../data/contactData'
import Loading from '../components/Loading'
import Balise, { BaliseOn, BaliseOff } from '../components/Balise'
import { MainContext } from '../context/MainContext'
import ContactMap  from '../components/ContactMap'
import Axios from 'axios'
import ScrollDown from '../components/ScrollDown'


const Contact: NextPage = () => {

		const { main, dispatch } = useContext(MainContext);

		useEffect(() => {
				dispatch({type: 'contactPage'})
		},[dispatch]);

		const [message, setMessage] = useState({messageSent:false})

		function handleSend(e) {
				e.preventDefault();
				console.log(message)
				Axios.post('/api/sendEmails', message)
				.then((result) => {
						console.log(result);
						setMessage({...message, messageSent: true})
				}, (error) => {
						console.log(error.text);
				}); 
		}

		function handleChange(e) {
				e.preventDefault();
				setMessage({...message, [e.target.name]: e.target.value});
		}


return (
		<div className={layoutStyles.mainDuo}>
				<Loading header='Contact'/>
				<div className={layoutStyles.leftSide}>
						<Balise/>
						<ScrollDown/>
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
						<div className={layoutStyles.leftBlock}>
								<BaliseOn content='form'/>
								<form onSubmit={handleSend}>
										<input className={contactStyles.formInput} name='name' placeholder='Name' type='text' onChange={handleChange} required/>
										<input className={contactStyles.formInput} name='email' placeholder='Email' type='email' onChange={handleChange} required/>
										<br/>
										<input className={[contactStyles.formInput, contactStyles.formSubject].join(' ')} name='subject' placeholder='Subject' type='text' onChange={handleChange} required/>
										<br/>
										<textarea className={contactStyles.formMessage} name='content' placeholder='Message...' data-type='text' onChange={handleChange} required/>
										<br/>
										<div className='buttonDiv'>
												<input className={contactStyles.formButton} type='submit' value={!main.french ? 'send' : 'envoyer'}/>
												<p className={!message.messageSent ? contactStyles.messageSent : [contactStyles.messageSent, contactStyles.messageFlex].join(' ')}>{!main.french ? 'message sent' : 'message envoyé'}</p>
										</div>
								</form>
								<BaliseOff content='form'/>
						</div>
				</div>
				<div className={layoutStyles.rightSide}>
				<div className={contactStyles.contactMapContainer}>
						<p className={contactStyles.infoMap}>
								Othman Abboud<br/>
								Ynystawe, Swansea, Wales.
						</p>
						<ContactMap/>
				</div>
				</div>
		</div>
)};

export default Contact;
