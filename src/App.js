import './App.css';
import Subtitle from './components/subtitle';
import Title from './components/title';
import Image from './components/image';
import image1 from './assets/ruby.png';

function App() {
  return (
    <div className='App'>
      <Title title='I am rich'/>
      <Subtitle subtitle='I deserve it' />
      <Image source={image1}/>
    </div>
  );
};

export default App;
