import {useState, useEffect} from "react";
import "./shows.css";
import EpisodeDetails from "../episodes/EpisodeDetails.jsx"
import EpisodeList from "../episodes/EpisodeList.jsx"

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({show}) {
  const[selectedEpisode, setSelectedEpisode] = useState(null)
 
  //this puts setselectedEpisdoe to null so that users are presented!show so 
  //old choices don't follow the new ones
  useEffect(()=> {
    setSelectedEpisode(null)
  },[show])

  if(!show){
    return(
      <section className ="details">
        <p>Enter a show to get started!</p>
      </section>
    );
  };

  return (
    <div className="show-details">
    
    <EpisodeList
      name={show.name}
      episodes={show.episodes}
      selectedEpisode={selectedEpisode}
      setSelectedEpisode={setSelectedEpisode}/>
    
    <EpisodeDetails
    episode={selectedEpisode}/>
    </div> 
  );
  
  
  
  
  
  

}
