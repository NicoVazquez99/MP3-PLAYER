import React from 'react';
import ReactDOM from 'react-dom/client';
import AudioPlayer from './components/AudioPlayer';

//styles
import './styles/index.css';
import './styles/customize-progress-bar.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
    <AudioPlayer />
    </div>
  </React.StrictMode>
);