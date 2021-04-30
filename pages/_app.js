import '../styles/globals.scss'
import Matrix from '../components/Matrix'
import Meta from '../components/Meta'
import Layout from '../components/Layout'
import MainContextProvider from '../context/MainContext'

function MyApp({ Component, pageProps }) {
  
return (
		<>
		<Matrix />
		<Meta />
		<MainContextProvider> 
				<Layout>
						<Component {...pageProps} />
				</Layout> 
		</MainContextProvider>
		</>
		
  )		
}

export default MyApp
