import baliseStyles from '../styles/Balise.module.scss'

export const BaliseOn = (props) => {
		const { content } = props;
return(
		<div className={baliseStyles.balise}>
				{`<${content}>`}
		</div>
)};

export const BaliseOff = (props) => {
		const { content } = props;
return(
		<div className={baliseStyles.balise}>
				{`</${content}>`}
		</div>
)};

const BaliseLayout = () => {

return(
		<div className={baliseStyles.baliseLayout}>
				<div className={baliseStyles.topHtml}>
						{'<html>'}
				</div>
				<div className={baliseStyles.topBody}>
						{'<body>'}
				</div>
				<div className={baliseStyles.bottomBody}>
						{'</body>'}
				</div>
				<div className={baliseStyles.bottomHtml}>
						{'</html>'}
				</div>
		</div>
)};

export default BaliseLayout;
