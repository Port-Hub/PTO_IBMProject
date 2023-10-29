import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";

const Home = () => {
  const [currentLocation,setCurrentLocation] = useState({
    lat: 6.9271,
    lng: 79.8612,
  });
  const center = {
    lat: 6.9271,
    lng: 79.8612,
  };

  useEffect(() => {
    setTimeout(() => {
      setCurrentLocation({
        lat: currentLocation.lat+0.001,
        lng: currentLocation.lng+0.001,
      });
      }, 2000);
    }, [currentLocation]);
  
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY!,
});


  // useEffect(() => {
  //   setCenter({ lat: center.lat+1, lng: center.lng+1 });
  // }, [center]);
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-3xl text-primary text-center">Live Tracking</h2>
{      isLoaded?  <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "50vw", height: "50vh" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
  }}>
          <Marker position={currentLocation} />
  </GoogleMap>:null}

      <div className="flex flex-row gap-5 items-center justify-center">
        <h2 className="text-2xl text-primary">Passenger Count : </h2>
        <h2 className="text-2xl text-primary">0</h2>
    </div>
    </div>
  );
};

export default Home;
