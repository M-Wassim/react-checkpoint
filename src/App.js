import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navbar'
import Jumb from './components/Jumbo'
import Car from './components/Carroussel'
import Txt from './components/Text'
import Card from './components/Cards'
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      
      <Navigation/>
      <Car/>
      <Txt/>
      <Card/>
      <Jumb/>
      <Form/>
      
    </div>

    
  );
}

export default App;
