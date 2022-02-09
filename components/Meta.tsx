import Head from 'next/head'

const Meta: any = ({ title, keywords, description }: {title: string, keywords: string, description: string}) => {
		return (
				<Head>
						<meta name='viewport' content='width=device-width, initial-scale=1' />
						<meta name='keywords' content={keywords} />
						<meta name='description' content={description} />
						<meta charSet='utf-8' />
						<link rel='icon' href='/favicon.ico' />
						<title>{title}</title>
				</Head>
		)
}

Meta.defaultProps = {
		title: 'Othman-dev',
		description: 'Othman portfolio, fullstack web developer',
		keywords: 'othman, web, dev, developer',
}

export default Meta
