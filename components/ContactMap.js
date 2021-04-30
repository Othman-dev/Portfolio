import {GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import mapStyle from './ContactMapStyle'


		const libraries = ['places'];
		const mapContainerStyle = {
				height: '100%',
				width:'100%'
		};
		const center = {
				lat:51.686130,
				lng:1.906690
		};
		const options = {
				styles : mapStyle,
				disableDefaultUI: true,
		}
		const markerPos = {
				lat:51.686130,
				lng:-3.906690
		}


const ContactMap = () => {

		const {isLoaded, loadError} = useLoadScript({
				googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
				libraries,		
		});

		if (loadError) return 'Error loading maps';
		if (!isLoaded) return 'Loading maps';

return (
		<GoogleMap 
		mapContainerStyle={mapContainerStyle}
		zoom={5}
		center={center}
		options={options}
		>
		<Marker position={markerPos} icon={{
				url:'/markerIcon.svg',
				scaledSize: new window.google.maps.Size(50,75)}}
			/>
		</GoogleMap>
);
}
 
export default ContactMap;
