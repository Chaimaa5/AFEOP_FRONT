import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
// import { Line } from "react-chartjs-2";
import "leaflet/dist/leaflet.css";

const SoilMoistureDashboard = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 font-poppins">
      {/* Header */}
      <header className="bg-white shadow p-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Soil Moisture Dashboard</h1>
          <p className="text-gray-500 text-sm">
            Multi-sensor fused observations from SMAP, SMOS, AMSR2
          </p>
        </div>
        <div className="text-sm text-gray-400">Last updated: April 2025</div>
      </header>

      {/* Main Grid */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Drought Card */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="font-semibold text-lg mb-2">Drought Index</h2>
          <div className="h-32 bg-red-100 rounded-xl flex items-center justify-center text-red-600 font-bold">
            🔥 Moderate Drought in Region B
          </div>
        </div>

        {/* Yield Card */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="font-semibold text-lg mb-2">Yield Estimate</h2>
          <div className="h-32 bg-green-100 rounded-xl flex items-center justify-center text-green-700 font-bold">
            🌾 Yield: 3.2 tons/ha (forecast)
          </div>
        </div>

        {/* Evaporation Card */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="font-semibold text-lg mb-2">Evaporation</h2>
          <div className="h-32 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold">
            💧 ET: 4.8 mm/day
          </div>
        </div>

        {/* Soil Moisture Map */}
        <div className="bg-white rounded-2xl shadow p-4 col-span-1 xl:col-span-2">
          <h2 className="font-semibold text-lg mb-2">Soil Moisture Map</h2>
          <MapContainer center={[33.5, -5]} zoom={6} className="h-72 rounded-xl">
          
                                            <TileLayer url="https://server.arcgisonlicne.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />

          </MapContainer>
        </div>

        {/* Time Series Chart */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="font-semibold text-lg mb-2">Soil Moisture Time Series</h2>
          {/* <Line
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr"],
              datasets: [
                {
                  label: "Soil Moisture (m³/m³)",
                  data: [0.24, 0.27, 0.29, 0.25],
                  fill: true,
                  backgroundColor: "rgba(34,197,94,0.2)",
                  borderColor: "#22c55e"
                }
              ]
            }}
          /> */}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 py-6">
        © 2025 Soil Monitoring Platform – Powered by Multi-Sensor Fusion
      </footer>
    </div>
  );
};

export default SoilMoistureDashboard;


