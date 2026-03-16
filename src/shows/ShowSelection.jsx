import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({shows, setSelectedShow}) {
  return <nav className="shows">
   {shows.map((show)=>
   <a 
   key ={show.name}
   className="show"
   onClick={()=> setSelectedShow(show)}>
    {show.name}
   </a>
  )}
  </nav>;
}

//I used .map in this function so that for every show.name that comes
// there is a <a> syntax that becomes attahced to each one
//which is then displayed and the onClick sits until it fired. When fired, it will
//fire setSelectedShow which comes app.jsx useState. UseState will hand back the data 
//
