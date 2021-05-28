import React, {useState} from 'react';
import AppBar from './components/AppBar';
import CenterWrapper from './components/CenterWrapper';
import { homePageState } from './types';

function App() {
  const [state, setState] = useState(homePageState);
  const [imageURL, setImageURL] = useState("");
  const [label, setLabel] = useState("");
  const [progress, setProgress] = useState(homePageState);

  return (
    <>
    <AppBar/>
    <div className="App">
      <CenterWrapper setState={setState} state={state} imageURL={imageURL} setImageURL={setImageURL} label={label} setLabel={setLabel} progress={progress} setProgress={setProgress}/>
    </div>
    </>
  );
}

export default App;
