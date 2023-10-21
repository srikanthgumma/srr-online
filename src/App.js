import logo from './logo.svg';
import './App.css';
import pic1 from './media/srr1.jpeg';
import pic2 from './media/srr2.jpeg';
import pic3 from './media/srr3.jpeg';

function App() {
  return (
    <div className="App">
      <marquee>    <h1>Venu Nani Jewellery Shop Online -- COMING SOON</h1>
</marquee>
<div id='first'>
  <img  src={pic1} />
  <img  src={pic3} />
  <img  src={pic2} />
  <img  src={pic1} />
  <img  src={pic2} />
  <img  src={pic3} />
  <img  src={pic1} />
  <img  src={pic2} />
  <img  src={pic3} />
</div>
    <footer id="foot" >
      Copyright Details Here
    </footer>
    </div>

  );
}

export default App;
