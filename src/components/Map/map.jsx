

import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MarkerIcon from 'leaflet/dist/images/marker-icon.png'
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png'

const Map = () => {

    const position = [51.505, -0.09]
    return (

<MapContainer center={[-34.9214500,  -57.9545300]} style={{height:"40vh", width:'40%',borderRadius:'15px'}} zoom={12.5} scrollWheelZoom={false}>
  <TileLayer
    attribution=''
    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
  />
  <Marker icon={
                    new L.Icon({
                        iconUrl: MarkerIcon.src,
                        iconRetinaUrl: MarkerIcon.src,
                        iconSize: [25, 41],
                        iconAnchor: [12.5, 41],
                        popupAnchor: [0, -41],
                        shadowUrl: MarkerShadow.src,
                        shadowSize: [41, 41],
                    })
                   
                } position={[-34.9214500, -57.9545300]}>

    <Popup>
      <div className='h-[10vh] flex justify-center items-center'>
      <h1 className='text-[15px] text-blue-400'>El geriatrico de tu mama </h1>
      </div>
    </Popup>
  </Marker>

  <Marker icon={
                    new L.Icon({
                        iconUrl: MarkerIcon.src,
                        iconRetinaUrl: MarkerIcon.src,
                        iconSize: [25, 41],
                        iconAnchor: [12.5, 41],
                        popupAnchor: [0, -41],
                        shadowUrl: MarkerShadow.src,
                        shadowSize: [41, 41],
                    })
                   
                } position={[-34.914036, -57.963013]}>

    <Popup>
      <h1 className='text-[15px] text-blue-400'>El geriatrico de tu tia </h1>
    </Popup>
  </Marker>
    

  <Marker icon={
                    new L.Icon({
                        iconUrl: MarkerIcon.src,
                        iconRetinaUrl: MarkerIcon.src,
                        iconSize: [25, 41],
                        iconAnchor: [12.5, 41],
                        popupAnchor: [0, -41],
                        shadowUrl: MarkerShadow.src,
                        shadowSize: [41, 41],
                    })
                   
                } position={[-34.913036, -57.963013]}>

    <Popup>
      <h1 className='text-[15px] text-blue-400'>El geriatrico de tu hermana </h1>
    </Popup>
  </Marker>


</MapContainer>
  )
}


export default Map
