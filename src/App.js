import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className=" text-2xl">
     <Header></Header>
     <Outlet></Outlet>
     <Footer></Footer>
    </div>
  );
}

export default App;
