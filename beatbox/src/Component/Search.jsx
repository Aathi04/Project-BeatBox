import * as React from 'react';
import {AppTool} from './apptool';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import MusicControlBar from './MusicControlBar';

function Search() {
  return (
    <>

      <div className='sidenav' style={{backgroundColor: '#302E2E'}}>
        <Sidebar />

      </div>

      <div className='apptool'>
        <AppTool />
      </div>

      <div className='main-content'>
          <SearchBar />
      </div>

      <div className='footer'>
                <MusicControlBar />
            </div>

    </>
  )
}

export default Search;