import React, { useState } from 'react';
import CenterWrapper from './components/CenterWrapper';

function App() {
  const [descImageProgress, setDescImageProgress] = useState<'static' | 'progress' | 'image'>("static") //Bharadwaj Added Static Typechecking for State Progress In the Center, if bugs come up, might want to tweak the type
  const [uploadTags, setUploadTags] = useState<'upload' | 'tags'>('upload') //Static Type Checking for the third row, similar to comment above, feel free too tweak
  return (
    <div className="App">
      <CenterWrapper descImageProgress={descImageProgress} setDescImageProgress={setDescImageProgress} uploadTags={uploadTags} setUploadTags={setUploadTags}/>
    </div>
  );
}

export default App;
