import { createContext,	useReducer } from 'react';
import MainReducer from './MainReducer';


export const MainContext = createContext();


const MainContextProvider = (props) => {

		const [main, dispatch] = useReducer(MainReducer, {
				music: false,
				french: false,
				page: 'home',
				navbarFlex: false
		});

return(
		<MainContext.Provider value={{main, dispatch}}>
				{props.children}
		</MainContext.Provider>
)};

export default MainContextProvider;
