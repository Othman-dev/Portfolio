import React, { createContext,	useReducer } from 'react';
import { NextPage } from 'next'
import { Main } from 'next/document';
import { Action, ProviderProps } from '../types'


const InitialState = {
	music: false,
	french: false,
	page: 'home',
	navbarFlex: false
}
type Main = typeof InitialState


// Reducer
const MainReducer = (main: Main, action: Action) => {

	switch(action.type){
			case 'musicSwitch':
					return{
					...main, 'music': !main.music 
					};
			case 'frenchSwitch':
					return{
					...main, 'french': !main.french
					};
			case 'homePage':
					return{
					...main, 'page': 'home'
					};
			case 'aboutPage':
					return{
					...main, 'page': 'about'
					};
			case 'skillsPage':
					return{
					...main, 'page': 'skills'
					};
			case 'projectsPage':
					return{
					...main, 'page': 'projects'
					};
			case 'contactPage':
					return{
					...main, 'page': 'contact'
					};
			case 'setNavbarFlex':
					return{
					...main, 'navbarFlex': !main.navbarFlex
					};
			default:
					return main;
	};
};
// Reducer

export const MainContext = createContext<{
	main: Main
	dispatch: React.Dispatch<Action>
}>({main: InitialState, dispatch: () => {}});

const MainContextProvider: NextPage = ({children}: ProviderProps) => {

		const [main, dispatch] = useReducer(MainReducer, InitialState);

return(
		<MainContext.Provider value={{main, dispatch}}>
				{children}
		</MainContext.Provider>
)};

export default MainContextProvider;

