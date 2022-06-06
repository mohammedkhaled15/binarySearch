import './App.css';
import Card from './components/Card';
import ComparingForm from './components/ComparingForm';
import Start from './components/Start';

function App() {
  
  return (
    <div className='container'>
      <Start/>
      <div className="cards-container">
        <Card/>
      </div>
        <ComparingForm/>
    </div>
  );
}

export default App;
