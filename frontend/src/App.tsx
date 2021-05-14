import React, {useState} from 'react';
import AppBar from './components/AppBar';
import CenterWrapper from './components/CenterWrapper';
import { homePageState } from './types';

function App() {
  var [state, setState] = useState(homePageState);

  return (
    <>
    <AppBar/>
    <div className="App">
      <CenterWrapper setState={setState} state={state}/>
    </div>
    </>
  );
}

export default App;
