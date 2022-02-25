import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddOffer from "./pages/AddOffer";
import AddRequest from "./pages/AddRequest";
import Homepage from "./pages/Homepage";
import Offer from "./pages/Offer";
import Request from "./pages/Request";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/requests" element={<Request/>}/>
        <Route exact path="/offers" element={<Offer/>}/>
        <Route exact path="/addoffer" element={<AddOffer/>}/>
        <Route exact path="/addrequest" element={<AddRequest/>}/>

      </Routes>
    </Router>
  );
}

export default App;
