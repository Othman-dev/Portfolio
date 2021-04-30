const MainReducer = (main, action) => {

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

export default MainReducer;
