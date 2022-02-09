//const sendGrid = require('@sendgrid/mail');
import sendGrid from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'

sendGrid.setApiKey(process.env.EMAIL_API_KEY);
const emailOthman: string = process.env.EMAIL_OTHMAN;

export default (req: NextApiRequest, res: NextApiResponse) => {
		if(req.method === 'POST') {

				type Msg = {
					to: string
					from: string
					subject: string
					text: string
				}

				const msg: Msg= {
						to:emailOthman,
						from:emailOthman,
						subject:req.body.subject,
						text: req.body.name + '\n' + req.body.email + '\n\n' + req.body.content
				};

				sendGrid.send(msg)
				.then(result => {
						console.log('result here')
						res.status(200).json({
								success: true
						});
				})
				.catch(err => {
						console.log('error here')
						res.status(401).json({
								success: false
						});
				});
		}
}
