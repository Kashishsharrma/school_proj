import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Display from "./Components/Display";
import PrincipalDesk from "./Components/PrincpalDesk";
import PresidentMessage from "./Components/President";
import Certification from "./Components/Certification";
import Shaping from "./Components/Shaping";
import KeyInformation from "./Components/KeyInformation";
import Campus from "./Components/Campus";
import Glance from "./Components/Glance";
import Footer from "./Components/Footer";
import Academics from "./Sections/Academics";
import Gallery from "./Sections/Gallery";
import Enroll from "./Sections/Enroll";
import Information from "./Sections/Information";

// Subsections inside Academics
import ChemistryLab from "./SubSections/Chemistry";
import BiologyLab from "./SubSections/Biology";
import ComputerLab from "./SubSections/Computer";
import PhysicsLab from "./SubSections/Physics";
import MusicRoom from "./SubSections/Music";
import PrayerRoom from "./SubSections/Prayer";
import Library from "./SubSections/Library";
import SmartClass from "./SubSections/Smart";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Display />
              <Certification />
              <PrincipalDesk />
              <PresidentMessage />
              <Shaping />
              <KeyInformation />
              <Campus />
              <Glance />
            </>
          }
        />

        {/* Academics Section */}
        <Route path="/academics" element={<Academics />} />
        <Route path="/academics/chemistry-lab" element={<ChemistryLab />} />
        <Route path="/academics/biology-lab" element={<BiologyLab />} />
        <Route path="/academics/computer-lab" element={<ComputerLab />} />
        <Route path="/academics/physics-lab" element={<PhysicsLab />} />
        <Route path="/academics/music-room" element={<MusicRoom />} />
        <Route path="/academics/prayer-room" element={<PrayerRoom />} />
        <Route path="/academics/library" element={<Library />} />
        <Route path="/academics/smart-class" element={<SmartClass />} />

        {/* Other Sections */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/information" element={<Information />} />
        <Route path="/enroll" element={<Enroll />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
