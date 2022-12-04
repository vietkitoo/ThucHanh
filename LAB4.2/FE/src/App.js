import './App.css';
import DatingCards from './component/DatingCard';
import Header from './component/Header';
import SwipeButtons from './component/SwipeButton';

function App(){
  return(
    <div className='app'>
      <Header />
      <DatingCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
