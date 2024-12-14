import './App.scss';
import AllRoutes from './Router/AllRoutes';
import Navbar from './Components/Navbar';
import "./assets/css/MediaQuery.scss"
import Footer from './Pages/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </>
  );
}

export default App;
