import GoogleMapReact from "google-map-react";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-3xl text-primary text-center">Live Tracking</h2>
      <div className="w-96 h-96">
        <GoogleMapReact
          bootstrapURLKeys={{ key: import.meta.env.VITE_MAPS_API_KEY! }}
          defaultCenter={{ lat: 0, lng: 0 }}
          defaultZoom={1}
        ></GoogleMapReact>
      </div>
      <div className="flex flex-row gap-5 items-center justify-center">
        <h2 className="text-2xl text-primary">Passenger Count : </h2>
        <h2 className="text-2xl text-primary">0</h2>
    </div>
    </div>
  );
};

export default Home;
