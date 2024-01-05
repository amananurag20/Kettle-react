import logo from './logo.svg';
import './App.css';
import Header from"./components/Header";
import InfoContainer from './components/InfoContainer';
import BoneBroth from './components/BoneBroth';
import CustomerReview from './components/CustomerReview';
import Marque from './components/Marque';
import HealthFocus from './components/HealthFocus';
function App() {
  return (
    <div className="App">
      <Header/>
      <InfoContainer/>
      <BoneBroth/>
      <CustomerReview/>
      <Marque/>
      <HealthFocus/>
    </div>
  );
}

export default App;
