import skillsStyles from '../styles/Skills.module.scss'

export const dataEn = {
		title: "Practice makes perfect.",
		content: "   Starting my journey with C and C++, I then chose the path to JavaScript and web app development. I have worked on open source as well as commercial projects from small to medium size websites.\n\n   On one side, I make Front-End apps. Focusing on interactive and easy to use interface, using premade design (material.ui, bootstrap...) or completely from scratch. Using React.js as my main framework for its modularity and lightweight code. Adding Next.js for performance and seo.\n\n   On the other side, Node.js and Express are the way I go to create my own Apis (emailing, authentification...) and manage data with MongoDB most of the time."
}

export const dataFr = {
		title: "L'usage rend maître.",
		content: "   J'ai démarré mon aventure avec C et C++, pour ensuite prendre la route de JavaScript et du développement web. J'ai eu la chance de travailler aussi bien en open-source que sur des projets à buts commerciaux. Allant de petites à moyennes applications.\n\n   D'un côté, je m'occupe du Front-End. En insistant sur l'intéractivité et la facilité d'utilisation, partant de designs pre-conçus (material.ui, bootstrap...) ou simplement de zéro. J'utilise principalement React.Js pour sa modularité et son code poids plume. Ainsi que Next.js pour optimiser les performances et la SEO\n\n   De l'autre, Node.Js et Express sont les outils que j'utilise pour créer mes propres Apis (email, authentification...) et gérer mes données avec MongoDb la plus part du temps. "
}

export const circleTopContent = (
				<div className={skillsStyles.circleTopContent}>
						<span className={skillsStyles.frontEnd}>Front-End</span>
						<span className={[skillsStyles.html, skillsStyles.skills].join(' ')}>HTML5</span>
						<span className={[skillsStyles.css, skillsStyles.skills].join(' ')}>CSS3</span>
						<span className={[skillsStyles.js, skillsStyles.skills].join(' ')}>JavaScript</span>
						<span className={[skillsStyles.nextjs, skillsStyles.skills].join(' ')}>Next.js</span>
						<span className={[skillsStyles.react, skillsStyles.skills].join(' ')}>React.Js</span>
						<span className={[skillsStyles.sass, skillsStyles.skills].join(' ')}>Sass</span>
						<span className={[skillsStyles.redux, skillsStyles.skills].join(' ')}>Redux/Context</span>
						<span className={[skillsStyles.webgl, skillsStyles.skills].join(' ')}>WebGL/ThreeJS</span>
				</div>
		)

export const circleBottomContent = (
				<div className={skillsStyles.circleBottomContent}>
						<span className={skillsStyles.backEnd}>Back-End</span>
						<span className={[skillsStyles.node, skillsStyles.skills].join(' ')}>Node.Js</span>
						<span className={[skillsStyles.express, skillsStyles.skills].join(' ')}>Express</span>
						<span className={[skillsStyles.mongodb, skillsStyles.skills].join(' ')}>MongoDB</span>
						<span className={[skillsStyles.socketio, skillsStyles.skills].join(' ')}>Socket.io</span>
						<span className={[skillsStyles.cors, skillsStyles.skills].join(' ')}>Cors</span>
						<span className={[skillsStyles.jwt, skillsStyles.skills].join(' ')}>JsonWebToken</span>
						<span className={[skillsStyles.ts, skillsStyles.skills].join(' ')}>TypeScript</span>
				</div>
		)

export const circleRightContent = (
				<div className={skillsStyles.circleRightContent}>
						<span className={skillsStyles.control}>Control & Cloud</span>
						<span className={[skillsStyles.githubtop, skillsStyles.skills].join(' ')}>Github</span>
						<span className={[skillsStyles.githubbottom, skillsStyles.skills].join(' ')}>Github</span>
						<span className={[skillsStyles.firebase, skillsStyles.skills].join(' ')}>Firebase</span>
						<span className={[skillsStyles.heroku, skillsStyles.skills].join(' ')}>Heroku</span>
						<span className={[skillsStyles.jest, skillsStyles.skills].join(' ')}>Jest</span>
						<span className={[skillsStyles.mongoatlas, skillsStyles.skills].join(' ')}>Mongo-Atlas</span>
						<span className={skillsStyles.mern}>MERN</span>
				</div>
		)
