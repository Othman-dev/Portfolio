export interface Pointer {
    x: number
    y: number
}

export interface ProviderProps {
	children: React.ReactNode
} 

export type Action =
| {type: 'homePage' | 'aboutPage' | 'skillsPage' | 'projectsPage' | 'contactPage' | 'setNavbarFlex' | 'frenchSwitch' | 'musicSwitch'}
