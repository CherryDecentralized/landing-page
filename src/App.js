import React from 'react';
import Header from './components/Header'
import ParallaxView from './components/ParallaxView';
import './style/App.css';
import './style/IconScroll.css';

function App() {
  return (
    <>
      <Header/>
      <ParallaxView></ParallaxView>
      <div class="icon-scroll"></div>
    </>
  );
}
export default App;