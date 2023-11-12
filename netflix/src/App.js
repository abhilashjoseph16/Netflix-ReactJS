import React from "react";
import './App.css';
import { action,comedyMovies,horrorMovies,orginals, romanceMovies} from './urls'
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/RowPost/Rowpost";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url ={orginals} title='Netflix Orginals'/>
      <Rowpost url={action} title='Action' isSmall />
      <Rowpost url={comedyMovies} title='Comedy' isSmall />
      <Rowpost url={horrorMovies} title='Horror' isSmall />
      <Rowpost url={romanceMovies} title='Romance' isSmall />
    </div>
  );
}

export default App;
