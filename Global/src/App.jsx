import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
import Exceutive from "./Components/Exceutive"
import Navbar from './Navbar/Navbar'
import Tracks from "./Components/Tracks.jsx"
import Orators from "./Components/Orators.jsx"
import Schedule from "./Components/Schedule.jsx"
import Venue from "./Components/Venue.jsx"
import Event from "./Components/Event.jsx"
import Contact from "./Components/Contact.jsx"
import {Button} from "react-bootstrap"
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
           <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/exceutive" element={<Exceutive/>}></Route>
          <Route path="/tracks" element={<Tracks/>} />
<Route path="/orators" element={<Orators/>} />
<Route path="/schedule" element={<Schedule/>} />
<Route path="/venue" element={<Venue/>} />
<Route path="/event" element={<Event/>} />
<Route path="/contact" element={<Contact/>} />
      </Routes>
      <Button>Register</Button>
        <Button>Select Language</Button>
        <img src="https://mediclave.helixconferences.com/static/media/med_logo.dc333a4c52ce807495b0.png" width={50} height={50}></img>
    </div>
  )
}

export default App
