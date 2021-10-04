import React from "react";
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Open Sans:300,400,,500,600,700', 'sans-serif']
  }
});

function App() {
  return (
    <h1 style={{fontFamily: "Open Sans"}}>Działa</h1>
  );
}

export default App;
