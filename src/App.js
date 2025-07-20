import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop"; 
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
import Sports from "./SubSections/Sports";
import Library from "./SubSections/Library";
import SmartClass from "./SubSections/Smart";

// Subsections inside Information
import Books from "./InformationData/Books";
import Campusinfo from "./InformationData/Campusinfo";
import Faculty from "./InformationData/Faculty";
import Fee from "./InformationData/Fee";
import Timing from "./InformationData/Timing";
import Transport from "./InformationData/Transport";
import Uniform from "./InformationData/Uniform";



function App() {
  return (
    <Router>
      <Navbar />
         <ScrollToTop />
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
          <Route path="/academics/sports" element={<Sports />} />
          <Route path="/academics/library" element={<Library />} />
          <Route path="/academics/smart-class" element={<SmartClass />} />

        {/* Other Sections */}
        <Route path="/gallery" element={<Gallery />} />

        {/* Information section */}
        <Route path="/information" element={<Information />} />
          <Route path="/information/books" element={<Books />} />
          <Route path="/information/campus-info" element={<Campusinfo />} />
          <Route path="/information/faculty" element={<Faculty />} />
          <Route path="/information/timing" element={<Timing />} />
          <Route path="/information/transport" element={<Transport />} />
          <Route path="/information/fee" element={<Fee />} />
          <Route path="/information/uniform" element={<Uniform />} />



        <Route path="/enroll" element={<Enroll />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
