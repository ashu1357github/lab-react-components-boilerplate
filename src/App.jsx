import './App.css';
import GallaryFooter from './components/GallaryFooter';
import GalleryHeader from './components/GalleryHeader';
import GalleryBody from './components/GalleryBody';

function App() {
  return (
    <div>
      <GalleryHeader/>
      <div>
      <GalleryBody/>
      </div>
      <GallaryFooter/> 
    </div>
  )
}

export default App;