/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */

import {useState} from "react";
import { tvShows } from "./shows/data.js"
import ShowDetails  from "./shows/ShowDetails.jsx"
import ShowSelection from "./shows/ShowSelection.jsx"
export default function App() {
  const [selectedShow, setSelectedShow] = useState (null)
  return (
    <>
      <header>
        <h1>React TV</h1>
        <ShowSelection shows = {tvShows} setSelectedShow ={setSelectedShow}/>
      </header>
      <main>
        <ShowDetails show = {selectedShow}/>
      </main>
    </>
  ); 
}


// ShowDetails is a fucntion and what it does here is that it calles the parent to pass down
//set selected show and to add the information inside the braces{} that way when its called in
//ShowSelction, that data gets passed down to them as well. the App passes setSelectedShow downa as a 
//Prop
