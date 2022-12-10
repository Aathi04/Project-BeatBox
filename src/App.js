import './App.css';
import MainContent from './Component/Main';
import MusicControlBar from './Component/MusicControlBar';
import PermanentDrawerLeft from './Component/Sidebar';


function App() {
  return (
    <>
      <div className='side-nav-bar'>
        <PermanentDrawerLeft />
      </div>
      <div className='content-container'>
        <MainContent />   
      </div>
      <div className='music-control-bar'>
        <MusicControlBar />
      </div>
    </>
  );
}

export default App;
