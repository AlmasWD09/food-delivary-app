"use client";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const RestaurantMap = ({location}) => {
    return (
        <div>
           {/* google map */}
           <div className="relative">
                        {/* Text overlay */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <p className="bg-black text-white px-4 py-2 rounded-md">
                             {location}
                            </p>
                        </div>

                        {/* Map */}
                        <MapContainer
                            center={[23.70731, 90.415482]}
                            zoom={10}
                            scrollWheelZoom={true}
                            className="h-[50vh] mt-10 z-0"
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[51.505, -0.09]}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
        </div>
    );
};

export default RestaurantMap;