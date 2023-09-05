import React from "react";
import BookTrip from "./Components/BookTrip";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Passes from "./Components/Passes";
import Region from "./Components/Region";
import Resort from "./Components/Resort";

function App() {
  return (
    <div className="App">
      <Header />
      <BookTrip />
      <Region />
      <Resort />
      <Passes />
      <Footer />
    </div>
  );
}

export default App;
