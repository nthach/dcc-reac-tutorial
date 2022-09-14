import React, {useState} from "react";
import DisplayEnteries from "./Components/DisplayEntries/DisplayEntries";
import DisplayEntries from './Components/DisplayEntries/DisplayEntries'

function App() {
  const[entries, setEntries] = useState([{weight: 175, date: '11/23/2022'}])

  return (
    <div>
      <DisplayEnteries parentEntries={entries} />
 

    </div>
  );
}

export default App;
