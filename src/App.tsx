import { Route, Routes } from 'react-router-dom'
import './index.scss'
import './App.css'
import React from 'react'
import Application from './app/index'
import Station from './app/station'
import SMWP from './app/sm-wp'
import SoilMoistureDashboard from './app/fusedSM'
import { Loader } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'
// import Loader from './app/loader'



const YieldPredictions = React.lazy(() => import("./app/yield-predictions"));
const Guide = React.lazy(() => import("./app/guide"));
const Dashboard = React.lazy(() => import("./app/dashboard"));
// const Home =  React.lazy(() => import("./app/home"));
const Forecast = React.lazy(() => import("./app/yield-predictions/forecast"));
const Compare = React.lazy(() => import("./app/map/compare"));
const Drought = React.lazy(() => import("./app/drought/index"));



const Home = React.lazy(() => import("./website/pages/Home/"));
const Home5 = React.lazy(() => import("./website/pages/Home/StickyScrollHomePage"));
const ContactPage = React.lazy(() => import("./website/pages/ContactPage"));
const ArticlesPage = React.lazy(() => import("./website/pages/ArticlesPage"));
const AboutPage = React.lazy(() => import("./website/pages/AboutPage"));
const FAQPage = React.lazy(() => import("./website/pages/FAQPage"));
const ApplicationsPage = React.lazy(() => import("./website/pages/ApplicationsPage"));
const TeamPage = React.lazy(() => import("./website/pages/TeamPage"));
const NotFoundPage = React.lazy(() => import("./website/pages/NotFoundPage"));

function App() {

  return (

    <React.Suspense fallback={<Loader />}>
      <AnimatePresence mode="wait">

        <Routes>
          <Route path="/" element={(<Home />)} />
          <Route path="/home5" element={(<Home5 />)} />
          <Route path="/contact" element={(<ContactPage />)} />
          <Route path="/articles" element={(<ArticlesPage />)} />
          <Route path="/about" element={(<AboutPage />)} />
          <Route path="/faqs" element={(<FAQPage />)} />
          <Route path="/applications" element={(<ApplicationsPage />)} />
          <Route path="/team" element={(<TeamPage />)} />

          <Route path="/dashboard" element={(<Dashboard />)} />

          <Route path="/app" element={(<Application />)} />
          <Route path="/yield" element={(<YieldPredictions />)} />
          <Route path="/drought" element={(<Drought />)} />
          <Route path="/evaporation" element={(<SMWP />)} />
          <Route path="/soilmoisture" element={(<SoilMoistureDashboard />)} />




          <Route path="/forecast" element={(<Forecast />)} />
          <Route path="/Compare" element={(<Compare />)} />

          <Route path="/guide" element={(<Guide />)} />


          <Route path="/station" element={(<Station />)} />

          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={(<NotFoundPage />)} />

        </Routes>
      </AnimatePresence>
    </React.Suspense>


  )
}

export default App
