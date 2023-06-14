import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import Main from './Main.jsx';

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        
        <Main selectedVideo={selectedVideo} />
      </div>
    </div>
  );
}
