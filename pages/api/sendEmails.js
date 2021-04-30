const sendGrid = require('@sendgrid/mail');

sendGrid.setApiKey(process.env.EMAIL_API_KEY);
const emailOthman = process.env.EMAIL_OTHMAN;

export default async (req, res) => {
		if(req.method === 'POST') {
				const msg= {
						to:emailOthman,
						from:emailOthman,
						subject:req.body.subject,
						text: req.body.name + '\n' + req.body.email + '\n\n' + req.body.content
				};

				await sendGrid.send(msg)
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
