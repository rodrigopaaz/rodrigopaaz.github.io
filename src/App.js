import video from './video/video.mp4'
import './App.css';

function App() {
  return (
    <div className='div_video'>
      <h1>Rodrigo Paz</h1>
    <video
    className='main_video' 
    autoPlay
    muted
    loop
    src={video}
    type="video/mp4"
    ></video>
  </div>
  );
}

export default App;
